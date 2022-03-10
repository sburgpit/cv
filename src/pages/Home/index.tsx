import { FC } from 'react'
import Header from '../../components/Header'
import FirstScreen from '../../components/FirstScreen'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Skills from '../../components/Skills'
import More from '../../components/More/More'
import GetMe from '../../components/GetMe'
import Footer from '../../components/Footer'

import css from './Home.module.scss'


const Home: FC = () => {
  return (
    <>
      <Header />
      <div className={css.Home}>
        <FirstScreen />
        <About />
        <Experience />
        <Skills />
        <More />
        <GetMe />
      </div>
      <Footer />
    </>
  )
}

export default Home
