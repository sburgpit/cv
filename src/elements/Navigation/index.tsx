import { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { selectCurrentHash } from '../../redux/slices/app.slice'
import css from './Navigation.module.scss'
import cn from 'classnames'

const Navigation: FC = () => {
  const [dark, setDark] = useState<boolean>(false)
  const hash = useAppSelector((state) => state.app.currentHash)

  useEffect(() => {
    if (hash === '#get-me-here') {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [hash])

  return (
    <div className={cn(css.Navigation, { [css.Navigation_dark]: dark })}>
      <div className={css.Navigation__Item}>
        <a href={'#home'}>Peter Konokhov</a>
      </div>
      <div className={css.Navigation__Item}>
        <a href={'mailto:sburgpit@gmail.com'}>Get in touch</a>
      </div>
    </div>
  )
}

export default Navigation
