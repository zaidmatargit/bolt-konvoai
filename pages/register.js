import { useState } from 'react'
    import { signUp } from '../utils/auth'
    import { useRouter } from 'next/router'
    import Link from 'next/link'

    export default function Register() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [role, setRole] = useState('freelancer')
      const [error, setError] = useState(null)
      const router = useRouter()

      const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        
        try {
          await signUp(email, password, role)
          router.push('/dashboard')
        } catch (err) {
          setError(err.message)
        }
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="freelancer">Freelancer</option>
                  <option value="agency">Agency</option>
                  <option value="client">Client</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/login" className="text-blue-600 hover:text-blue-800">
                Already have an account? Login
              </Link>
            </div>
          </div>
        </div>
      )
    }
