import { createClient } from '@/utils/supabase/server'
    import { redirect } from 'next/navigation'
    import TeamOverview from '@/components/agency/team-overview'
    import ProjectManagement from '@/components/agency/project-management'
    import ClientPortal from '@/components/agency/client-portal'

    export default async function AgencyDashboard() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user || user.user_metadata?.role !== 'agency') {
        return redirect('/')
      }

      return (
        <div className="space-y-8">
          <h1 className="text-2xl font-bold">Agency Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Team Overview</h2>
              <TeamOverview />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Project Management</h2>
              <ProjectManagement />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Client Portals</h2>
            <ClientPortal />
          </div>
        </div>
      )
    }
