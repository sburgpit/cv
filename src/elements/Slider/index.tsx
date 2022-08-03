import { FC, ReactNode, useEffect, useState } from 'react'
import { Splide, SplideTrack } from '@splidejs/react-splide'
import { URLHash } from '@splidejs/splide-extension-url-hash'
import cn from 'classnames'
import '@splidejs/react-splide/css/core'
import css from './Slider.module.scss'
import './Slider.scss'
import { useAppSelector } from '../../redux/hooks'

export interface ISlider {
  children: ReactNode
}

const Slider: FC<ISlider> = ({ children }) => {
  const [width, setWidth] = useState<number | string>('100%')
  const [height, setHeight] = useState<number | string>('100%')
  const [dark, setDark] = useState<boolean>(false)
  const hash = useAppSelector((state) => state.app.currentHash)

  useEffect(() => {
    if (hash === '#get-me-here') {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [hash])

  const resizeHandler = () => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
    console.log(window.innerHeight)
    console.log(window.innerWidth)
  }

  useEffect(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.addEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <Splide
      hasTrack={false}
      className={cn('main-slider', css.Slider)}
      tag={'section'}
      options={{
        width: width,
        height: height,
        fixedWidth: width,
        fixedHeight: height,
        direction: 'ttb',
        paginationDirection: 'ttb',
        waitForTransition: true,
        updateOnMove: true,
        wheel: true,
        arrows: false,
        arrowPath: 'm24 40.6-2.7-2.8 11.85-11.85H7.45V22.1h25.7L21.3 10.25l2.7-2.8L40.6 24Z',
        flickMaxPages: 1,
        classes: {
          arrows: cn('splide__arrows', css.Slider__Arrows),
          arrow: cn('splide__arrow', css.Slider__Arrow),
          prev: cn('splide__arrow--prev', css.Slider__Arrow_prev),
          next: cn('splide__arrow--next', css.Slider__Arrow_next),
          pagination: cn('splide__pagination', css.Slider__Pagination),
          page: cn('splide__pagination__page', css.Slider__Pagination__Point),
        },
      }}
      extensions={{ URLHash }}
    >
      <SplideTrack>{children}</SplideTrack>
    </Splide>
  )
}

export default Slider
