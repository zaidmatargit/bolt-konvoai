import Link from 'next/link'

    export default function Unauthorized() {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Unauthorized</h1>
            <p className="mb-4">You don't have permission to access this page.</p>
            <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
              Go to Dashboard
            </Link>
          </div>
        </div>
      )
    }
