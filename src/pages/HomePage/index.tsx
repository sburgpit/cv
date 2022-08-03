import { FC } from 'react'
import css from './HomePage.module.scss'
import Slider from '../../elements/Slider'
import FirstSlide from '../../components/home/FirstSlide'
import AboutSlide from '../../components/home/AboutSlide'
import ExpSlide from '../../components/home/ExpSlide'
import SkillsSlide from '../../components/home/SkillsSlide'
import MoreMeSlide from '../../components/home/MoreMeSlide'
import GetMeSlide from '../../components/home/GetMeSlide'

const HomePage: FC = () => {
  return (
    <div className={css.HomePage}>
      <Slider>
        <FirstSlide />
        <AboutSlide />
        <ExpSlide />
        <SkillsSlide />
        <MoreMeSlide />
        <GetMeSlide />
      </Slider>
    </div>
  )
}

export default HomePage
