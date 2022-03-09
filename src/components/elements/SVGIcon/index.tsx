
import cn from 'classnames'
import { FC } from 'react'

const SVGIcon: FC<{
  name: string
  width?: number
  height?: number
  fill?: string
  className?: string
}> = ({ name, width = 20, height = 20, fill, className }) => {
  return (
    <svg className={cn('svg-icon', className)} style={{ width, height }} fill={fill}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default SVGIcon
