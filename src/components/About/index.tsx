import { FC } from 'react'
import Title from '../elements/Title'
import { Fade } from 'react-awesome-reveal'
import I18n from '../../utils/I18n'
import css from './About.module.scss'

const About: FC = () => {
  return (
    <section className={css.About}>
      <Title text={I18n('About me')} />
      <Fade duration={2000}>
        <div className={css.About__Main}>
          {I18n(
            'Programming is my passion, not just a job. I open up new horizons every day and I believe that there are no impossible tasks. I am a fast learner and understand new technologies. Learning is my state of mind.'
          )}
        </div>
      </Fade>
    </section>
  )
}

export default About
