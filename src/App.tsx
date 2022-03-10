import { useState, FC, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Lang from './components/Lang'
import Home from './pages/Home'
import Error from './pages/Error'

export const LangContext = createContext('en')

const App: FC = () => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')

  return (
    <LangContext.Provider value={lang}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
      <Lang lang={lang} setLang={setLang} />
    </LangContext.Provider>
  )
}

export default App
