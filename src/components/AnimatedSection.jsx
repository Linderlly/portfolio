/**
 * Componente para animar elementos quando entram na tela
 * Usa framer-motion + react-intersection-observer
 * 
 * @component
 * @author Linderlly Santana
 */

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AnimatedSection({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    distance = 50,
    className = ''
}) {
    // Hook que detecta se o elemento entra na tela
    const { ref, inView } = useInView({
        triggerOnce: true,  // Anima apenas uma vez
        threshold: 0.1,   // 10% do elemento visível
        rootMargin: '0px 0px -50px 0px'  // Antecipa um pouco
    })

    // Define a posição inicial baseada na direção

    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { y: distance, x: 0 }
            case 'down':
                return { y: -distance, x: 0 }
            case 'left':
                return { y: -distance, y: 0 }
            case 'right':
                return { y: distance, y: 0 }
            default:
                return { y: distance, x: 0 }
        }
    }

    const initialPosition = getInitialPosition()

    // Variantes de animação
    const variants = {
        hidden: { opacity: 0, ...initialPosition },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] // curva de animação suave
            } 
        }
    }

    return ( <motion.div
    ref={ref}
    variants={variants}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    className={className}
    >
        {children}
        
    </motion.div>
    )
}