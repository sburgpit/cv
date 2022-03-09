import React, { FC } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Slide, Fade } from 'react-awesome-reveal'
import cn from 'classnames'
import css from './Header.module.scss'
import i18n from '../../utils/i18n'

const Header: FC = () => {
  const clickHandler = () => scroll.scrollToTop()

  return (
    <div className={css.Header}>
      <Fade delay={600} duration={2000}>
        <div className={cn(css.Header__Name, 'hover')} onClick={clickHandler}>
          {i18n('Peter Konokhov')}
        </div>
        <a
          href={'mailto:sburgpit@gmail.com'}
          target='_blank'
          rel='noopener noreferrer'
          className={cn(css.Header__Action, 'hover')}
        >
          {i18n('Get in touch')}
        </a>
      </Fade>
    </div>
  )
}

export default Header
