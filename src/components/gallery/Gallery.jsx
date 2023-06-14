import React from 'react'
import styles from './gallery.module.css'
import person1 from '../../assets/Desktop View/Images/06b1d343-fa7c-4dd1-b8a9-1f04437b6ac5 1.png'
import person2 from '../../assets/Desktop View/Images/wepik-export-20230509102752Rzxg 1.png'
import pattern from '../../assets/Desktop View/Images/Group 427318875.png'
import person3 from '../../assets/Desktop View/Images/wepik-export-20230509105334DQz8 1.png'
import person4 from '../../assets/Desktop View/Images/wepik-export-20230509105834XND0 1.png'
import person5 from '../../assets/Desktop View/Images/wepik-export-20230509113806sxOa 1.png'
import { useSelector } from 'react-redux'

const Gallery = () => {
  const { count } = useSelector(state => state.counter)

  const getNextImage = count => {
    switch (count) {
      case 1:
        return <img src={person1} className={styles.person} />
      case 2:
        return <img src={person2} className={styles.person} />
      case 3:
        return <img src={person3} className={styles.person} />
      case 4:
        return <img src={person4} className={styles.person} />
      case 5:
        return <img src={person5} className={styles.person} />
      default:
        return
    }
  }
  return (
    <div className={styles.gallery}>
      <img src={pattern} className={styles.pattern} />

      <div className={styles.personImg}>{getNextImage(count)}</div>
    </div>
  )
}

export default Gallery
