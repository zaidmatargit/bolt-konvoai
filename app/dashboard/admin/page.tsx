import { createClient } from '@/utils/supabase/server'
    import { redirect } from 'next/navigation'
    import UserManagement from '@/components/admin/user-management'
    import SecuritySettings from '@/components/admin/security-settings'
    import SystemAnalytics from '@/components/admin/system-analytics'

    export default async function AdminDashboard() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user || user.user_metadata?.role !== 'admin') {
        return redirect('/')
      }

      return (
        <div className="space-y-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">User Management</h2>
              <UserManagement />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
              <SecuritySettings />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">System Analytics</h2>
            <SystemAnalytics />
          </div>
        </div>
      )
    }
