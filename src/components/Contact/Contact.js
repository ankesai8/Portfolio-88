import React from 'react'
import classes from './Contact.module.css'
import contact from './../../img/contact.svg'
import PageHeader from './../PageHeader/PageHeader'
import CallIcon from '@material-ui/icons/Call';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';

import Footer from './../footer/Footer'

const Contact = () => {
  return (
    <div>
      <PageHeader title={'Contact Me'} />
      <div className={classes.contactContainer} id='contact'>
        <div className={classes.containerLeft}>
          <img src={contact} alt="contact" className={classes.img} />
        </div>
        <div className={classes.containerRight}>
          <ul>
            <li><CallIcon /><p>+91 7013133159</p></li>
            <li><AlternateEmailIcon /><a href="mailto:ankesai8@gmail.com">ankesai8@gmail.com</a></li>
            <li><GitHubIcon /> <a href="https://github.com/ankesai8" target="_blank" rel="noopener noreferrer">https://github.com/ankesai8</a></li> 
          </ul>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Contact
