import { createClient } from '@supabase/supabase-js'
    import fs from 'fs/promises'
    import 'dotenv/config'

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    )

    async function runMigrations() {
      try {
        console.log('Enabling SQL execution...')
        
        // Enable SQL execution function
        const enableSql = await fs.readFile('./migrations/enable-sql-execution.sql', 'utf8')
        const { error: enableError } = await supabase.rpc('execute_sql_raw', { query: enableSql })
        if (enableError) throw enableError

        console.log('Running migrations...')
        
        // Read migration files
        const initMigration = await fs.readFile('./migrations/20240101000000_init.sql', 'utf8')
        const sampleData = await fs.readFile('./migrations/20240101000001_sample_data.sql', 'utf8')

        // Execute migrations
        const { error: initError } = await supabase.rpc('execute_sql', { query: initMigration })
        if (initError) throw initError

        const { error: sampleError } = await supabase.rpc('execute_sql', { query: sampleData })
        if (sampleError) throw sampleError

        console.log('Migrations completed successfully!')
      } catch (error) {
        console.error('Migration failed:', error)
        process.exit(1)
      }
    }

    runMigrations()
