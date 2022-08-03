import { ArcText } from '@arctext/react'
import { SplideSlide } from '@splidejs/react-splide'
import { FC, useEffect, useState } from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'
import css from './GetMeSlide.module.scss'
import cn from 'classnames'
import { useAppSelector } from '../../../redux/hooks'

const GetMeSlide: FC = () => {
  const [dark, setDark] = useState<boolean>(false)
  const hash = useAppSelector((state) => state.app.currentHash)
  const isMobile = useAppSelector((state) => state.app.isMobile)

  useEffect(() => {
    if (hash === '#get-me-here') {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [hash])

  return (
    <SplideSlide className={cn(css.GetMe, { [css.GetMe_dark]: dark })} data-splide-hash={'get-me-here'}>
      <div className={css.GetMe__Wrapper}>
        <Zoom>
          <a
            href={'mailto:sburgpit@gmail.com'}
            className={cn(css.GetMe__Button, 'hover')}
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg viewBox='0 0 220 217' width={isMobile ? 250 : 300} height={isMobile ? 250 : 300}>
              <path d='M117.859 81.25H111.804C113.015 93.3602 120.281 99.4153 126.336 101.837H85.1611V107.892H126.336C120.281 110.314 113.015 116.37 111.804 128.48H117.859C119.07 117.581 127.547 110.314 134.813 107.892V101.837C127.547 99.4153 119.07 92.1492 117.859 81.25Z'></path>
            </svg>
            <ArcText
              text={'Get me here ✽ Get me here ✽ '}
              radius={isMobile ? 125 : 150}
              characterWidth={12.7}
              className={css.GetMe__Button__ArcText}
            />
          </a>
        </Zoom>
        <div className={css.Copyright}>&copy; {new Date().getFullYear()}</div>
      </div>
    </SplideSlide>
  )
}

export default GetMeSlide
