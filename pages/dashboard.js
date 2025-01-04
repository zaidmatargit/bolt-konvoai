import { withAuth } from '../utils/auth'
    import { signOut } from '../utils/auth'
    import Link from 'next/link'

    function Dashboard({ user }) {
      const handleSignOut = async () => {
        await signOut()
        window.location.href = '/login'
      }

      return (
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-bold">Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Welcome, {user.email}</span>
                  <button
                    onClick={handleSignOut}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <main className="p-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Your Role: {user.role}</h2>
              {/* Add role-specific content here */}
            </div>
          </main>
        </div>
      )
    }

    export default Dashboard

    export const getServerSideProps = withAuth(['freelancer', 'agency', 'client', 'admin'])
