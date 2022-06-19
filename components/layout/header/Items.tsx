import { LiItems } from '../../../types/layout'

const Items: React.FC<LiItems> = ({ children, link }) => {
  return (
    <li className="px-5 font-medium hover:text-blue-600 duration-300 text-xl">
      <a href={link}>{children}</a>
    </li>
  )
}
export default Items
