import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
   <div className= "justify-content-center ">
   <nav className="navbar">
        <div className="navbar-container">
            <div className="menu-left">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Rooms</a>
            </div>
            <div className="logo">
                <img src="./1.png" alt="Logo"/>
            </div>
            <div className="menu-right">
                <a href="/">Agents </a>
                <a href="/">Blog</a>
                <a href="/">Contact</a>
            </div>
            <div className="burger-menu" id="burger-menu">
                &#9776;
            </div>
        </div>
        <div className="dropdown-menu" id="dropdown-menu">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Portfolio</a>
            <a href="/">Blog</a>
            <a href="/">Contact</a>
        </div>
    </nav>
    </div>
    
    <section className="section-one">
        <img src="./lhaki-banner.jpg" alt=""/>
    </section>
    <section className="section-two">
       <div className="para-container">
       <div className="section-two-left">
            <h1>3 countries <br></br>12+ destinations</h1>
            <div className="border-line-one"></div>
            <p>Crimson Hotels Private Limited is a Hotel Management Company started by 
experienced hoteliers having significant experience in the finest hotel chains. We own  five Hotel Brands in Luxury, Upscale, Midscale, Lower Midscale and Budget Segments. These brands are available on Management Agreement and Franchise Model.
</p>
<p>As a Hotel Operator / Franchiser Crimson Hotels takes care of the interest of the 
ownership in mind while providing the top className hospitality to the guests with a 
commitment to pace setting innovation, modern design and memorable service 
experience. Combine these attributes with dedicated team support, and dynamic sales  and distribution systems we promise to bring unparalleled success for the hotel owners.
</p>
<div className="border-line-two"></div>
        </div>
        <div className="section-two-right">
        <div className="grid-container">
        <div className="grid-item item-1"></div>
        <div className="grid-item item-2"></div>
        <div className="grid-item item-3"></div>
        <div className="grid-item item-4 zimg"></div>
        <div className="grid-item item-5"></div>
        <div className="grid-item item-6"></div>
        <div className="grid-item item-7 zimg"></div>
        <div className="grid-item item-8"></div>
        <div className="grid-item item-9"></div>
        <div className="grid-item item-10"></div>
        <div className="grid-item item-11"></div>
        <div className="grid-item item-12"></div>
        <div className="grid-item item-13"></div>
        <div className="grid-item item-14"></div>
        <div className="grid-item item-15 zimg"></div>
        <div className="grid-item item-16"></div>
        <div className="grid-item item-17"></div>
        <div className="grid-item item-18 zimg"></div>
        <div className="grid-item item-19"></div>
        <div className="grid-item item-20"></div>
        <div className="grid-item item-21 zimg"></div>
        <div className="grid-item item-22"></div>
        <div className="grid-item item-23"></div>
        <div className="grid-item item-24"></div>
        <div className="grid-item item-25"></div>
    </div>
        </div>
        
       </div>

    </section>
   <div className="card-line">
   <div className="card1 card-box">
    <div className="left-content">
    <h4>Select Destinations</h4>
    <p>Thimpu , Bhutan </p>
    </div>
     <span className="material-symbols-outlined drop">
