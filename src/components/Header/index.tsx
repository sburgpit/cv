import { FC } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Fade } from 'react-awesome-reveal'
import cn from 'classnames'
import css from './Header.module.scss'
import I18n from '../../utils/I18n'

const Header: FC = () => {
  const clickHandler = () => scroll.scrollToTop()

  return (
    <div className={css.Header}>
      <Fade delay={600} duration={2000}>
        <div className={cn(css.Header__Name, 'hover')} onClick={clickHandler}>
          {I18n('Peter Konokhov')}
        </div>
        <a
          href={'mailto:sburgpit@gmail.com'}
          target='_blank'
          rel='noopener noreferrer'
          className={cn(css.Header__Action, 'hover')}
        >
          {I18n('Get in touch')}
        </a>
      </Fade>
    </div>
  )
}

export default Header
