import { useState } from 'react'
import {motion} from "framer-motion";
import {PulsingButton} from "./components/PulsingButton";
import {BouncingLoader} from "./components/BouncingLoader";

function App() {

    const [isVisible, setIsVisible] = useState(true);
    const variants = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {opacity: 1, scale: 1},
        exit: {opacity: 0, scale: 0.5}
    };

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

        {/*<PulsingButton/>*/}
        {/*<BouncingLoader/>*/}

        <motion.div className="box"
            variants={variants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            exit="exit"
                    transition={{duration: 0.3, ease: "easeOut"}}
                    onClick={() => setIsVisible(!isVisible)}
        >

        </motion.div>
    </div>
  )
}

export default App
