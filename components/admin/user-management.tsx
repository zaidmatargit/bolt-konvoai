import { createClient } from '@/utils/supabase/server'
    import { UserCard } from './user-card'

    export async function UserManagement() {
      const supabase = createClient()
      const { data: users } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: true })

      return (
        <div className="space-y-4">
          {users?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )
    }
