import { FC } from 'react'
import { SplideSlide } from '@splidejs/react-splide'
import cn from 'classnames'
import css from './ExpSliderSlide.module.scss'

export interface IExpSlide {
  title: string
  subtitle: string
  desc: string
  date: string
}

const ExpSliderSlide: FC<IExpSlide> = ({ title, subtitle, desc, date }) => {
  return (
    <SplideSlide className={css.Slide}>
      <div className={css.Slide__Wrapper}>
        <div className={css.Slide__Backdrop}>
          <div className={cn(css.Slide__Backdrop__Circle, css.Slide__Backdrop__Circle_1)} />
          <div className={cn(css.Slide__Backdrop__Circle, css.Slide__Backdrop__Circle_2)} />
        </div>
        <div className={cn(css.Slide__Glass)}>
          <div className={css.Slide__Header}>
            <div className={css.Slide__Title}>{title}</div>
            <div className={css.Slide__Subtitle}>{subtitle}</div>
          </div>
          <div className={css.Slide__Desc}>{desc}</div>
          <div className={css.Slide__Date}>{date}</div>
        </div>
      </div>
    </SplideSlide>
  )
}

export default ExpSliderSlide
