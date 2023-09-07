import React from 'react'

function Index() {
  return (
    <div>
       {/* <meta charSet="utf-8" />
        <meta name="viewport" content="widNameth=device-width, initial-scale=1" />
        <title>best online food dlivery in pakistan| MyonlineMeal.com</title>
        <link rel="stylesheet" type="text/css" href="project harry2.css" />
        <link rel="stylesheet" href="mobile.css" />
        <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Bree+Serif&display=swap" rel="stylesheet" /> */}
        <marquee className="marquee"><h1>50% discount for first coustmer</h1></marquee>
        <nav id="navbar">
          <div id="logo">
            <img src="img/my logo.png" alt="MyonlineMeal.com" />
          </div>
          <ul>
            <li className="item"><a href="#">Home</a></li>
            <li className="item"><a href="#">Services</a></li>
            <li className="item"><a href="#">About us</a></li>
            <li className="item"><a href="#">Contect us</a></li>
          </ul>
        </nav>
        <section id="home">
          <h1 className="h-primary">welcome in Myonline meal</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt</p> 
          <p>magna aliqua. Ut enim ad minim veniam,
            quis nostrud.</p>
          <button className="btn">Order Now</button>
        </section>
        <section className="Services-contanir">
          <h1 className="h-primary center">Our Services</h1>
          <div id="services">
            <div className="box">
              <img src="img/pizza.jpg" alt="pizza pic" />
              <h2 className="h-secondary center">Food Catering</h2>
              <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="box"><img src="img/food catring.jpg" alt="pizza pic" />
              <h2 className="h-secondary center">Bulk ordering</h2>
              <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="box"><img src="img/food ordring.jpg" alt="pizza pic" />
              <h2 className="h-secondary center">Food Ordering</h2>
              <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </section>
        <section id="client-section">
          <h1 className="h-primary center">Our clients</h1>
          <div id="client">
            <div className="client-item">
              <img src="img/apple.png" alt="apple" />
            </div>
            <div className="client-item">
              <img src="img/skype2.png" alt="apple" />
            </div>
            <div className="client-item">
              <img src="img/microsoft.png" alt="apple" />
            </div>
            <div className="client-item">
              <img src="img/fire.png" alt="apple" />
            </div>
          </div>
        </section>
        <section id="Contact">
          <h1 className="h-primary center">Contect Us</h1>
          <div id="Contect-box">
            <form action>
              <div className="form-group">
                <label>Name: </label>
                <input type="text" name="name" id="name" placeholder="Enter Your Name" />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <input type="email" name="name" id="email" placeholder="Enter Your Email" />
              </div>
              <div className="form-group">
                <label>Pnone Number: </label>
                <input type="Number" name="name" id="phone" placeholder="Enter Your Number" />
              </div>
              <div className="form-group">
                <label>Message: </label>
                <textarea name="message" id="message" cols={30} rows={10} defaultValue={""} />
              </div>
            </form>
          </div>
        </section>
        <footer>
          <div className="center">
            copyright ©www.myOlineMeal.com All right reserved!
          </div>
        </footer>
    </div>
  )
}

export default Index
