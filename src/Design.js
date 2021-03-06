import React, { Component } from 'react';
import './Design.css';
import WhiteNavBar from './WhiteNavBar';

class Design extends Component {
  render () {
    return (
      <React.Fragment>
        <WhiteNavBar />
        <div className="all">
          <div className="design-container">
            <img className="title-img" src="./design.png" />

            <div className="design">
              <h3>Japanese Restaurant Menu</h3>
              <p>
                This is a menu for a fictitious resturant that I think could be popular in Toronto. I used Arial and Minion Pro 
                typeface for the header. I picked this particular type of food and drinks because I love Matcha and Japanese food. It is generally more healthy and filling. 
              </p>
              <img src="./Menu/JapaneseDessertMenu2.jpg" />
              <img src="./Menu/JapaneseDessertMenu.jpg" />
            </div>

            <div className="design">
              <h3>Mimoo</h3>
              <p>
                This is a brochure for a financial company that does not exist. Even though orange is usually not associated with financial products, but that is changing. 
                I believe Mimoo is product that could be very useful and convenient for the general public. For more information, read the brochure.
              </p>
              <img src="./mimoo/Assignment3Mimoo.jpg" />
              <img src="./mimoo/Assignment3Mimoo2.jpg" />
            </div>

            <div className="design">
              <h3>Space Hat Typeface</h3>
              <p>
                I never thought I would have made my own typeface. I call it Space Hat. I have always been into space and it happens to be the theme of my website. Hence, I made the 
                typeface to suit my website. 
              </p>
              <img src="./alphabet.png" />
            </div>

            <div className="design">
              <h3>Business Card</h3>
              <p>
                I want to have a business card that would give the impression that I enjoy working with software development. Thus, I incorporate code into it. 
              </p>
              <img src="./sophiengo.jpg" />
            </div>

            <div className="design">
              <h3>Postcard</h3>
              <p>
                I have been to Paris, and I happened to be sick when I was there. I forgot to get postcards for my friends and family. I thought this would
                be the perfect opportunity to make one instead. 
              </p>
              <img src="./postcard.jpg" />
            </div>

            <div className="design">
              <h3>Man in the High Castle Book Cover</h3>
              <p>
                Man in the high castle is a very interesting book. I really enjoyed learning history growing up. It is about an alternative universe where the Allies lost to the Axis during WWII. 
              </p>
              <img src="./Castle.jpg" />
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Design;
