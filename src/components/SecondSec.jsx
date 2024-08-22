import React from 'react'
import { motion } from 'framer-motion'
import { handleMarquee } from '../globalStore'

function SecondSec() {

  return (
    <motion.div id="secondSec" onViewportEnter={() => handleMarquee("second")} onViewportLeave={() => handleMarquee("none")} className="h-100vh bg-slate-400 w-full"></motion.div>
  )
}

export default SecondSec