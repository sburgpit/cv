import { FC } from 'react'
import Reveal, { RevealProps } from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'

interface IRotate extends RevealProps {
  deg?: number
}

export const Rotate: FC<IRotate> = ({ deg = 360, children, ...props }) => {
  const kf = keyframes`
    from {
      opacity: 0;
      transfrom: rotate(0deg);
    }

    to {
      opacity: 1;
      transform: rotate(${deg}deg);
    }
  `
  return (
    <Reveal {...props} keyframes={kf}>
      {children}
    </Reveal>
  )
}
