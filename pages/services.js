import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const Services = (props) => {
  return (
    <>
      <div className="services-container">
        <Head>
          <title>Services - Mellow Alive Otter</title>
          <meta property="og:title" content="Services - Mellow Alive Otter" />
        </Head>
        <header data-role="Header" className="services-nav">
          <img
            alt="logo"
            src="https://i.imgur.com/mseZpUy.png"
            className="services-image"
          />
          <div className="services-nav1">
            <NavigationLinks rootClassName="rootClassName12"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="services-burger-menu">
            <svg viewBox="0 0 1024 1024" className="services-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="services-mobile-menu">
            <div className="services-nav2">
              <div className="services-container01">
                <div
                  data-role="CloseMobileMenu"
                  className="services-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="services-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName13"></NavigationLinks>
            </div>
          </div>
        </header>
        <div className="services-banner">
          <h1 id="our services" className="services-text">
            {' '}
            our services
          </h1>
        </div>
        <div className="services-hero">
          <span className="services-text01">about us:</span>
          <h1 className="services-text02">
            <span>
              From concept to completion, we collaborate closely with you,
              infusing each project with our expertise, creativity, and
              unwavering attention to detail. With an emphasis on personalized
              service and a commitment to exceeding expectations, we take pride
              in transforming houses into homes that evoke a sense of joy,
              comfort, and inspiration. Step into a world of limitless
              possibilities and let [Business Name] redefine your living
              experience.
            </span>
            <br></br>
            <br></br>
          </h1>
          <button className="services-button button">
            <span className="services-text06">
              <span className="services-text07">get consult</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="services-container02">
          <div className="services-container03">
            <div className="services-container04">
              <h1 className="services-text09">1. residential</h1>
            </div>
            <div className="services-container05">
              <span className="services-text10">
                <span>
                  Transform your living space into a haven of style and comfort
                  with our exceptional residential interior design services.
                </span>
                <span></span>
              </span>
            </div>
            <div className="services-container06">
              <button className="services-button1 button">get consult</button>
            </div>
          </div>
          <div className="services-container07">
            <div className="services-container08">
              <h1 className="services-text13">2. commercial</h1>
            </div>
            <div className="services-container09">
              <span className="services-text14">
                <span>
                  With a focus on functionality, aesthetics, and creating a
                  memorable customer experience, we bring your commercial space
                  to life with impeccable attention to detail. Witness the
                  transformative power of exceptional design that enhances your
                  business&apos;s success and sets you apart from the
                  competition.
                </span>
                <span></span>
              </span>
            </div>
            <div className="services-container10">
              <button className="services-button2 button">get consult</button>
            </div>
          </div>
          <div className="services-container11">
            <div className="services-container12">
              <h1 className="services-text17">3. staging</h1>
            </div>
            <div className="services-container13">
              <span className="services-text18">
                <span>
                  We understand the power of first impressions when it comes to
                  selling a property. Prepare to showcase your home&apos;s true
                  potential with our expert home staging interior design
                  services.
                </span>
                <span></span>
              </span>
            </div>
            <div className="services-container14">
              <button className="services-button3 button">get consult</button>
            </div>
          </div>
          <div className="services-container15">
            <div className="services-container16">
              <h1 className="services-text21">
                <span>4.3D</span>
                <br></br>
                <span>rendering</span>
              </h1>
            </div>
            <div className="services-container17">
              <span className="services-text25">
                <span>
                  Experience the power of immersive visualizations with our
                  cutting-edge 3D rendering interior design services.
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
            <div className="services-container18">
              <button className="services-button4 button">get consult</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .services-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .services-nav {
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
          .services-image {
            height: 8rem;
          }
          .services-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .services-burger-menu {
            display: none;
          }
          .services-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .services-mobile-menu {
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
          .services-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .services-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .services-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .services-banner {
            width: 95%;
            display: flex;
            position: relative;
            align-items: center;
            border-color: var(--dl-color-colors-black);
            border-width: 1px;
            flex-direction: column;
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .services-text {
            font-size: 3rem;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 700;
          }
          .services-hero {
            width: 95%;
            display: none;
            padding: var(--dl-space-space-threeunits);
            box-shadow: 5px 5px 10px 0px #ad9d9d;
            margin-top: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .services-text01 {
            color: var(--dl-color-colors-red);
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 900;
            letter-spacing: 2px;
          }
          .services-text02 {
            color: var(--dl-color-colors-black);
            font-size: 1rem;
            max-width: 100%;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .services-button {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .services-button:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .services-text07:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .services-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .services-container03 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .services-container04 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .services-text09 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .services-container05 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-text10 {
            width: 550px;
          }
          .services-container06 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .services-button1 {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .services-button1:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .services-container07 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .services-container08 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .services-text13 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .services-container09 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-text14 {
            width: 550px;
          }
          .services-container10 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .services-button2 {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .services-button2:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .services-container11 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .services-container12 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .services-text17 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .services-container13 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-text18 {
            width: 550px;
          }
          .services-container14 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .services-button3 {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .services-button3:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .services-container15 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-colors-black);
            border-width: 1px;
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .services-container16 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .services-text21 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .services-container17 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-text25 {
            width: 550px;
          }
          .services-container18 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .services-button4 {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .services-button4:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          @media (max-width: 1600px) {
            .services-nav {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .services-container03 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text09 {
              font-size: 1.8rem;
            }
            .services-container05 {
              width: 500px;
              height: auto;
            }
            .services-container06 {
              align-items: flex-end;
            }
            .services-container07 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text13 {
              font-size: 1.8rem;
            }
            .services-container09 {
              width: 500px;
              height: auto;
            }
            .services-container10 {
              align-items: flex-end;
            }
            .services-container11 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text17 {
              font-size: 1.8rem;
            }
            .services-container13 {
              width: 500px;
              height: auto;
            }
            .services-container14 {
              align-items: flex-end;
            }
            .services-container15 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text21 {
              font-size: 1.7rem;
            }
            .services-container17 {
              width: 500px;
              height: auto;
            }
            .services-container18 {
              align-items: flex-end;
            }
          }
          @media (max-width: 1500px) {
            .services-container03 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text09 {
              font-size: 1.8rem;
            }
            .services-text10 {
              width: 500px;
            }
            .services-container07 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text13 {
              font-size: 1.8rem;
            }
            .services-text14 {
              width: 500px;
            }
            .services-container11 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text17 {
              font-size: 1.8rem;
            }
            .services-text18 {
              width: 500px;
            }
            .services-container15 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text21 {
              font-size: 1.7rem;
            }
            .services-text25 {
              width: 500px;
            }
          }
          @media (max-width: 1000px) {
            .services-nav {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .services-container03 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .services-text09 {
              font-size: 1.8rem;
            }
            .services-container05 {
              width: 500px;
            }
            .services-container06 {
              align-items: flex-end;
            }
            .services-container07 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .services-text13 {
              font-size: 1.8rem;
            }
            .services-container09 {
              width: 500px;
            }
            .services-container10 {
              align-items: flex-end;
            }
            .services-container11 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .services-text17 {
              font-size: 1.8rem;
            }
            .services-container13 {
              width: 500px;
            }
            .services-container14 {
              align-items: flex-end;
            }
            .services-container15 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .services-text21 {
              font-size: 1.7rem;
            }
            .services-container17 {
              width: 500px;
            }
            .services-container18 {
              align-items: flex-end;
            }
          }
          @media (max-width: 800px) {
            .services-nav {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .services-nav1 {
              display: none;
            }
            .services-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .services-icon {
              fill: var(--dl-color-colors-red);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .services-mobile-menu {
              display: flex;
              background-color: var(--dl-color-colors-cream);
            }
            .services-banner {
              padding: var(--dl-space-space-oneandhalfunits);
              border-color: var(--dl-color-colors-black);
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .services-text {
              align-self: flex-start;
            }
            .services-button {
              align-self: flex-end;
            }
            .services-container03 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .services-container04 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-text09 {
              font-size: 1.8rem;
            }
            .services-container05 {
              width: auto;
            }
            .services-text10 {
              width: 300px;
            }
            .services-container06 {
              width: auto;
              align-items: flex-start;
            }
            .services-container07 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .services-container08 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-text13 {
              font-size: 1.8rem;
            }
            .services-container09 {
              width: auto;
            }
            .services-text14 {
              width: 300px;
            }
            .services-container10 {
              width: auto;
              align-items: flex-start;
            }
            .services-container11 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .services-container12 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-text17 {
              font-size: 1.8rem;
            }
            .services-container13 {
              width: auto;
            }
            .services-text18 {
              width: 300px;
            }
            .services-container14 {
              width: auto;
              align-items: flex-start;
            }
            .services-container15 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .services-container16 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-text21 {
              font-size: 1.7rem;
            }
            .services-container17 {
              width: auto;
            }
            .services-text25 {
              width: 300px;
            }
            .services-container18 {
              width: auto;
              align-items: flex-start;
            }
          }
          @media (max-width: 767px) {
            .services-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .services-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 500px) {
            .services-nav {
              padding: var(--dl-space-space-unit);
            }
            .services-mobile-menu {
              padding: 16px;
            }
            .services-banner {
              width: 98%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-self: center;
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-colors-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .services-text {
              font-size: 1.2rem;
              align-self: flex-start;
              text-align: left;
            }
            .services-button {
              font-size: 0.6rem;
              align-self: flex-end;
              font-family: Merriweather;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .services-text06 {
              font-size: 1rem;
              font-style: normal;
              font-weight: 600;
            }
            .services-text07 {
              align-self: flex-end;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .services-container02 {
              width: 500px;
              height: auto;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .services-container03 {
              margin-top: var(--dl-space-space-halfunit);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .services-container04 {
              width: auto;
              height: auto;
            }
            .services-text09 {
              font-size: 0.8em;
            }
            .services-container05 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .services-text10 {
              width: 250px;
              font-size: 0.7rem;
              align-self: flex-start;
            }
            .services-container06 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-button1 {
              font-size: 0.5rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .services-container07 {
              margin: 0px;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .services-container08 {
              width: auto;
              height: auto;
            }
            .services-text13 {
              font-size: 0.8em;
            }
            .services-container09 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .services-text14 {
              width: 250px;
              font-size: 0.7rem;
              align-self: flex-start;
              text-align: left;
            }
            .services-container10 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-button2 {
              font-size: 0.5rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .services-container11 {
              margin-top: var(--dl-space-space-halfunit);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .services-container12 {
              width: auto;
              height: auto;
            }
            .services-text17 {
              font-size: 0.8em;
              margin-right: var(--dl-space-space-twounits);
            }
            .services-container13 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .services-text18 {
              width: 215px;
              font-size: 0.7rem;
              align-self: flex-start;
            }
            .services-container14 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-button3 {
              font-size: 0.5rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              margin-left: 30px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .services-container15 {
              margin-top: var(--dl-space-space-halfunit);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .services-container16 {
              width: auto;
              height: auto;
            }
            .services-text21 {
              font-size: 0.8em;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .services-container17 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .services-text25 {
              width: 215px;
              font-size: 0.7rem;
              align-self: flex-start;
            }
            .services-container18 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-button4 {
              font-size: 0.5rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              margin-left: 36px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .services-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .services-hero {
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

export default Services
