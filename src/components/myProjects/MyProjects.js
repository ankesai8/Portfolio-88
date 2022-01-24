import React from 'react'
import PageHeader from './../PageHeader/PageHeader'
import classes from './MyProjects.module.css'
import cyf from './../../img/videoEditor.png'
import color from './../../img/Book Store.png'
import menu from './../../img/shops.png'
import tv from './../../img/music.jpg'

const MyProjects = () => {
  return (
    <div id='projects'>
      <PageHeader title={'My Projects'} />
      <div className={classes.parent} >
        <div className={classes.div1}>
          <img src={color} alt="color-flipper app" className={classes.myProjects} />
          <div className={classes.textContainer}>
            <h3>Online BOOK Store</h3>
            <p>Online-Book-Store is place where you can buy your favorite books. It is built using MERN stack and Redux with payment gateway integrated. It has all the major features like Admin Dashboard, Shopping Cart, Order etc.</p>
          </div>
          <div className={classes.btnContainer}>
            <a href="https://book-store-9999.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className={classes.btnProj}>See Preview</button></a>
            <a href="https://github.com/ankesai8/Online-Book-Store/tree/main/frontend" target="_blank" rel="noopener noreferrer"><button className={classes.btnProj}>FrontEnd</button></a>
            <a href="https://github.com/ankesai8/Online-Book-Store/tree/main/frontend" target="_blank" rel="noopener noreferrer"><button className={classes.btnProj}>BackEnd</button></a>
             
          </div>

        </div>
        <div className={classes.div2}>
          <img src={tv} alt="tv-show" className={classes.myProjects} />
          <div className={classes.textContainer}>
            <h3>Online Music Player</h3>
            <p>This is a project built with javascript and dom manipulation to make a Online Music application. A website where you can listen and enjoy songs, go through lyrics and create your own playlists and add your songs.</p>
          </div>
          <div className={classes.btnContainer}>
            <a href="https://music-player-008.netlify.app/login" target="_blank" rel="noopener noreferrer"><button className={classes.btnProj}>See Preview</button></a>
            <a href="https://github.com/ankesai8/Music-Player-FrontEnd" target="_blank" rel="noopener noreferrer"><button className={classes.btnProj}>FrontEnd</button></a>
            <a href="https://github.com/ankesai8/Music-Player-BackEnd" target="_blank" rel="noopener noreferrer"><button className={classes.btnProj}>BackEnd</button></a>
          </div>
        </div>
        <div className={classes.div3}>
          <img src={menu} alt="menu app" className={classes.myProjects} />
          <div className={classes.textContainer}>
            <h3>Car Care</h3>
            <p>A Website help us to track the services provides to take care of your car at reasonable costs and afforabdable pricing for everyone .</p>
          </div>
          <div className={classes.btnContainer}>
            <a href="https://carcare-90.netlify.app/" target="_blank" rel="noopener noreferrer"><button>See Preview</button></a>
            <a href="https://github.com/ankesai8/Car-Care-FrontEnd" target="_blank" rel="noopener noreferrer"><button>FrontEnd</button></a>
            <a href="https://github.com/ankesai8/Car-Care-BackEnd" target="_blank" rel="noopener noreferrer"><button>BackEnd</button></a>
          </div>
        </div>
        <div className={classes.div4}>
          <img src={cyf} alt="cyf project" className={classes.myProjects} />
          <div className={classes.textContainer}>
            <h3>Recipe mealDb</h3>
            <p>A Web App which provide recipes to cook various dishes built using React, Node.js</p>
          </div>
          <div className={classes.btnContainer}>
            <a href="https://mealdb-9989.netlify.app/"  target="_blank" rel="noopener noreferrer"><button>See Preview</button></a>
            <a href="https://github.com/ankesai8/theMealDB-Recipe-Front-End"  target="_blank" rel="noopener noreferrer"><button>FrontEnd</button></a>
              <a href="https://github.com/ankesai8/theMealDB-Recipe-Back-End"  target="_blank" rel="noopener noreferrer"><button>BackEnd</button></a>  
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyProjects
