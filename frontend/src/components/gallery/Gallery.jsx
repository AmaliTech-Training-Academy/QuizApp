import React from 'react'
import styles from './gallery.module.css'
import person1 from '../../assets/DesktopView/Images/06b1d343-fa7c-4dd1-b8a9-1f04437b6ac51.png'
import person2 from '../../assets/DesktopView/Images/wepik-export-20230509102752Rzxg1.png'
import pattern from '../../assets/DesktopView/Images/Group427318875.png'
import person3 from '../../assets/DesktopView/Images/wepik-export-20230509105334DQz81.png'
import person4 from '../../assets/DesktopView/Images/wepik-export-20230509105834XND011.png'
import person5 from '../../assets/DesktopView/Images/wepik-export-20230509113806sxOa1.png'
import loginImage from '../../assets/DesktopView/Images/db06bc17-8e85-49af-b936-b6aeaefbb8b91.png'
import forgetHero from '../../assets/DesktopView/Images/f3bc8635-2f3d-48e0-a3f7-bf5bff42b7661.png'
import { useSelector } from 'react-redux'

const Gallery = ({page}) => {
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

      <div className={styles.personImg}>
      {page === 'login' ? (
        <img src={loginImage} className={styles.person}/> 
        ):
          page === 'forgetpassword' ? (
            <img src={forgetHero} className={styles.person}/>
          ):
       
        (
          getNextImage(count)
        )}
      </div>
    </div>
  )
}

export default Gallery
