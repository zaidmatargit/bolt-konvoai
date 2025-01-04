import Link from 'next/link'
    import { createClient } from '@/utils/supabase/server'
    import { Button } from '@/components/ui/button'

    export default function DashboardNav({ role }: { role: string }) {
      const getLinks = () => {
        switch (role) {
          case 'freelancer':
            return [
              { href: '/dashboard/freelancer', label: 'Projects' },
              { href: '/dashboard/freelancer/tasks', label: 'Tasks' },
              { href: '/dashboard/freelancer/chat', label: 'Chat' },
              { href: '/dashboard/freelancer/reports', label: 'Reports' }
            ]
          case 'agency':
            return [
              { href: '/dashboard/agency', label: 'Overview' },
              { href: '/dashboard/agency/projects', label: 'Projects' },
              { href: '/dashboard/agency/team', label: 'Team' },
              { href: '/dashboard/agency/reports', label: 'Reports' }
            ]
          case 'client':
            return [
              { href: '/dashboard/client', label: 'Projects' },
              { href: '/dashboard/client/requests', label: 'Requests' },
              { href: '/dashboard/client/chat', label: 'Chat' }
            ]
          case 'admin':
            return [
              { href: '/dashboard/admin', label: 'Users' },
              { href: '/dashboard/admin/security', label: 'Security' },
              { href: '/dashboard/admin/settings', label: 'Settings' }
            ]
          default:
            return []
        }
      }

      const links = getLinks()

      const handleSignOut = async () => {
        const supabase = createClient()
        await supabase.auth.signOut()
        window.location.href = '/login'
      }

      return (
        <nav className="w-64 border-r p-4 flex flex-col">
          <div className="flex-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-4 rounded hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button
            variant="outline"
            onClick={handleSignOut}
            className="w-full"
          >
            Sign Out
          </Button>
        </nav>
      )
    }
