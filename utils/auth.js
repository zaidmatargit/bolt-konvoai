import { createClient } from '@supabase/supabase-js'

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase URL or Anon Key')
    }

    export const supabase = createClient(supabaseUrl, supabaseKey)

    // Get current user session
    export const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) throw error
      return session
    }

    // Get current user with role
    export const getUser = async () => {
      const session = await getSession()
      if (!session) return null
      
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error) throw error

      return {
        ...user,
        role: user.user_metadata?.role || 'freelancer'
      }
    }

    // Sign in with email and password
    export const signIn = async (email, password) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error
      return data
    }

    // Sign up new user
    export const signUp = async (email, password, role) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role
          }
        }
      })

      if (error) throw error
      return data
    }

    // Sign out
    export const signOut = async () => {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    }

    // Protected route wrapper
    export const withAuth = (roles = []) => async (context) => {
      const user = await getUser()
      
      if (!user) {
        return {
          redirect: {
            destination: '/login',
            permanent: false
          }
        }
      }

      if (roles.length && !roles.includes(user.role)) {
        return {
          redirect: {
            destination: '/unauthorized',
            permanent: false
          }
        }
      }

      return {
        props: {
          user
        }
      }
    }
