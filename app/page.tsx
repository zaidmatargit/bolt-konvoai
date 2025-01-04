import Link from 'next/link'

    export default function Home() {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold mb-8">Freelancer Platform</h1>
          <div className="flex gap-4">
            <Link href="/login" className="px-4 py-2 bg-primary text-primary-foreground rounded">
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 bg-secondary text-secondary-foreground rounded">
              Register
            </Link>
          </div>
        </div>
      )
    }
