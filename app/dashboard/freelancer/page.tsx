import { createClient } from '@/utils/supabase/server'
    import { redirect } from 'next/navigation'
    import ProjectBoard from '@/components/freelancer/project-board'
    import TaskOverview from '@/components/freelancer/task-overview'
    import TimeTracker from '@/components/freelancer/time-tracker'

    export default async function FreelancerDashboard() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user || user.user_metadata?.role !== 'freelancer') {
        return redirect('/')
      }

      return (
        <div className="space-y-8">
          <h1 className="text-2xl font-bold">Freelancer Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
              <ProjectBoard />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Task Overview</h2>
              <TaskOverview />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Time Tracking</h2>
            <TimeTracker />
          </div>
        </div>
      )
    }
