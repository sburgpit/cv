import { SplideSlide } from '@splidejs/react-splide'
import { FC } from 'react'
import css from './AboutSlide.module.scss'
import cn from 'classnames'
import { Fade } from 'react-awesome-reveal'

const AboutSlide: FC = () => {
  return (
    <SplideSlide className={css.About} data-splide-hash='about'>
      <div className={css.About__Wrapper}>
        <Fade delay={400} duration={1500} triggerOnce={true}>
          <h2 className={css.About__Title}>About me</h2>
        </Fade>

        <div className={css.About__Text}>
          <Fade delay={1000} duration={1500} triggerOnce={true}>
            <span>
              Programming is not just a job for me, it is my <span className={css.About__Text_colored}>passion</span>. I
              open up new horizons every day and I believe that there are no impossible tasks. I’m fast to learn and
              understand new technologies.
            </span>
          </Fade>
        </div>

        <div className={cn(css.About__Text, css.About__Text_bold)}>
          <br />
          <Fade delay={1400} duration={1500} triggerOnce={true}>
            <span>
              Learning is my <span className={css.About__Text_colored}>state of mind</span>.
            </span>
          </Fade>
        </div>
      </div>
    </SplideSlide>
  )
}

export default AboutSlide
