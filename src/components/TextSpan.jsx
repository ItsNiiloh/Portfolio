import { motion, useAnimationControls } from "framer-motion"
import { useState } from "react";

const TextSpan = ({children}) => {
    const controls = useAnimationControls();
    const [isHovered, setIsHovered] = useState(false);

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.25, 0.75, 1)",
                "scale3d(0.75, 1.25, 1)",
                "scale3d(1.15, 0.85, 1)",
                "scale3d(0.95, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ]
        })
        setIsHovered(true);
    }

  return (
    <motion.span 
    animate={controls}
    onMouseOver = {() => {
        if (!isHovered)
            rubberBand();
        }}
    onAnimationComplete={() => setIsHovered(false)}
    >
        {children}
    </motion.span>
  );
}

export default TextSpan;