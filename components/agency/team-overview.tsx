import { createClient } from '@/utils/supabase/server'
    import { TeamMemberCard } from './team-member-card'

    export async function TeamOverview() {
      const supabase = createClient()
      const { data: team } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: true })

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {team?.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      )
    }
