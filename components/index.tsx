import LayoutProps from '../types/layout'
import Header from './layout/header/Header'
import Hero from './layout/menu/Hero'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-20">
      <Header />
      {children}
    </div>
  )
}
export default Layout
