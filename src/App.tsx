import { Route, Routes } from 'react-router-dom'
import { BlogPage, ArticlePage } from './pages'
import { Header } from './widgets/header'
import { Footer } from './widgets/footer'
import styles from './App.module.scss'

function App() {

  return (
    <div className={styles.root}>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<BlogPage/>}/>
          <Route path='/article' element={<ArticlePage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
