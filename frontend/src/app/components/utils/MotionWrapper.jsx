'use client'

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function MotionWrapper({ children }) {
  const pathName = usePathname()
  return (
    <motion.div
      key={pathName}
      initial={{ opacity: 0, x: 1000 }} //　初期状態
      animate={{ opacity: 1, x: 0 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
      transition={{ duration: .5, ease: [.91, 0, .19, 1] }}
    >
      {children}
    </motion.div>
  )
}