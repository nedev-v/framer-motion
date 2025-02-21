import { useState } from 'react'
import {motion} from "framer-motion";

function App() {

  return (
    <div>
      <motion.div className="box"
                  animate={{ skewY: 20}}
      />
    </div>
  )
}

export default App
