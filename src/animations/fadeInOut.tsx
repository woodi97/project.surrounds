import type { Variants } from 'framer-motion'

export const fadeInOut: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
    },
  },
  exit: { opacity: 0, x: -100, y: -500 },
}

export const modalInOut: Variants = {
  hidden: {
    opacity: 0,
    y: '-20vh',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}