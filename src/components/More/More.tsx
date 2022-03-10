import { FC } from 'react'
import Title from '../elements/Title'
import { Fade, Slide } from 'react-awesome-reveal'
import I18n from '../../utils/I18n'
import cn from 'classnames'
import css from './More.module.scss'

const More: FC = () => {
  const more = {
    [I18n('How old are you?')]: I18n('20 y.o.'),
    [I18n('What languages do you know?')]: I18n('Ukrainian (native), Russian (native), English (B1 - in studying).'),
    [I18n('Where is your location?')]: I18n("I'm a nomad."),
    [I18n('How can I get you?')]: (
      <>
        {I18n('Write to my email') + ' '}
        <a
          href={'mailto:sburgpit@gmail.com'}
          target='_blank'
          rel='noopener noreferrer'
          className={cn(css.More__Link, 'hover')}
        >
          sburgpit@gmail.com
        </a>
      </>
    ),
  }

  return (
    <section className={css.More}>
      <Title text={I18n('More me')} />

      <div className={css.More__Main}>
        {Object.keys(more).map((question, i) => (
          <>
            <Slide direction='left'>
              <div className={css.More__Main__Question}>{question}</div>
            </Slide>
            <Slide direction='right'>
              <div className={css.More__Main__Answer}>{more[question]}</div>
            </Slide>
          </>
        ))}
      </div>
    </section>
  )
}

export default More
