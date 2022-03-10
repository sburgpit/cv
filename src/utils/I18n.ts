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
  'Peter Konokhov': 'Пётр Конохов',
  'Get in touch': 'Связаться',
  'Go home': 'Домой',
  'Page not found': 'Страница не найдена',
  'About me': 'Обо мне',
  Experience: 'Опыт',
  'Created fullstack websites for small businesses and individual entrepreneurs. In development, I used the HTML5, CSS3, JS (jQuery and other libraries), PHP stack. I also developed using Wordpress (Including woocomerce) and no-code Tilda.Developed online stores with opencart.':
    'Создавал веб-сайты под ключ для малого бизнеса и индивидуальных предпринимателей. В разработке использовал HTML5, CSS3, JS (jQuery и другие библиотеки), PHP. Также разрабатывал на Wordpress (включая woocommerce) и nocode Tilda. Создал несколько интернет-магазинов с использованием opencart.',
  'I created an adaptive and responsive layout, co-developed the frontend app architecture to transfer the functionality of the site to the mobile app on React Native, and made complex and multifunctional abstractable components on React.js.':
    'Верстаю адаптивные и отзывчивые компоненты. Участвую в разработке архитектуры приложения. Переношу функциональность сайта в мобильное приложение на React Native. Создаю сложные и многофункциональные абстрактные компоненты на React.',
  'Jan. 2019 - Mar. 2021': 'Янв. 2019 - Мар. 2021',
  'Mar. 2021 - Present': 'Мар. 2021 - Настоящее время',
  'Advertising platform': 'Рекламная платформа',
  Skills: 'Навыки',
  'Programming is not just a job for me, it is my passion. I open up new horizons every day and I believe that there are no impossible tasks. I’m fast to learn and understand new technologies. Learning is my state of mind.':
    'Программирование - это моя жизнь, а не просто работа. Каждый день я открываю новые горизонты и верю, что невыполнимых задач не бывает. Быстро учусь и разбираюсь в новых технологиях. Развитие - состояние моего сознания.',
  'More me': 'Еще обо мне',
  Age: 'Возраст',
  '20 y.o.': '20 лет',
  Languages: 'Языки',
  'Ukrainian&nbsp;(native), Russian&nbsp;(native), English&nbsp;(B1&nbsp;-&nbsp;in&nbsp;studying)':
    'Український&nbsp;(рідний), Русский&nbsp;(родной), English(B1&nbsp;-&nbsp;в&nbsp;процессе изучения)',
  Location: 'Местоположение',
  "I'm a nomad": 'Путешествую',
  Contacts: 'Контакты',
  Nationality: 'Национальность',
  Ukrainian: 'Украинец',
}

export default I18n