stat_minus_1
</span>
   </div>
   <div className="line-border1"></div>
   <div className="card2 card-box">
   <div className="left-content">
    <h4>Duration</h4>
    <input type="date" class="date-input" id="date-input"/>
    
    </div>
   
   </div>
   <div className="line-border2"></div>
   <div className="card3 card-box">
   <div className="left-content">
    <h4>Guests </h4>
    <div className="plus-minus">
        <p className='minus'>-</p><h5>2</h5><p className='plus'>+</p>
    </div>
    </div>
   <button className='btn1'>Check Availbility</button>
   </div>
    
   </div>
    
    <section className="section-three">
        <div className="heading-container">
            <h1>Our Network Hotels: Our Top Picks</h1>
            <p>These lifestyle luxury hotels will be located at gateway cities and tourist destinations. Each hotel will be a <br />destination in itself where Japanese finesse meets Indian hospitality creating a personal experience for our <br />guests.
            </p>
        </div>
       
       <div className="container">
      <div className="slider-wrapper">
       
        <ul className="image-list">
          <img className="image-item" src="./western-woman-having-teatime-cafe-udaipur.jpg" alt="img-1" />          
          <img className="image-item" src="./Apq9uk1669091740.jpeg" alt="img-2" />
          <img className="image-item" src="./220125115416-08-trans-bhutan-trail-reopens-intl-hnk.jpg" alt="img-3" />
          <img className="image-item" src="./pashupatinath-hero.jpg" alt="img-4" />
        </ul>
      
      </div>
     
    </div>
     
    </section>
    <section className="section-four">
            <div className="section-four-heading"><h1>Our Branded Hotels</h1></div>
            <div className="section-four-logos">
                <div className="logos-container">
                    
                       <div className="logo-box">
                        <h5>Luxury Lifestyle Hotels</h5>
                        <img src="./logo1.png" alt="" width="150px"/>
                        <div className="logo-box"> </div>
                       </div>
                       <div className="logo-box"> <h5>Upscale Full Service Hotels</h5>
                        <img src="./1.png" alt="" width="150px"/>
                        <div className="logo-box">  <img src="./logo3.png" alt="" width="150px"/></div>
                      </div>
                       <div className="logo-box">
                        <h5>Midscale Hotels & Resorts</h5>
                        <div className="logo-box"><img src="./log.png" alt="" width="150px"/></div>
                            <img src="/logo6.png" alt="" width="150px"/></div>
                       <div className="logo-box"><h5>Full Service Economy Hotel</h5>
                        <img src="./logo4.png" alt="" width="150px"/>
                        <div className="logo-box"> <img src="./logo7.jpeg" alt="" width="150px"/></div></div>
                        </div>
                </div>
            
         </section> 
         <section className="section-five">
        <div className="bacground-clip">
            <h1><span>Rejoice with</span> great comfort and unparalleled hospitality!
            </h1>
            <video src="./banner-video.mp4" width="100%" min-height="70vh"/>
            
            
        </div>
         </section>
       
         
         <section className="section-six">
            <div className='container'>
            <div className="section-six-description">
   
    
  </div>
                <div className='row'>
                    <div className='col-md-6'>
                    <div className="section-six-left">
      <h1>Our Expertise</h1>
      <p>As a Hotel Operator / Franchiser, Crimson Hotels takes care of the interests of the ownership in mind while providing top-className hospitality to the guests with a commitment to pace-setting innovation, modern design, and memorable service experience. Combine these attributes with dedicated team support, and dynamic sales and distribution systems, we promise to bring unparalleled success for the hotel owners.</p>
      <button className="btn2">Be Our Franchise</button>
    </div>
                    </div>
                    <div className='col-md-6'>
                    <div className="section-six-right">
      <div className="grid-container-six">
        <div className="grid-item-six grid-item-box1">
          <p>HOTEL OPERATIONS MANAGEMENT</p>
          <img src="./icon-4 (1).png" alt="Hotel Operations Management" width="100px"/>
        </div>
        <div className="grid-item-six grid-item-box2">
          <p>HOTEL DEVELOPMENT</p>
          <img src="./icon-3.png" alt="Hotel Development" width="100px"/>
        </div>
        <div className="grid-item-six grid-item-box3">
          <p>PRE OPENING SERVICES</p>
          <img src="./icon-1.png" alt="Pre Opening Services" width="100px"/>
        </div>
        <div className="grid-item-six grid-item-box4">
          <p>RENOVATION AND RE BRANDING</p>
          <img src="./icon-2 (1).png" alt="Renovation and Rebranding" width="100px"/>
        </div>
      </div>
    </div>
                        </div>
                </div>
            </div>
  
