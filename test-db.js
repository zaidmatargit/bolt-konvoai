import { createClient } from '@supabase/supabase-js'
    import 'dotenv/config'

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    )

    async function testDatabase() {
      try {
        console.log('Testing database connection...')

        // Test projects table
        const { data: projects, error: projectsError } = await supabase
          .from('projects')
          .select('*')
        
        if (projectsError) throw projectsError
        console.log('Projects:', projects)

        // Test team_members table
        const { data: team, error: teamError } = await supabase
          .from('team_members')
          .select('*')
        
        if (teamError) throw teamError
        console.log('Team Members:', team)

        // Test users table
        const { data: users, error: usersError } = await supabase
          .from('users')
          .select('*')
        
        if (usersError) throw usersError
        console.log('Users:', users)

        console.log('Database test completed successfully!')
      } catch (error) {
        console.error('Database test failed:', error)
        process.exit(1)
      }
    }

    testDatabase()
