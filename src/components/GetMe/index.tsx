import { FC } from 'react'
import SVGIcon from '../elements/SVGIcon'
import { ArcText } from '@arctext/react'
import { Zoom } from 'react-awesome-reveal'
import I18n from '../../utils/I18n'
import cn from 'classnames'
import css from './GetMe.module.scss'

const GetMe: FC = () => {
  return (
    <section className={css.GetMe}>
      <Zoom>
        <a
          href={'mailto:sburgpit@gmail.com'}
          className={cn(css.GetMe__Button, 'hover')}
          target='_blank'
          rel='noopener noreferrer'
        >
          <SVGIcon name={'arrow'} width={300} height={300} fill={'#d6d1ce'} />
          <ArcText
            text={'Get me here ✽ Get me here ✽ '}
            radius={150}
            characterWidth={12.7}
            className={css.GetMe__Button__ArcText}
          />
        </a>
      </Zoom>
    </section>
  )
}

export default GetMe
