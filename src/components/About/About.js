import React from 'react'
import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/source.svg'

const About = () => {
  return (
    <br>
    <div id='about'>
      <div className={classes.aboutMe} >

        <PageHeader title={'About Me'} />
      </div>
      <div className={classes.container}>
        <div className={classes.photo}>
          <img src={me} alt="me" className={classes.source} />

        </div>
        <div className={classes.text}>
          <h2>Hey I am Sai</h2>
          <p>A full stack web developer from Anantapur, Andhrapradesh.
            I have a huge passion for tech and love to learn new things all the time. I love creating websites and new software that can improve peoples lives and businesses
          </p>
          <br></br>
          <p>I have strong front end skills and a keen eye for good design and user experience. I really enjoy front end development and have experience with both react.js and node.js. I have created a few full stack apps, using node express and both mongoDB and nodeSQL as the databases</p>
            <br></br>
         
</div>
      </div>
    </div>

  )
}

export default About
