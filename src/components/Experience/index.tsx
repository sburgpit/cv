import { FC } from 'react'
import Title from '../elements/Title'
import { Fade } from 'react-awesome-reveal'
import I18n from '../../utils/I18n'
import css from './Experience.module.scss'

const Experience: FC = () => {
  return (
    <section className={css.Experience}>
      <Title text={I18n('Experience')} />
      <div className={css.Experience__Main}>
        <Fade duration={2000}>
          <div className={css.Experience__Main__Article}>
            <div className={css.Experience__Main__Article__Company}>Freelance</div>
            <div className={css.Experience__Main__Article__Date}>{I18n('Jan. 2019 - Mar. 2021')}</div>
            <div className={css.Experience__Main__Article__Details}>
              {I18n(
                'Created fullstack websites for small businesses and individual entrepreneurs. In development, I used the HTML5, CSS3, JS (jQuery and other libraries), PHP stack. I also developed using Wordpress (Including woocomerce) and no-code Tilda.Developed online stores with opencart.'
              )}
            </div>
          </div>
        </Fade>
        <Fade duration={2000}>
          <div className={css.Experience__Main__Article}>
            <div className={css.Experience__Main__Article__Company}>Surfe.be</div>
            <div className={css.Experience__Main__Article__Company__Details}>{I18n('Advertising platform')}</div>
            <div className={css.Experience__Main__Article__Date}>{I18n('Mar. 2021 - Present')}</div>
            <div className={css.Experience__Main__Article__Details}>
              {I18n(
                'I created an adaptive and responsive layout, co-developed the frontend app architecture to transfer the functionality of the site to the mobile app on React Native, and made complex and multifunctional abstractable components on React.js.'
              )}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Experience
