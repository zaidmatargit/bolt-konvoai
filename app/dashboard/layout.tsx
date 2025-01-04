import { createClient } from '@/utils/supabase/server'
    import { redirect } from 'next/navigation'
    import DashboardNav from '@/components/dashboard-nav'

    export default async function DashboardLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        return redirect('/login')
      }

      return (
        <div className="flex min-h-screen">
          <DashboardNav role={user.user_metadata?.role || 'freelancer'} />
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      )
    }
