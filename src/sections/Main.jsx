
import { motion } from "framer-motion"
function Main({children}) {

  return (
    <motion.main   className="  relative">
        {children}
    </motion.main>
  )
}

export default Main