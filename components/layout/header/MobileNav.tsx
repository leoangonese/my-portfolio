import { MobileType } from '../../../types/layout'
import NavBar from './NavBar'

const MobileNav: React.FC<MobileType> = ({ open }) => {
  return (
    <nav
      className={`${
        open === true ? 'fixed' : 'hidden'
      } md:hidden bg-primary right-0 w-full h-full flex justify-center items-center`}
    >
      <NavBar />
    </nav>
  )
}
export default MobileNav
