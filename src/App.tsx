import { useState } from 'react'
import {motion} from "framer-motion";
import {PulsingButton} from "./components/PulsingButton";

function App() {

  return (
    <div>
      {/*<motion.div className="box"
                  initial={{ x: 0 }}
                  animate={{x: 100}}
                  transition={{delay: 2}}
                  transition={{duration: 2, ease: "easeInOut"}}
      />*/}

        {/*<motion.div className="box"
                    animate={{
                        scale: [1, 2, 3, 2, 1],
                        rotate: [0, 180, 90, 270]
                    }}
                    transition={{duration: 5}}
        />*/}

        <PulsingButton/>
    </div>
  )
}

export default App
