import { createClient } from '@/utils/supabase/server'
    import { redirect } from 'next/navigation'

    export default async function DashboardPage() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        return redirect('/login')
      }

      const role = user.user_metadata?.role || 'freelancer'

      if (role === 'freelancer') {
        return redirect('/dashboard/freelancer')
      } else if (role === 'agency') {
        return redirect('/dashboard/agency')
      } else if (role === 'client') {
        return redirect('/dashboard/client')
      } else if (role === 'admin') {
        return redirect('/dashboard/admin')
      }

      return redirect('/')
    }
