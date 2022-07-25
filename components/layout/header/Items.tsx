import { motion } from 'framer-motion'
import { LiItems } from '../../../types/layout'

const Items: React.FC<LiItems> = ({ children, link, color }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`px-5 py-5 md:py-0 font-medium ${
        color === true ? 'hover:text-black' : 'hover:text-primary'
      } duration-300 text-xl`}
    >
      <a href={link}>{children}</a>
    </motion.li>
  )
}
export default Items
