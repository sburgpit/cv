import { FC } from 'react'
import { Slide, Fade } from 'react-awesome-reveal'
import SVGIcon from '../elements/SVGIcon'
import css from './FirstScreen.module.scss'

const FirstScreen: FC = () => {
  const isMobile = window.innerWidth < 992
  return isMobile ? (
    <section className={css.FirstScreen}>
      <Slide direction={'left'}>
        <div className={css.FirstScreen__Word}>Middle</div>
      </Slide>
      <Slide direction={'right'}>
        <div className={css.FirstScreen__Word}>Frontend</div>
      </Slide>
      <Slide direction={'left'}>
        <div className={css.FirstScreen__Word}>Developer</div>
      </Slide>
      <div className={css.FirstScreen__Wrapper}>
        <Fade duration={2000}>
          <div className={css.FirstScreen__Asterisk}>
            <SVGIcon name={'asterisk'} width={200} height={200} />
          </div>
        </Fade>
        <div className={css.FirstScreen__Word__Comment}>
          <Fade delay={1000}>
            <div>
              <span>{'//'}</span>React
            </div>
          </Fade>
          <Fade delay={850}>
            <div>
              <span>{'//'}</span>React Native
            </div>
          </Fade>
          <Fade delay={700}>
            <div>
              <span>{'//'}</span>Typescript
            </div>
          </Fade>
        </div>
      </div>
    </section>
  ) : (
    <section className={css.FirstScreen}>
      <Slide direction='left' cascade={true}>
        <div className={css.FirstScreen__Word}>
          Middle
          <div className={css.FirstScreen__Word__Comment}>
            <Fade delay={1000}>
              <div>
                <span>{'//'}</span>React
              </div>
            </Fade>
            <Fade delay={850}>
              <div>
                <span>{'//'}</span>React Native
              </div>
            </Fade>
            <Fade delay={700}>
              <div>
                <span>{'//'}</span>Typescript
              </div>
            </Fade>
          </div>
        </div>
      </Slide>
      <Slide direction='right'>
        <div className={css.FirstScreen__Word}>Frontend</div>
      </Slide>
      <Slide direction='left'>
        <div className={css.FirstScreen__Word}>Developer</div>
      </Slide>
      <Fade duration={2000}>
        <div className={css.FirstScreen__Asterisk}>
          <SVGIcon name={'asterisk'} width={200} height={200} />
        </div>
      </Fade>
    </section>
  )
}

export default FirstScreen
