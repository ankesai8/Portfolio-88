import React from 'react'
import classes from './Home.module.css'
import code from './../../img/coder.svg'


const Home = () => {
  return (
    <div className={classes.home} id='home'>
      <div className={classes.containerLeft}>

        <h1 className={classes.Hello}><span>Anke SaiPrasad</span></h1>
        <h2>Full Stack Web Developer</h2>
        <h4>I love all aspects of web development especially UI/UX design</h4>
        <a href='https://drive.google.com/file/d/1gF_oBIZjDfPl1lFaymNDn6jnZkqd1-Zg/view'target="_blank" rel="noopener noreferrer"><button className={classes.cvBtn}>Resume</button></a>

      </div>
      <div className={classes.containerRight}>
        <img className={classes.Code} src={code} alt='coder'></img>
      </div>

    </div>
  )
}

export default Home
