import { SplideSlide } from '@splidejs/react-splide'
import { FC } from 'react'
import css from './SkillsSlide.module.scss'
import { Fade, Slide } from 'react-awesome-reveal'
import { useAppSelector } from '../../../redux/hooks'

const SkillsSlide: FC = () => {
  const isMobile = useAppSelector((state) => state.app.isMobile)

  return (
    <SplideSlide className={css.Skills} data-splide-hash='skills'>
      <div className={css.Skills__Wrapper}>
        <Fade duration={1500} triggerOnce={true}>
          <h2 className={css.Skills__Title}>Skills</h2>
        </Fade>
        <div className={css.Skills__Row__Wrapper}>
          <div className={css.Skills__Row}>
            <Slide direction='down' triggerOnce={true}>
              <h3>Basic</h3>
            </Slide>
            <Fade className={css.Skills__Row__List} delay={400} cascade={!isMobile} triggerOnce={true}>
              <div>HTML5</div>
              <div>BEM</div>
              <div>CSS3</div>
              <div>LESS</div>
              <div>Sass</div>
              <div>JavaScript</div>
            </Fade>
          </div>
          <div className={css.Skills__Row}>
            <Slide direction='down' triggerOnce={true}>
              <h3>Frontend</h3>
            </Slide>
            <Fade className={css.Skills__Row__List} delay={400} cascade={!isMobile} triggerOnce={true}>
              <div>React</div>
              <div>React Native</div>
              <div>Redux</div>
              <div>TypeScript</div>
            </Fade>
          </div>
          <div className={css.Skills__Row}>
            <Slide direction='down' triggerOnce={true}>
              <h3>Backend</h3>
            </Slide>
            <Fade className={css.Skills__Row__List} delay={400} cascade={!isMobile} triggerOnce={true}>
              <div>Node</div>
              <div>Express.js</div>
            </Fade>
          </div>
          <div className={css.Skills__Row}>
            <Slide direction='down' triggerOnce={true}>
              <h3>Databases</h3>
            </Slide>
            <Fade className={css.Skills__Row__List} delay={400} cascade={!isMobile} triggerOnce={true}>
              <div>MongoDB</div>
              <div>MySQL</div>
            </Fade>
          </div>
          <div className={css.Skills__Row}>
            <Slide direction='down' triggerOnce={true}>
              <h3>Tools</h3>
            </Slide>
            <Fade className={css.Skills__Row__List} delay={400} cascade={!isMobile} triggerOnce={true}>
              <div>Git</div>
              <div>GitHub</div>
              <div>npm</div>
              <div>Webpack</div>
            </Fade>
          </div>
        </div>
      </div>
    </SplideSlide>
  )
}

export default SkillsSlide
