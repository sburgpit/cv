import { FC } from 'react'
import Title from '../elements/Title'
import { Fade } from 'react-awesome-reveal'
import i18n from '../../utils/i18n'
import css from './About.module.scss'

const About: FC = () => {
  return (
    <section className={css.About}>
      <Title text={i18n('About me')} />
      <Fade duration={2000}>
        <div className={css.About__Main}>
          {i18n(
            'Programming is not just a job for me, it is my passion. While programming, I am also constantly re/writing my own code. Learning is my state of mind.'
          )}
        </div>
      </Fade>
    </section>
  )
}

export default About
