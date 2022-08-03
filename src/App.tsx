import { FC, useEffect } from 'react'
import Navigation from './elements/Navigation'
import HomePage from './pages/HomePage'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { setCurrentHash, setIsMobile } from './redux/slices/app.slice'

const App: FC = () => {
  const hash = useAppSelector((state) => state.app.currentHash)
  const disptach = useAppDispatch()

  const setHash = () => disptach(setCurrentHash(window.location.hash))
  const setMobile = () => disptach(setIsMobile(window.innerWidth < 1024))

  useEffect(() => {
    const body = document.querySelector('body')
    if (hash === '#get-me-here') {
      body?.classList.add('dark')
    } else {
      body?.classList.remove('dark')
    }
  }, [hash])

  useEffect(() => {
    setHash()
    setMobile()
    window.addEventListener('resize', setMobile)
    window.addEventListener('popstate', setHash)
    return () => {
      window.addEventListener('resize', setMobile)
      window.removeEventListener('popstate', setHash)
    }
  }, [])

  return (
    <>
      <Navigation />
      <HomePage />
    </>
  )
}

export default App
