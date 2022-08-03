import { FC } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Fade } from 'react-awesome-reveal'
import cn from 'classnames'
import css from './ExpSlide.module.scss'
import ExpSliderSlide from '../../../elements/ExpSliderSlide'

const ExpSlide: FC = () => {
  return (
    <SplideSlide className={css.Exp} data-splide-hash={'experience'}>
      <div className={css.Exp__Wrapper}>
        <h2 className={css.Exp__Title}>
          <Fade triggerOnce={true} duration={1500}>
            <span>Work Experience</span>
          </Fade>
        </h2>
        <Fade triggerOnce={true} duration={1500}>
          <Splide
            options={{
              type: 'loop',
              speed: 800,
              easing: 'ease-in-out',
              pagination: false,
              mediaQuery: 'max',
              updateOnMove: true,
              breakpoints: {
                1024: {
                  speed: 300,
                },
              },
            }}
            className={cn(css.Slider, 'exp-slider')}
            hasTrack={false}
          >
            <div className={cn('splide__arrows', css.Slider__Arrows)}>
              <button className={cn('splide__arrow', css.Slider__Arrow, 'splide__arrow--prev', css.Slider__Arrow_prev)}>
                <svg viewBox='0 0 419 737'>
                  <path
                    fillRule='evenodd'
                    d='M14.645 14.645c-19.527 19.526-19.527 51.184 0 70.71l240.317 240.318c23.431 23.431 23.431 61.421 0 84.852L14.645 650.843c-19.527 19.526-19.527 51.184 0 70.71 19.526 19.527 51.184 19.527 70.71 0l315.433-315.432a50.821 50.821 0 0 0 2.765-2.568c9.791-9.79 14.672-22.63 14.645-35.462.023-12.826-4.858-25.66-14.645-35.446a50.406 50.406 0 0 0-2.765-2.567L85.355 14.645c-19.526-19.527-51.184-19.527-70.71 0Z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <button className={cn('splide__arrow', css.Slider__Arrow, 'splide__arrow--next', css.Slider__Arrow_next)}>
                <svg viewBox='0 0 419 737'>
                  <path
                    fillRule='evenodd'
                    d='M14.645 14.645c-19.527 19.526-19.527 51.184 0 70.71l240.317 240.318c23.431 23.431 23.431 61.421 0 84.852L14.645 650.843c-19.527 19.526-19.527 51.184 0 70.71 19.526 19.527 51.184 19.527 70.71 0l315.433-315.432a50.821 50.821 0 0 0 2.765-2.568c9.791-9.79 14.672-22.63 14.645-35.462.023-12.826-4.858-25.66-14.645-35.446a50.406 50.406 0 0 0-2.765-2.567L85.355 14.645c-19.526-19.527-51.184-19.527-70.71 0Z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>

            <SplideTrack>
              <ExpSliderSlide
                title={'Tempo'}
                subtitle={'Esports & Game dev'}
                desc={
                  "I update, maintain and fix bugs on the site tempostorm.com written in AngularJS and Node.js is on the backend and I'm developing a corporate website on WordPress."
                }
                date={'2022 - now'}
              />
              <ExpSliderSlide
                title={'Surfe.be'}
                subtitle={'Advertising platform'}
                desc={
                  'I created an adaptive and responsive layout, co-developed the frontend app architecture to transfer the functionality of the site to the mobile app on React Native, and made complex and multifunctional abstractable components on React.js.'
                }
                date={'2021 - 2022'}
              />
              <ExpSliderSlide
                title={'Freelance'}
                subtitle={'Entrepreneurs'}
                desc={
                  'Created fullstack websites for small businesses and individual entrepreneurs. In development, I used the HTML5, CSS3, JS (jQuery and other libraries), PHP stack. I also developed using Wordpress (Including woocomerce) and no-code Tilda. Developed online stores with opencart.'
                }
                date={'2019 - 2021'}
              />
            </SplideTrack>
          </Splide>
        </Fade>
      </div>
    </SplideSlide>
  )
}

export default ExpSlide
