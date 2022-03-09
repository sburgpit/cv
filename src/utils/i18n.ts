const i18n = (str: string): string => {
  if (localStorage.getItem('lang') === 'ru')
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
  'Programming is not just a job for me, it is my passion. While programming, I am also constantly re/writing my own code. Learning is my state of mind.':
    'Программирование для меня - это не просто работа, это моя страсть. Я постоянно переписываю и улучшаю свой собственный код и свои навыки. Учеба - это мое душевное состояние.',
  Experience: 'Опыт',
  'Created fullstack websites for small businesses and individual entrepreneurs. In development, I used the HTML5, CSS3, JS (jQuery and other libraries), PHP stack. I also developed using Wordpress (Including woocomerce) and no-code Tilda.Developed online stores with opencart.':
    'Создавал веб-сайты под ключ для малого бизнеса и индивидуальных предпринимателей. В разработке использовал HTML5, CSS3, JS (jQuery и другие библиотеки), PHP. Также разрабатывал на Wordpress (включая woocommerce) и nocode Tilda. Создал несколько интернет-магазинов с использованием opencart.',
  'I created an adaptive and responsive layout, co-developed the frontend app architecture to transfer the functionality of the site to the mobile app on React Native, and made complex and multifunctional abstractable components on React.js.':
    'Верстаю адаптивные и отзывчивые компоненты. Учавствую в разработке архитектуры приложения. Переношу функциональность сайта в мобильное приложение на React Native. Создаю сложные и многофункциональные абстрактные компоненты на React.',
  'Jan. 2019 - Mar. 2021': 'Янв. 2019 - Мар. 2021',
  'Mar. 2021 - Present': 'Мар. 2021 - Настоящее время',
  'Advertising platform': 'Рекламная платформа',
  Skills: 'Навыки',
}

export default i18n
