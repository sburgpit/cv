import { FC, useEffect, useState } from 'react'
import SVGIcon from '../SVGIcon'
import css from './Title.module.scss'
import { Slide } from 'react-awesome-reveal'

const Title: FC<{ text: string }> = ({ text }) => {
  const [rotate, setRotate] = useState<number>(0)

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return () => document.removeEventListener('scroll', scrollHandler)
  }, [])

  const scrollHandler = () => {
    setRotate((prev) => prev + 2)
  }

  return (
    <Slide direction='left'>
      <div className={css.Title}>
        <div className={css.Title__Icon} style={{ transform: `rotate(${rotate}deg)` }}>
          <SVGIcon name={'asterisk'} width={30} height={30} />
        </div>
        <p>{text}</p>
      </div>
    </Slide>
  )
}

export default Title
