import { SplideSlide } from '@splidejs/react-splide'
import { FC } from 'react'
import css from './MoreMeSlide.module.scss'
import { Fade } from 'react-awesome-reveal'
import cn from 'classnames'
import { useAppSelector } from '../../../redux/hooks'

const MoreMeSlide: FC = () => {
  const today = new Date()
  const birthDate = new Date('Febrary 5, 2002, 05:00:00')
  const age = today.getFullYear() - birthDate.getFullYear()
  const isMobile = useAppSelector((state) => state.app.isMobile)

  return (
    <SplideSlide className={cn(css.MoreMe)} data-splide-hash={'more-me'}>
      <Fade delay={300} duration={1500} triggerOnce={true}>
        <div className={css.MoreMe__Wrapper}>
          <h2 className={css.MoreMe__Title}>More Me</h2>
          <div className={css.MoreMe__List}>
            <div className={css.MoreMe__List__Item}>
              <div className={css.MoreMe__List__Item__Key}>Age</div>
              <div className={css.MoreMe__List__Item__Value}>{age} y.o</div>
            </div>
            <div className={css.MoreMe__List__Item}>
              <div className={css.MoreMe__List__Item__Key}>Nationality</div>
              <div className={css.MoreMe__List__Item__Value}>Ukrainian</div>
            </div>
            <div className={css.MoreMe__List__Item}>
              <div className={css.MoreMe__List__Item__Key}>Location</div>
              <div className={css.MoreMe__List__Item__Value}>nomad</div>
            </div>
            <div className={css.MoreMe__List__Item}>
              <div className={css.MoreMe__List__Item__Key}>Languages</div>
              <div className={css.MoreMe__List__Item__Value}>
                Ukrainian (native){isMobile ? <br /> : ','} Russian (native){isMobile ? <br /> : ','} English (A2)
              </div>
            </div>
            <div className={css.MoreMe__List__Item}>
              <div className={css.MoreMe__List__Item__Key}>Contacts</div>
              <a className={css.MoreMe__List__Item__Value} href='mailto:sburgpit@gmail.com'>
                sburgpit@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </SplideSlide>
  )
}

export default MoreMeSlide
