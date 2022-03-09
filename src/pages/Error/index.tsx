import React from 'react'
import i18n from '../../utils/i18n'
import cn from 'classnames'
import css from './Error.module.scss'
import SVGIcon from '../../components/elements/SVGIcon'
import { Link } from 'react-router-dom'

const Error = () => {

  return (
    <div className={css.Error}>
      <Link className={cn(css.Error__Back, 'hover')} to={'/'}>
        <SVGIcon name={'arrowBack'} width={30} height={30}/>
        <div className={css.Error__Back__Text}>{i18n('Go home')}</div>
      </Link>
      <div className={css.Error__Title}>404</div>
      <div className={css.Error__Subtitle}>{i18n('Page not found')} :(</div>
    </div>
  )
}

export default Error
