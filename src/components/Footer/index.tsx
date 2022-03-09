import { FC } from 'react'
import css from './Footer.module.scss'
import { Fade } from 'react-awesome-reveal'

const Footer: FC = () => (
  <Fade duration={2000}>
    <div className={css.Footer}>Ⓒ {new Date().getFullYear()}</div>
  </Fade>
)

export default Footer
