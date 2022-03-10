import { FC } from 'react'
import I18n from '../../utils/I18n'
import { Fade } from 'react-awesome-reveal'
import Title from '../elements/Title'
import css from './Skills.module.scss'

const Skills: FC = () => {
  const skills = [
    'HTML5',
    'CSS3',
    'LESS',
    'Sass',
    'BEM',
    'JS (ES6 - ES2022)',
    'Typescript',
    'React',
    'React Native',
    'Redux',
    'Git',
    'Webpack',
  ]

  return (
    <section className={css.Skills}>
      <Title text={I18n('Skills')} />
      <div className={css.Skills__Main}>
        {skills.map((i, index) => (
          <Fade delay={(index + 1) * 30}>
          <div className={css.Skills__Main__Item} key={index}>
            {i}
          </div>
          </Fade>
        ))}
      </div>
    </section>
  )
}

export default Skills
