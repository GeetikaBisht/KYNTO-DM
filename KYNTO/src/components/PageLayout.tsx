import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative">
        <Navbar transparent={false} />
      </div>
      {children}
      <Footer />
    </div>
  )
}
