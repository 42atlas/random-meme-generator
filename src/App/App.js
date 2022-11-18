import React from 'react'
import { Meme } from '../Meme/Meme'
import { Routes, Route } from 'react-router-dom'
import { MemeGenerated } from '../MemeGenerated/MemeGenerated'
import styles from './styles.module.css'

export const App = () => {
  return (
    <div className={styles.maincontainer}>
      <h1 className=''>Random Meme Generator</h1>
      <Routes>
        <Route exact path='/' element={<Meme />} />
        <Route path='/generated' element={<MemeGenerated />} />
      </Routes>

      <a
        className={styles.link}
        href='https://raffaelli.studio'
        target='_blank'
        rel='noreferrer'
      >
        raffaelli.studio
      </a>
    </div>
  )
}
