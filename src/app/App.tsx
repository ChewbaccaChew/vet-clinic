import { FC } from 'react'
import { Outlet } from "react-router-dom"
import styles from './App.module.scss';
import Header from '../widgets/Header/Header';
import Footer from '../shared/ui/Footer/Footer';

const App: FC = () => {

  return (
    <>
      <div className={styles.container}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
