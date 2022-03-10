import { FC } from 'react'
import { Slide } from 'react-awesome-reveal'

import cn from 'classnames'
import css from './Lang.module.scss'

const Lang: FC<{ lang: string; setLang: (lang: string) => any }> = ({ lang, setLang }) => {
  const clickHandler = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru'
    localStorage.setItem('lang', newLang)
    setLang(newLang)
  }

  return (
    <Slide direction={'right'} className={cn(css.Lang, 'hover')}>
      <p onClick={clickHandler}>{lang === 'ru' ? 'en' : 'ru'}</p>
    </Slide>
  )
}

export default Lang
