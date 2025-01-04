import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
    import { NextResponse } from 'next/server'
    import type { NextRequest } from 'next/server'

    export async function middleware(request: NextRequest) {
      const res = NextResponse.next()
      const supabase = createMiddlewareClient({ req: request, res })

      const { data: { user } } = await supabase.auth.getUser()
      const pathname = request.nextUrl.pathname

      // Redirect unauthenticated users
      if (!user && !pathname.startsWith('/auth')) {
        return NextResponse.redirect(new URL('/login', request.url))
      }

      // Role-based access control
      if (user) {
        const role = user.user_metadata?.role || 'freelancer'
        
        // Freelancer routes
        if (role === 'freelancer' && !pathname.startsWith('/dashboard/freelancer')) {
          return NextResponse.redirect(new URL('/dashboard/freelancer', request.url))
        }

        // Agency routes
        if (role === 'agency' && !pathname.startsWith('/dashboard/agency')) {
          return NextResponse.redirect(new URL('/dashboard/agency', request.url))
        }

        // Client routes
        if (role === 'client' && !pathname.startsWith('/dashboard/client')) {
          return NextResponse.redirect(new URL('/dashboard/client', request.url))
        }

        // Admin routes
        if (role === 'admin' && !pathname.startsWith('/dashboard/admin')) {
          return NextResponse.redirect(new URL('/dashboard/admin', request.url))
        }
      }

      return res
    }

    export const config = {
      matcher: [
        '/dashboard/:path*',
        '/auth/:path*',
      ],
    }
