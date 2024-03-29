import { SplideSlide } from '@splidejs/react-splide'
import { FC } from 'react'
import css from './FirstSlide.module.scss'
import { Fade, AttentionSeeker, Slide } from 'react-awesome-reveal'
import { Rotate } from '../../../elements/Animation'
import { useAppSelector } from '../../../redux/hooks'

const FirstSlide: FC = () => {
  const isMobile = useAppSelector((state) => state.app.isMobile)
  return (
    <SplideSlide className={css.FirstSlide} data-splide-hash='home'>
      <div className={css.FirstSlide__Wrapper}>
        <div className={css.FirstSlide__Asterisk}>
          <Rotate duration={1800} deg={180} triggerOnce={true}>
            <svg viewBox='0 0 168 193'>
              <path d='M158.634 123.324C145.127 115.606 120.688 114.32 90.4593 96.3117C120.688 78.9466 145.127 77.0171 158.634 69.2993C165.708 65.4403 170.21 58.3656 165.065 49.3615C159.92 40.3573 150.916 41.0005 143.841 45.5026C130.978 52.5772 117.472 73.1582 87.2435 91.1665C87.2435 55.1499 98.1772 32.6395 98.1772 17.2038C98.1772 8.19963 94.3182 0.481812 84.0278 0.481812C73.7373 0.481812 69.8784 8.19963 69.8784 17.2038C69.8784 32.6395 80.812 55.1499 80.812 91.1665C50.5838 73.1582 37.0775 52.5772 24.2145 45.5026C17.1398 41.0005 8.77878 40.3573 2.99039 49.3615C-2.15484 58.3656 2.34724 65.4403 9.42193 69.2993C22.9282 77.0171 47.368 78.9466 77.5962 96.3117C47.368 114.32 22.9282 115.606 9.42193 123.324C2.34724 127.826 -2.15484 134.901 2.99039 143.905C8.77878 152.909 17.1398 152.266 24.2145 147.764C37.0775 140.046 50.5838 119.465 80.812 101.457C80.812 137.474 69.8784 160.627 69.8784 176.063C69.8784 184.424 73.7373 192.142 84.0278 192.142C94.3182 192.142 98.1772 184.424 98.1772 176.063C98.1772 160.627 87.2435 137.474 87.2435 101.457C117.472 119.465 130.978 140.046 143.841 147.764C150.916 152.266 159.92 152.909 165.065 143.905C170.21 134.901 165.708 127.826 158.634 123.324Z' />
            </svg>
          </Rotate>
        </div>
        <div className={css.FirstSlide__Text}>
          <Slide direction='down' triggerOnce={true}>
            <Fade triggerOnce={true}>
              <h1 className={css.FirstSlide__Text__Title}>
                <span>Hey!</span>
                {isMobile && <br />} I am Peter.
              </h1>
            </Fade>
          </Slide>
          <Slide direction='up' triggerOnce={true}>
            <Fade triggerOnce={true}>
              <p className={css.FirstSlide__Text__Subtitle}>I am a professional web developer.</p>
            </Fade>
          </Slide>
        </div>
        <AttentionSeeker
          effect='shakeY'
          delay={600}
          duration={3000}
          className={css.FirstSlide__Swipe}
          triggerOnce={true}
        >
          <a href='/#about'>Swipe up</a>
        </AttentionSeeker>
      </div>
    </SplideSlide>
  )
}

export default FirstSlide
