import { useContext } from 'react'
import { LangContext } from '../App'

const I18n = (str: string): string => {
  const lang = useContext(LangContext)
  if (lang === 'ru')
    if (localization[str]) return localization[str]
    else return str
  else return str
}

const localization: { [key: string]: string } = {
  'Peter Konokhov': 'Петр Конохов',
  'Get in touch': 'Связаться',
  'Go home': 'Домой',
  'Page not found': 'Страница не найдена',
  'About me': 'Обо мне',
  Experience: 'Опыт',
  'Created fullstack websites for small businesses and individual entrepreneurs. In development, I used the HTML5, CSS3, JS (jQuery and other libraries), PHP stack. I also developed using Wordpress (Including woocomerce) and no-code Tilda.Developed online stores with opencart.':
    'Создавал веб-сайты под ключ для малого бизнеса и индивидуальных предпринимателей. В разработке использовал HTML5, CSS3, JS (jQuery и другие библиотеки), PHP. Также разрабатывал на Wordpress (включая woocommerce) и nocode Tilda. Создал несколько интернет-магазинов с использованием opencart.',
  'I created an adaptive and responsive layout, co-developed the frontend app architecture to transfer the functionality of the site to the mobile app on React Native, and made complex and multifunctional abstractable components on React.js.':
    'Верстаю адаптивные и отзывчивые компоненты. Учавствую в разработке архитектуры приложения. Переношу функциональность сайта в мобильное приложение на React Native. Создаю сложные и многофункциональные абстрактные компоненты на React.',
  'Jan. 2019 - Mar. 2021': 'Янв. 2019 - Мар. 2021',
  'Mar. 2021 - Present': 'Мар. 2021 - Настоящее время',
  'Advertising platform': 'Рекламная платформа',
  Skills: 'Навыки',
  'Programming is my passion, not just a job. I open up new horizons every day and I believe that there are no impossible tasks. I am a fast learner and understand new technologies. Learning is my state of mind.':
    'Программирование - это моя страсть, а не просто работа. Я каждый день открываю новые горизонты и верю, что невыполнимых задач не бывает. Я быстро учусь и разбираюсь в новых технологиях. Учеба - состояние моей души.',
}

export default I18n
