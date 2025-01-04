import { createClient } from '@/utils/supabase/server'
    import { redirect } from 'next/navigation'

    export default function RegisterPage() {
      const signUp = async (formData: FormData) => {
        'use server'
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const role = formData.get('role') as string
        const supabase = createClient()

        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
            data: {
              role
            }
          },
        })

        if (error) {
          return redirect('/register?message=Could not authenticate user')
        }

        return redirect('/dashboard')
      }

      return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
          <form
            className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
            action={signUp}
          >
            <label className="text-md" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="email"
              placeholder="you@example.com"
              required
            />
            <label className="text-md" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
            <label className="text-md" htmlFor="role">
              Role
            </label>
            <select
              name="role"
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              required
            >
              <option value="freelancer">Freelancer</option>
              <option value="agency">Agency</option>
              <option value="client">Client</option>
            </select>
            <button className="bg-primary text-primary-foreground rounded-md px-4 py-2">
              Sign Up
            </button>
          </form>
        </div>
      )
    }
