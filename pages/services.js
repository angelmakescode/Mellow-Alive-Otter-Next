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
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="services-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="services-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="services-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName13"></NavigationLinks>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="services-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="services-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="services-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="services-banner">
          <h1 id="our services" className="services-text">
            {' '}
            our services
          </h1>
        </div>
        <div className="services-container02">
          <div className="services-container03">
            <h1 className="services-text01">1. residential</h1>
          </div>
          <div className="services-container04">
            <span className="services-text02">
              <span>
                Transform your living space into a haven of style and comfort
                with our exceptional residential interior design services.
              </span>
              <span></span>
            </span>
          </div>
          <div className="services-container05">
            <button className="services-button button">get consult</button>
          </div>
        </div>
        <div className="services-container06">
          <div className="services-container07">
            <h1 className="services-text05">2. commercial</h1>
          </div>
          <div className="services-container08">
            <span className="services-text06">
              <span>
                With a focus on functionality, aesthetics, and creating a
                memorable customer experience, we bring your commercial space to
                life with impeccable attention to detail. Witness the
                transformative power of exceptional design that enhances your
                business&apos;s success and sets you apart from the competition.
              </span>
              <span></span>
            </span>
          </div>
          <div className="services-container09">
            <button className="services-button1 button">get consult</button>
          </div>
        </div>
        <div className="services-container10">
          <div className="services-container11">
            <h1 className="services-text09">3. staging</h1>
          </div>
          <div className="services-container12">
            <span className="services-text10">
              <span>
                We understand the power of first impressions when it comes to
                selling a property. Prepare to showcase your home&apos;s true
                potential with our expert home staging interior design services.
              </span>
              <span></span>
            </span>
          </div>
          <div className="services-container13">
            <button className="services-button2 button">get consult</button>
          </div>
        </div>
        <div className="services-container14">
          <div className="services-container15">
            <h1 className="services-text13">
              <span>4.3D</span>
              <br></br>
              <span>rendering</span>
            </h1>
          </div>
          <div className="services-container16">
            <span className="services-text17">
              <span>
                Experience the power of immersive visualizations with our
                cutting-edge 3D rendering interior design services.
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="services-container17">
            <button className="services-button3 button">get consult</button>
          </div>
        </div>
        <div className="services-hero">
          <span className="services-text21">about us:</span>
          <h1 className="services-text22">
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
          <button className="services-button4 button">
            <span className="services-text26">
              <span className="services-text27">get consult</span>
              <br></br>
            </span>
          </button>
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
          .services-image1 {
            height: 2rem;
          }
          .services-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .services-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .services-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .services-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .services-icon08 {
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
          .services-container02 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .services-container03 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .services-text01 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .services-container04 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-text02 {
            width: 550px;
          }
          .services-container05 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .services-button {
            align-self: center;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .services-button:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .services-container06 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .services-container07 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .services-text05 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .services-container08 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-text06 {
            width: 550px;
          }
          .services-container09 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .services-button1 {
            align-self: center;
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
          .services-container10 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .services-container11 {
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
          .services-container12 {
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
          .services-container13 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .services-button2 {
            align-self: center;
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
          .services-container14 {
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
          .services-container15 {
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
          .services-container16 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-text17 {
            width: 550px;
          }
          .services-container17 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .services-button3 {
            align-self: center;
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
          .services-text21 {
            color: var(--dl-color-colors-red);
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 900;
            letter-spacing: 2px;
          }
          .services-text22 {
            color: var(--dl-color-colors-black);
            font-size: 1rem;
            max-width: 100%;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
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
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .services-text27:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          @media (max-width: 1600px) {
            .services-nav {
              padding-left: var(--dl-space-space-sixunits);
              padding-right: var(--dl-space-space-sixunits);
            }
            .services-container02 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text01 {
              font-size: 1.8rem;
            }
            .services-container04 {
              width: 500px;
              height: auto;
            }
            .services-container05 {
              align-items: flex-end;
            }
            .services-container06 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text05 {
              font-size: 1.8rem;
            }
            .services-container08 {
              width: 500px;
              height: auto;
            }
            .services-container09 {
              align-items: flex-end;
            }
            .services-container10 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text09 {
              font-size: 1.8rem;
            }
            .services-container12 {
              width: 500px;
              height: auto;
            }
            .services-container13 {
              align-items: flex-end;
            }
            .services-container14 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text13 {
              font-size: 1.7rem;
            }
            .services-container16 {
              width: 500px;
              height: auto;
            }
            .services-container17 {
              align-items: flex-end;
            }
          }
          @media (max-width: 1500px) {
            .services-container02 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text01 {
              font-size: 1.8rem;
            }
            .services-text02 {
              width: 500px;
            }
            .services-container06 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text05 {
              font-size: 1.8rem;
            }
            .services-text06 {
              width: 500px;
            }
            .services-container10 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text09 {
              font-size: 1.8rem;
            }
            .services-text10 {
              width: 500px;
            }
            .services-container14 {
              width: 95%;
              justify-content: space-between;
            }
            .services-text13 {
              font-size: 1.7rem;
            }
            .services-text17 {
              width: 500px;
            }
          }
          @media (max-width: 1000px) {
            .services-nav {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .services-container02 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .services-text01 {
              font-size: 1.8rem;
            }
            .services-container04 {
              width: 500px;
            }
            .services-container05 {
              align-items: flex-end;
            }
            .services-container06 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .services-text05 {
              font-size: 1.8rem;
            }
            .services-container08 {
              width: 500px;
            }
            .services-container09 {
              align-items: flex-end;
            }
            .services-container10 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .services-text09 {
              font-size: 1.8rem;
            }
            .services-container12 {
              width: 500px;
            }
            .services-container13 {
              align-items: flex-end;
            }
            .services-container14 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .services-text13 {
              font-size: 1.7rem;
            }
            .services-container16 {
              width: 500px;
            }
            .services-container17 {
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
            .services-container02 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .services-container03 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-text01 {
              font-size: 1.8rem;
            }
            .services-container04 {
              width: auto;
            }
            .services-text02 {
              width: 300px;
            }
            .services-container05 {
              width: auto;
              align-items: flex-start;
            }
            .services-container06 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .services-container07 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-text05 {
              font-size: 1.8rem;
            }
            .services-container08 {
              width: auto;
            }
            .services-text06 {
              width: 300px;
            }
            .services-container09 {
              width: auto;
              align-items: flex-start;
            }
            .services-container10 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .services-container11 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-text09 {
              font-size: 1.8rem;
            }
            .services-container12 {
              width: auto;
            }
            .services-text10 {
              width: 300px;
            }
            .services-container13 {
              width: auto;
              align-items: flex-start;
            }
            .services-container14 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .services-container15 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-text13 {
              font-size: 1.7rem;
            }
            .services-container16 {
              width: auto;
            }
            .services-text17 {
              width: 300px;
            }
            .services-container17 {
              width: auto;
              align-items: flex-start;
            }
            .services-button4 {
              align-self: flex-end;
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
            .services-container02 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .services-container03 {
              width: auto;
              height: auto;
            }
            .services-text01 {
              font-size: 1em;
            }
            .services-container04 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .services-text02 {
              width: 250px;
              font-size: 0.7rem;
            }
            .services-container05 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-button {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
            .services-container06 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .services-container07 {
              width: auto;
              height: auto;
            }
            .services-text05 {
              font-size: 1em;
            }
            .services-container08 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .services-text06 {
              width: 250px;
              font-size: 0.7rem;
              text-align: left;
            }
            .services-container09 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-button1 {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
            .services-container10 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .services-container11 {
              width: auto;
              height: auto;
            }
            .services-text09 {
              font-size: 1em;
            }
            .services-container12 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .services-text10 {
              width: 215px;
              font-size: 0.7rem;
            }
            .services-container13 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-button2 {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
            .services-container14 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .services-container15 {
              width: auto;
              height: auto;
            }
            .services-text13 {
              font-size: 1em;
            }
            .services-container16 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .services-text17 {
              width: 215px;
              font-size: 0.7rem;
            }
            .services-container17 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .services-button3 {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
            .services-button4 {
              font-size: 0.6rem;
              align-self: flex-end;
              font-family: Merriweather;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .services-text26 {
              font-size: 1rem;
              font-style: normal;
              font-weight: 600;
            }
            .services-text27 {
              align-self: flex-end;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
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