</section>
{/* <section className="section-seven">
      <h1 className="section-seven-heading">News & Updates</h1>
      <div className="wrapper">
        <div className="carosel">
          <div className="card">
            <div className="img-container1 img-container"></div>
            <div className="img-discription">
              <p>
                Crimson Hotels to start operationalising own brands starting
                this year <br />
                Economic Times | 12 June, 2023
              </p>
              <p>
                Crimson Hotels, a hospitality consultancy and management company
                based in Delhi NCR will be rolling out hotels under its own
                brand portfolio starting this year. .
              </p>
              <button className="btn3">Read More</button>
            </div>
          </div>
          <div className="card">
            <div className="img-container2 img-container"></div>
            <div className="img-discription">
              <p>
                Crimson Hotels appointed as Hotel operator for “Darbar-E-Khas”
                Bareilly <br />
                Hospitality Biz India | 14 March, 2023
              </p>
              <p>
                Crimson Hotels Private Limited, a luxury to boutique Hotel
                Operator, Brand Franchisor & Greenfield Project conceptualiser,
                has taken over the management of …
              </p>
              <button className="btn3">Read More</button>
            </div>
          </div>
          <div className="card">
            <div className="img-container3 img-container"></div>
            <div className="img-discription"></div>
          </div>
        </div>
        <div className="arrow-container"></div>
      </div>
    </section> */}
    <section className="section-mid">
            <div className="section-four-heading"><h1>News & Updates</h1></div>
        <div className="boxes-container">
        <div className="middle">
            <div className="img-content img11"></div>
            <div className="discription-content"><p>
                Crimson Hotels to start operationalising own brands starting
                this year <br />
                Economic Times | 12 June, 2023
              </p>
              <p>
                Crimson Hotels, a hospitality consultancy and management company
                based in Delhi NCR will be rolling out hotels under its own
                brand portfolio starting this year. .
              </p>
              <button className="btn3">Read More</button></div>
        </div>
        <div className="middle"> <div className="img-content img22"></div>
        <div className="discription-content">
        <p>
                Crimson Hotels appointed as Hotel operator for “Darbar-E-Khas”
                Bareilly <br />
                Hospitality Biz India | 14 March, 2023
              </p>
              <p>
                Crimson Hotels Private Limited, a luxury to boutique Hotel
                Operator, Brand Franchisor & Greenfield Project conceptualiser,
                has taken over the management of …
              </p>
              <button className="btn3">Read More</button></div></div>
        <div className="middle"> <div className="img-content img33"></div>
        <div className="discription-content"></div></div>
        </div>
    </section>

    <footer className="footer">
  <div className="footer-container">
    <div className="footer-box">
      <img src="./crimsonwhite.png" alt="" width="170px"/>
    </div>
    <div className="footer-box">
      <div className="footer-links-quick">
        <h3>QUICK LINKS</h3>
        <div className="links">
          <a href="">ABOUT US</a>
          <a href="">CONTACT US</a>
          <a href="">CRIMSON PLUS ++</a>
          <a href="">CAREERS</a>
          <a href="">OUR MANAGEMENT</a>
        </div>
      </div>
    </div>
    <div className="footer-box">
      <h3>FOLLOW US ON</h3>
      <div className="footer-icons">
        <ul>
          <li><img src="./Facebook (1).png" alt="Facebook" width="50px"/></li>
          <li><img src="./Instagram (1).png" alt="Instagram" width="50px"/></li>
          <li><img src="./X.png" alt="Twitter" width="50px"/></li>
          <li><img src="./Linkedin.png" alt="LinkedIn" width="50px"/></li>
          <li><img src="./Youtube.png" alt="YouTube" width="50px"/></li>
        </ul>
      </div>
      <div className="footer-line-box"></div>
      <h3>OUR BRANDS</h3>
      <div className="footer-icons-follow">
        <ul>
          <li><img src="./footerlogo1.png" alt="Brand 1" width="70px"/></li>
          <li><img src="./footerlogo2.png" alt="Brand 2" width="70px"/></li>
          <li><img src="./footerlogo3.png" alt="Brand 3" width="70px"/></li>
          <li><img src="./footerlogo4.png" alt="Brand 4" width="70px"/></li>
          <li><img src="./fooerlogo5.png" alt="Brand 5" width="70px"/></li>
          <li><img src="./footerlogo6.png" alt="Brand 6" width="70px"/></li>
        </ul>
      </div>
      <div className="footer-line-box"></div>
    </div>
    <div className="footer-box">
      <div className="contact-information">
        <ul>
          <li>
            <div className="icon-container">
              <span className="material-symbols-outlined">location_on</span>
              <p>190B, Pocket 12, Jasola, 110025, New Delhi, India</p>
            </div>
          </li>
          <li>
            <div className="icon-container">
              <span className="material-symbols-outlined">call</span>
              <p>+91-9717216222 | +91-9717266332</p>
            </div>
          </li>
          <li>
            <div className="icon-container">
              <span className="material-symbols-outlined">mail</span>
              <p>info@crimsonhotels.in</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-box">
      <h3>OUR HOTELS</h3>
      <h3>INDIA</h3>
      <ul className="footer-link-space">
        <li>DELICE HOTEL, BHILWARA</li>
        <li>CITRON, LUCKNOW</li>
        <li>AAUREUM, BHILWARA</li>
        <li>ECONOSTAY, DAHEJ</li>
        <li>CITRON, BHILWARA</li>
        <li>AKATSUKII COLLECTION, UDAIPUR</li>
        <li>RESORT & CONVENTION CENTER, JAIPUR</li>
        <li>DARBAR E KHAS BOUTIQUE HOTEL, BAREILLY</li>
      </ul>
    </div>
    <div className="footer-box">
      <h3>NEPAL</h3>
      <p>
        NEPALIRIKA HOTEL, DAMAK<br/>
        NEPALIRIKA HOTEL, BIRATCHOWK
      </p>
      <h3>BHUTAN</h3>
      <p>
        T&K HOTEL, THIMPHU<br/>
        ECONOSTAY LHAKI YANGCHAK RESIDENCY, THIMPHU<br/>
        ECONOSTAY LHAKI YANGCHAK RESIDENCY, PARO
      </p>
    </div>
  </div>
</footer>
<div className="bottom-line-conatiner"> <div className="bottom-line"></div>
   <div className="bottom-links"><p>© 2024 Crimson Hotels Private Limited | All Rights Reserved.  
  </p><div className="uls"><ul><li><a href="">Trems Of Service</a><a href="">Partner</a><a href="">Privacy Policy</a><a href="">Cookies Policy</a></li></ul></div></div>
  </div>


    
    


    </>
  );
}


export default App;
