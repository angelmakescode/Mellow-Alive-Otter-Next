import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Mellow Alive Otter</title>
          <meta property="og:title" content="Contact - Mellow Alive Otter" />
        </Head>
        <header data-role="Header" className="contact-nav">
          <img
            alt="logo"
            src="https://i.imgur.com/mseZpUy.png"
            className="contact-image"
          />
          <div className="contact-nav1">
            <NavigationLinks rootClassName="rootClassName16"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="contact-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contact-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="contact-mobile-menu">
            <div className="contact-nav2">
              <div className="contact-container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="contact-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="contact-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="contact-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="contact-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="contact-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="contact-hero-type-1">
          <div className="contact-container2">
            <h1 className="contact-text">Get in touch.</h1>
            <input
              type="text"
              placeholder="Name"
              className="contact-textinput input"
            />
            <input
              type="text"
              placeholder="Number"
              className="input contact-textinput1"
            />
            <input
              type="text"
              placeholder="Email"
              className="contact-textinput2 input"
            />
            <div className="contact-container3">
              <div className="contact-container4">
                <textarea
                  placeholder="Message"
                  className="contact-textarea textarea"
                ></textarea>
              </div>
            </div>
            <button className="contact-button button">send</button>
          </div>
          <div className="contact-container5">
            <h1 className="contact-text01">Contact Info</h1>
            <div className="contact-container6">
              <div className="contact-container7">
                <span className="contact-text02">
                  <span>Phone:</span>
                  <br></br>
                  <span>(123)456-7891</span>
                </span>
                <span className="contact-text06">
                  <span>Email:</span>
                  <br></br>
                  <span>emailaddress@email.com</span>
                </span>
              </div>
            </div>
            <img
              alt="image"
              src="https://i.imgur.com/mseZpUy.png"
              className="contact-image2"
            />
          </div>
        </div>
        <div className="contact-hero-type-11">
          <h1 className="contact-text10">
            “the heart of design lies in understanding the needs and desires of
            the people who inhabit a space.”
          </h1>
        </div>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-nav {
            width: 100%;
            display: flex;
            max-width: auto;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .contact-image {
            height: 8rem;
          }
          .contact-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .contact-burger-menu {
            display: none;
          }
          .contact-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .contact-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .contact-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .contact-image1 {
            height: 2rem;
          }
          .contact-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contact-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .contact-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .contact-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .contact-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .contact-hero-type-1 {
            width: 95%;
            display: flex;
            position: relative;
            max-width: auto;
            min-height: auto;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
            background-color: var(--dl-color-colors-red);
          }
          .contact-container2 {
            width: 800px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .contact-text {
            color: var(--dl-color-colors-cream);
            font-size: 3rem;
            max-width: 900px;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .contact-textinput {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-textinput2 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .contact-container4 {
            flex: 0 0 auto;
            width: auto;
            height: 300px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .contact-textarea {
            width: 705px;
            height: 300px;
          }
          .contact-button {
            align-self: flex-start;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .contact-button:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .contact-container5 {
            flex: 0 0 auto;
            width: 800px;
            height: 700px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text01 {
            color: var(--dl-color-colors-cream);
            font-size: 2rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .contact-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .contact-container7 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-text02 {
            color: var(--dl-color-colors-cream);
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-fiveunits);
            font-family: Merriweather;
            font-weight: 400;
            margin-left: 0px;
          }
          .contact-text06 {
            color: var(--dl-color-colors-cream);
            font-size: 1.2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-fiveunits);
            font-family: Merriweather;
            font-weight: 400;
          }
          .contact-image2 {
            width: var(--dl-size-size-xxlarge);
            align-self: flex-end;
            margin-top: 200px;
            object-fit: cover;
          }
          .contact-hero-type-11 {
            width: 95%;
            height: var(--dl-size-size-large);
            display: flex;
            position: relative;
            max-width: auto;
            box-shadow: 5px 5px 10px 0px #ad9d9d;
            min-height: auto;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-colors-red);
          }
          .contact-text10 {
            color: var(--dl-color-colors-cream);
            font-size: 2.4em;
            font-style: italic;
            text-align: center;
            font-family: Merriweather;
            font-weight: 400;
          }
          @media (max-width: 1600px) {
            .contact-nav {
              padding-left: var(--dl-space-space-sixunits);
              padding-right: var(--dl-space-space-sixunits);
            }
            .contact-hero-type-1 {
              width: 90%;
              padding: var(--dl-space-space-twounits);
              max-width: auto;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              min-height: 650px;
              align-items: center;
              border-radius: 10px;
              margin-bottom: var(--dl-space-space-threeunits);
              justify-content: space-between;
              background-color: var(--dl-color-colors-red);
              border-bottom-width: 0px;
            }
            .contact-container2 {
              width: 500px;
              height: 500px;
            }
            .contact-text {
              color: var(--dl-color-colors-cream);
            }
            .contact-textinput {
              width: 335px;
              margin-top: var(--dl-space-space-twounits);
              border-width: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .contact-textinput1 {
              width: 335px;
              border-width: 0px;
            }
            .contact-textinput2 {
              width: 335px;
              margin-top: var(--dl-space-space-twounits);
              border-width: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .contact-container4 {
              height: auto;
            }
            .contact-textarea {
              width: 335px;
              height: 150px;
              border-width: 0px;
            }
            .contact-button {
              align-self: flex-start;
            }
            .contact-container5 {
              width: 500px;
              height: 500px;
              padding: var(--dl-space-space-twounits);
              align-self: center;
              align-items: center;
              border-radius: 10px;
              background-color: var(--dl-color-colors-red);
            }
            .contact-text01 {
              color: var(--dl-color-colors-cream);
              font-size: 2rem;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .contact-text02 {
              color: var(--dl-color-colors-cream);
              font-size: 1.2rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-fourunits);
              text-align: left;
              font-family: Merriweather;
              font-weight: 400;
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .contact-text06 {
              color: var(--dl-color-colors-cream);
              font-size: 1.2rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-fourunits);
              font-family: Merriweather;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .contact-image2 {
              width: 225px;
              margin-top: 10px;
            }
            .contact-hero-type-11 {
              width: 92%;
              padding: 0px;
              max-width: auto;
              min-height: auto;
              border-radius: 10px;
              justify-content: center;
            }
          }
          @media (max-width: 1500px) {
            .contact-hero-type-1 {
              width: 93%;
              padding: var(--dl-space-space-unit);
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              margin-top: var(--dl-space-space-unit);
              border-radius: 10px;
              justify-content: space-between;
              background-color: var(--dl-color-colors-red);
              border-bottom-width: 0px;
            }
            .contact-container2 {
              width: 700px;
              padding: 0px;
              align-items: flex-start;
              margin-right: 0px;
            }
            .contact-text {
              color: var(--dl-color-colors-cream);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .contact-textinput {
              width: 500px;
            }
            .contact-textinput1 {
              width: 500px;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .contact-textinput2 {
              width: 500px;
            }
            .contact-textarea {
              width: 500px;
              height: 175px;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .contact-button {
              align-self: flex-start;
              margin-top: var(--dl-space-space-unit);
            }
            .contact-container5 {
              width: 500px;
              height: 500px;
              padding: 0px;
              align-items: flex-start;
              border-radius: 10px;
            }
            .contact-text01 {
              color: var(--dl-color-colors-cream);
              font-size: 1.8rem;
              font-style: normal;
              margin-top: var(--dl-space-space-threeunits);
              font-family: Merriweather;
              font-weight: 700;
            }
            .contact-text02 {
              color: var(--dl-color-colors-cream);
              font-size: 1.5rem;
              font-style: normal;
              margin-top: 0px;
              font-family: Merriweather;
              font-weight: 400;
              margin-left: 0px;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .contact-text06 {
              color: var(--dl-color-colors-cream);
              font-size: 1.5rem;
              font-style: normal;
              margin-top: 0px;
              font-family: Merriweather;
              font-weight: 400;
              margin-bottom: 0px;
            }
            .contact-hero-type-11 {
              width: 95%;
              padding: 0px;
              margin-top: var(--dl-space-space-fourunits);
            }
            .contact-text10 {
              width: 100%;
            }
          }
          @media (max-width: 1000px) {
            .contact-nav {
              padding-left: 52px;
              padding-right: 52px;
            }
            .contact-hero-type-1 {
              width: 900px;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: row;
              justify-content: space-between;
            }
            .contact-container2 {
              align-items: flex-start;
              padding-top: 0px;
              margin-right: var(--dl-space-space-twounits);
              padding-left: 0px;
              margin-bottom: 70px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .contact-text {
              font-size: 2rem;
            }
            .contact-textinput {
              width: 250px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-textinput1 {
              width: 250px;
            }
            .contact-textinput2 {
              width: 250px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-textarea {
              width: 250px;
              height: 225px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-button {
              align-self: flex-start;
            }
            .contact-container5 {
              width: 350px;
            }
            .contact-text01 {
              color: var(--dl-color-colors-cream);
              font-size: 1.5rem;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
            }
            .contact-container7 {
              flex-direction: column;
            }
            .contact-text02 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-family: Merriweather;
              font-weight: 400;
              margin-left: 0px;
            }
            .contact-text06 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-family: Merriweather;
              font-weight: 400;
            }
            .contact-hero-type-11 {
              width: 98%;
            }
            .contact-text10 {
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .contact-hero-type-1 {
              flex-direction: column;
            }
            .contact-container2 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .contact-text {
              text-align: center;
            }
            .contact-hero-type-11 {
              flex-direction: column;
            }
          }
          @media (max-width: 800px) {
            .contact-nav {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-nav1 {
              display: none;
            }
            .contact-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .contact-icon {
              fill: var(--dl-color-colors-red);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .contact-hero-type-1 {
              width: 700px;
              padding: var(--dl-space-space-unit);
            }
            .contact-container2 {
              padding-top: 0px;
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-bottom: 0px;
            }
            .contact-text {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
            }
            .contact-textinput {
              width: 250px;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .contact-textinput1 {
              width: 250px;
            }
            .contact-textinput2 {
              width: 250px;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .contact-textarea {
              width: 250px;
            }
            .contact-button {
              align-self: flex-start;
            }
            .contact-container5 {
              width: 250px;
              padding: 0px;
              flex-direction: column;
            }
            .contact-text01 {
              color: var(--dl-color-colors-cream);
              font-size: 1em;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
            }
            .contact-container7 {
              flex-direction: column;
            }
            .contact-text02 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 400;
              margin-left: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .contact-text06 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              align-self: flex-start;
              margin-top: var(--dl-space-space-threeunits);
              font-family: Merriweather;
            }
            .contact-hero-type-11 {
              width: 700px;
              padding: var(--dl-space-space-unit);
              border-width: 0px;
              background-color: var(--dl-color-colors-red);
            }
            .contact-text10 {
              color: var(--dl-color-colors-cream);
              font-size: 1.8em;
              font-style: italic;
              font-family: Merriweather;
              font-weight: 400;
            }
          }
          @media (max-width: 767px) {
            .contact-hero-type-1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-hero-type-11 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 500px) {
            .contact-nav {
              padding: var(--dl-space-space-unit);
            }
            .contact-mobile-menu {
              padding: 16px;
            }
            .contact-hero-type-1 {
              width: 500px;
              max-width: auto;
              align-self: center;
              min-height: auto;
              align-items: flex-start;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: row;
              justify-content: flex-start;
            }
            .contact-container2 {
              flex: 1;
              width: 250px;
              align-self: center;
              margin-right: 0px;
              padding-left: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
              flex-direction: column;
              justify-content: flex-start;
            }
            .contact-text {
              font-size: 1.5rem;
              max-width: 200px;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-textinput {
              width: 200px;
              font-size: 0.5rem;
              font-family: Merriweather;
            }
            .contact-textinput1 {
              width: 200px;
              font-size: 0.5rem;
              margin-top: var(--dl-space-space-halfunit);
              font-family: Merriweather;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .contact-textinput2 {
              width: 200px;
              font-size: 0.5rem;
              font-family: Merriweather;
            }
            .contact-textarea {
              width: 200px;
              height: 70px;
              font-size: 0.5rem;
              align-self: flex-start;
              margin-top: var(--dl-space-space-halfunit);
              font-family: Merriweather;
            }
            .contact-button {
              font-size: 0.7rem;
              align-self: flex-start;
              font-family: Merriweather;
            }
            .contact-container5 {
              width: 200px;
              padding: 0px;
            }
            .contact-text01 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              font-style: normal;
              text-align: left;
              font-family: Merriweather;
              font-weight: 700;
            }
            .contact-container7 {
              width: 200px;
              flex-direction: column;
            }
            .contact-text02 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              font-style: normal;
              margin-top: var(--dl-space-space-threeunits);
              font-family: Merriweather;
              font-weight: 400;
              margin-left: 0px;
              padding-top: 0px;
            }
            .contact-text06 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              margin-top: var(--dl-space-space-threeunits);
            }
            .contact-image2 {
              width: 100px;
            }
            .contact-hero-type-11 {
              width: 475px;
              max-width: auto;
              min-height: auto;
              align-items: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: row;
              justify-content: center;
              background-color: var(--dl-color-colors-red);
            }
            .contact-text10 {
              color: var(--dl-color-colors-cream);
              width: auto;
              font-size: 1.2rem;
            }
          }
          @media (max-width: 479px) {
            .contact-hero-type-1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-container2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-hero-type-11 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
