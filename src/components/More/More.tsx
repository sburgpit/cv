import { FC } from 'react'
import Title from '../elements/Title'
import { Fade, Slide } from 'react-awesome-reveal'
import I18n from '../../utils/I18n'
import cn from 'classnames'
import css from './More.module.scss'

const More: FC = () => {
  const more = {
    [I18n('Age')]: I18n('20 y.o.'),
    [I18n('Nationality')]: I18n('Ukrainian'),
    [I18n('Location')]: I18n("I'm a nomad"),
    [I18n('Languages')]: I18n('Ukrainian&nbsp;(native), Russian&nbsp;(native), English&nbsp;(B1&nbsp;-&nbsp;in&nbsp;studying)'),
  }

  return (
    <section className={css.More}>
      <Title text={I18n('More me')} />

      <div className={css.More__Main}>
        {Object.keys(more).map((question, i) => (
          <div className={css.More__Main__Wrapper}>
            <Slide direction='left'>
              <div className={css.More__Main__Question}>{question}</div>
            </Slide>
            <Slide direction='right'>
              <div className={css.More__Main__Answer} dangerouslySetInnerHTML={{ __html: more[question] }} />
            </Slide>
          </div>
        ))}
        <div className={css.More__Main__Wrapper}>
          <Slide direction='left'>
            <div className={css.More__Main__Question}>{I18n('Contacts')}</div>
          </Slide>
          <Slide direction='right'>
            <div className={css.More__Main__Answer}>
              <a
                href={'mailto:sburgpit@gmail.com'}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(css.More__Link, 'hover')}
              >
                sburgpit@gmail.com
              </a>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  )
}

export default More
