import { createClient } from '@/utils/supabase/server'
    import { redirect } from 'next/navigation'
    import ProjectStatus from '@/components/client/project-status'
    import RequestSystem from '@/components/client/request-system'
    import CommunicationHub from '@/components/client/communication-hub'

    export default async function ClientDashboard() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user || user.user_metadata?.role !== 'client') {
        return redirect('/')
      }

      return (
        <div className="space-y-8">
          <h1 className="text-2xl font-bold">Client Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Project Status</h2>
              <ProjectStatus />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Request System</h2>
              <RequestSystem />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Communication Hub</h2>
            <CommunicationHub />
          </div>
        </div>
      )
    }
