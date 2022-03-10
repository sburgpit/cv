import { FC } from 'react'

import cn from 'classnames'
import css from './Lang.module.scss'

const Lang: FC<{ lang: string; setLang: (lang: string) => any }> = ({ lang, setLang }) => {
  const clickHandler = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru'
    localStorage.setItem('lang', newLang)
    setLang(newLang)
  }

  return (
    <div className={cn(css.Lang, 'hover')} onClick={clickHandler}>
      <p>{lang === 'ru' ? 'en' : 'ru'}</p>
    </div>
  )
}

export default Lang
