import './globals.css'
    import { Inter } from 'next/font/google'

    const inter = Inter({ subsets: ['latin'] })

    export const metadata = {
      title: 'Freelancer Platform',
      description: 'Manage your freelance projects efficiently',
    }

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <html lang="en">
          <body className={inter.className}>
            <main className="min-h-screen bg-background">
              {children}
            </main>
          </body>
        </html>
      )
    }
