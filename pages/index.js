import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import HeroType1 from '../components/hero-type-1'
import Banner from '../components/banner'
import AwardSection from '../components/award-section'
import GalleryCard11 from '../components/gallery-card11'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Mellow Alive Otter</title>
          <meta property="og:title" content="Mellow Alive Otter" />
        </Head>
        <header data-role="Header" className="home-nav">
          <img
            alt="logo"
            src="https://i.imgur.com/mseZpUy.png"
            className="home-image"
          />
          <div className="home-nav1">
            <NavigationLinks rootClassName="rootClassName8"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav2">
              <div className="home-container01">
                <img
                  alt="image"
                  src="https://i.imgur.com/mseZpUy.png"
                  className="home-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName9"></NavigationLinks>
            </div>
          </div>
        </header>
        <HeroType1
          image_src="https://i.imgur.com/hVNACXi.png"
          rootClassName="hero-type1-root-class-name1"
        ></HeroType1>
        <Banner rootClassName="banner-root-class-name"></Banner>
        <AwardSection></AwardSection>
        <div className="home-banner">
          <h1 id="our services" className="home-text">
            {' '}
            our services
          </h1>
        </div>
        <div className="home-container02">
          <div className="home-container03">
            <div className="home-container04">
              <h1 className="home-text01">1. residential</h1>
            </div>
            <div className="home-container05">
              <span className="home-text02">
                <span>
                  Transform your living space into a haven of style and comfort
                  with our exceptional residential interior design services.
                </span>
                <span></span>
              </span>
            </div>
            <div className="home-container06">
              <button className="home-button button">get consult</button>
            </div>
          </div>
          <div className="home-container07">
            <div className="home-container08">
              <h1 className="home-text05">2. commercial</h1>
            </div>
            <div className="home-container09">
              <span className="home-text06">
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
            <div className="home-container10">
              <button className="home-button1 button">get consult</button>
            </div>
          </div>
          <div className="home-container11">
            <div className="home-container12">
              <h1 className="home-text09">3. staging</h1>
            </div>
            <div className="home-container13">
              <span className="home-text10">
                <span>
                  We understand the power of first impressions when it comes to
                  selling a property. Prepare to showcase your home&apos;s true
                  potential with our expert home staging interior design
                  services.
                </span>
                <span></span>
              </span>
            </div>
            <div className="home-container14">
              <button className="home-button2 button">get consult</button>
            </div>
          </div>
          <div className="home-container15">
            <div className="home-container16">
              <h1 className="home-text13">
                <span>4.3D</span>
                <br></br>
                <span>rendering</span>
              </h1>
            </div>
            <div className="home-container17">
              <span className="home-text17">
                <span>
                  Experience the power of immersive visualizations with our
                  cutting-edge 3D rendering interior design services.
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
            <div className="home-container18">
              <button className="home-button3 button">get consult</button>
            </div>
          </div>
        </div>
        <div className="home-hero">
          <span className="home-text21">about us:</span>
          <h1 className="home-text22">
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
          <button className="home-button4 button">
            <span className="home-text26">
              <span className="home-text27">get consult</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="home-container19">
          <div className="home-container20">
            <ul className="list home-ul">
              <li className="list-item home-li">
                <span className="home-text29">1. residential</span>
              </li>
              <li className="list-item home-li1">
                <span className="home-text30">2. commercial</span>
              </li>
              <li className="list-item home-list-item">
                <span className="home-text31">3. staging</span>
              </li>
              <li className="list-item">
                <span className="home-text32">4. 3D rendering</span>
              </li>
            </ul>
          </div>
          <button className="home-button5 button">start a project</button>
        </div>
        <div className="home-banner1">
          <h1 className="home-text33">Our Recent Projects</h1>
          <span className="home-text34">
            <span>
              We collaborate closely, crafting spaces that not only meet
              functional requirements but also evoke emotions and enhance
              well-being.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="home-gallery">
          <div className="home-gallery-card">
            <img
              alt="image"
              src="https://i.imgur.com/M64SMGk.png"
              className="home-image2"
            />
            <button className="home-button6 button">view project</button>
          </div>
          <GalleryCard11
            image_src="https://i.imgur.com/124k90Z.png"
            rootClassName="rootClassName1"
          ></GalleryCard11>
          <div className="home-gallery-card1">
            <img
              alt="image"
              src="https://i.imgur.com/Wq4LOIV.png"
              className="home-image3"
            />
            <button className="home-button7 button">view project</button>
          </div>
        </div>
        <div className="home-hero-type-1">
          <div className="home-container21">
            <h1 className="home-text37">Get in touch.</h1>
            <input
              type="text"
              placeholder="Name"
              className="home-textinput input"
            />
            <input
              type="text"
              placeholder="Number"
              className="input home-textinput1"
            />
            <input
              type="text"
              placeholder="Email"
              className="home-textinput2 input"
            />
            <div className="home-container22">
              <div className="home-container23">
                <textarea
                  placeholder="Message"
                  className="home-textarea textarea"
                ></textarea>
              </div>
            </div>
            <button className="home-button8 button">start a project</button>
          </div>
          <div className="home-container24">
            <h1 className="home-text38">Contact Info</h1>
            <div className="home-container25">
              <span className="home-text39">
                <span>Email:</span>
                <br></br>
                <span>emailaddress@email.com</span>
              </span>
              <span className="home-text43">
                <span>Phone:</span>
                <br></br>
                <span>(123)456-7819</span>
              </span>
            </div>
            <img
              alt="image"
              src="https://i.imgur.com/mseZpUy.png"
              className="home-image4"
            />
          </div>
        </div>
        <div className="home-hero-type-11">
          <h1 className="home-text47">
            “the heart of design lies in understanding the needs and desires of
            the people who inhabit a space.”
          </h1>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-nav {
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
          .home-image {
            height: 8rem;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .home-mobile-menu {
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
          .home-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image1 {
            height: 2rem;
          }
          .home-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-banner {
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
          .home-text {
            font-size: 3rem;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home-container02 {
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
          .home-container03 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text01 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text02 {
            width: 550px;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-button {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text05 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text06 {
            width: 550px;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-button1 {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button1:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text09 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text10 {
            width: 550px;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-button2 {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button2:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .home-container15 {
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
          .home-container16 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text13 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text17 {
            width: 550px;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-button3 {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button3:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .home-hero {
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
          .home-text21 {
            color: var(--dl-color-colors-red);
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 900;
            letter-spacing: 2px;
          }
          .home-text22 {
            color: var(--dl-color-colors-black);
            font-size: 1rem;
            max-width: 100%;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-button4 {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button4:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home-text27:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home-container19 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: none;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-button5 {
            align-self: center;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button5:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .home-banner1 {
            width: 85%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text33 {
            width: 1200px;
            font-size: 3rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home-text34 {
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-gallery {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-unit);
            max-width: auto;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-gallery-card {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-button6 {
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button6:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .home-gallery-card1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-button7 {
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button7:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .home-hero-type-1 {
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
          .home-container21 {
            width: 800px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text37 {
            color: var(--dl-color-colors-cream);
            font-size: 3rem;
            max-width: 900px;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home-textinput {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-textinput2 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container22 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-container23 {
            flex: 0 0 auto;
            width: auto;
            height: 300px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-textarea {
            width: 800px;
            height: 300px;
          }
          .home-button8 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button8:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 800px;
            height: 700px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text38 {
            color: var(--dl-color-colors-cream);
            font-size: 2rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home-container25 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-text39 {
            color: var(--dl-color-colors-cream);
            font-size: 1.2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-fiveunits);
            font-family: Merriweather;
            font-weight: 400;
          }
          .home-text43 {
            color: var(--dl-color-colors-cream);
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-fiveunits);
            font-family: Merriweather;
            font-weight: 400;
            margin-left: var(--dl-space-space-sixunits);
          }
          .home-image4 {
            width: var(--dl-size-size-xxlarge);
            align-self: flex-end;
            margin-top: 200px;
            object-fit: cover;
          }
          .home-hero-type-11 {
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
          .home-text47 {
            color: var(--dl-color-colors-cream);
            font-size: 2.4em;
            font-style: italic;
            text-align: center;
            font-family: Merriweather;
            font-weight: 400;
          }
          @media (max-width: 1600px) {
            .home-nav {
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
            }
            .home-container03 {
              width: 95%;
              justify-content: space-between;
            }
            .home-text01 {
              font-size: 1.8rem;
            }
            .home-container05 {
              width: 500px;
              height: auto;
            }
            .home-container06 {
              align-items: flex-end;
            }
            .home-container07 {
              width: 95%;
              justify-content: space-between;
            }
            .home-text05 {
              font-size: 1.8rem;
            }
            .home-container09 {
              width: 500px;
              height: auto;
            }
            .home-container10 {
              align-items: flex-end;
            }
            .home-container11 {
              width: 95%;
              justify-content: space-between;
            }
            .home-text09 {
              font-size: 1.8rem;
            }
            .home-container13 {
              width: 500px;
              height: auto;
            }
            .home-container14 {
              align-items: flex-end;
            }
            .home-container15 {
              width: 95%;
              justify-content: space-between;
            }
            .home-text13 {
              font-size: 1.7rem;
            }
            .home-container17 {
              width: 500px;
              height: auto;
            }
            .home-container18 {
              align-items: flex-end;
            }
            .home-hero-type-1 {
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
            .home-container21 {
              width: 500px;
              height: 500px;
            }
            .home-text37 {
              color: var(--dl-color-colors-cream);
            }
            .home-textinput {
              width: 335px;
              margin-top: var(--dl-space-space-twounits);
              border-width: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-textinput1 {
              width: 335px;
              border-width: 0px;
            }
            .home-textinput2 {
              width: 335px;
              margin-top: var(--dl-space-space-twounits);
              border-width: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-container23 {
              height: auto;
            }
            .home-textarea {
              width: 335px;
              height: 150px;
              border-width: 0px;
            }
            .home-container24 {
              width: 500px;
              height: 500px;
              padding: var(--dl-space-space-twounits);
              align-self: center;
              align-items: center;
              border-radius: 10px;
              background-color: var(--dl-color-colors-red);
            }
            .home-text38 {
              color: var(--dl-color-colors-cream);
              font-size: 2rem;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text39 {
              color: var(--dl-color-colors-cream);
              font-size: 1.2rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-fourunits);
              font-family: Merriweather;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-text43 {
              color: var(--dl-color-colors-cream);
              font-size: 1.2rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-fourunits);
              text-align: left;
              font-family: Merriweather;
              font-weight: 400;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-image4 {
              width: 225px;
              margin-top: 10px;
            }
            .home-hero-type-11 {
              width: 92%;
              padding: 0px;
              max-width: auto;
              min-height: auto;
              border-radius: 10px;
              justify-content: center;
            }
          }
          @media (max-width: 1500px) {
            .home-nav {
              padding-left: 38px;
              padding-right: 38px;
            }
            .home-container03 {
              width: 95%;
              justify-content: space-between;
            }
            .home-text01 {
              font-size: 1.8rem;
            }
            .home-text02 {
              width: 500px;
            }
            .home-container07 {
              width: 95%;
              justify-content: space-between;
            }
            .home-text05 {
              font-size: 1.8rem;
            }
            .home-text06 {
              width: 500px;
            }
            .home-container11 {
              width: 95%;
              justify-content: space-between;
            }
            .home-text09 {
              font-size: 1.8rem;
            }
            .home-text10 {
              width: 500px;
            }
            .home-container15 {
              width: 95%;
              justify-content: space-between;
            }
            .home-text13 {
              font-size: 1.7rem;
            }
            .home-text17 {
              width: 500px;
            }
            .home-hero-type-1 {
              width: 93%;
              padding: var(--dl-space-space-unit);
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              margin-top: var(--dl-space-space-unit);
              border-radius: 10px;
              justify-content: space-between;
              background-color: var(--dl-color-colors-red);
              border-bottom-width: 0px;
            }
            .home-container21 {
              width: 700px;
              align-self: flex-start;
              align-items: flex-start;
            }
            .home-text37 {
              color: var(--dl-color-colors-cream);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-textinput {
              width: 300px;
            }
            .home-textinput1 {
              width: 300px;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-textinput2 {
              width: 300px;
            }
            .home-textarea {
              width: 300px;
              height: 200px;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-button8 {
              margin-top: 160px;
            }
            .home-container24 {
              width: 500px;
              height: 500px;
              padding: var(--dl-space-space-twounits);
              align-items: flex-start;
              border-radius: 10px;
              justify-content: center;
            }
            .home-text38 {
              color: var(--dl-color-colors-cream);
              font-size: 1.8rem;
              font-style: normal;
              margin-top: var(--dl-space-space-threeunits);
              font-family: Merriweather;
              font-weight: 700;
            }
            .home-container25 {
              align-items: center;
              flex-direction: row;
              justify-content: flex-start;
            }
            .home-text39 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              font-style: normal;
              margin-top: var(--dl-space-space-fiveunits);
              font-family: Merriweather;
              font-weight: 400;
            }
            .home-text43 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              font-style: normal;
              margin-top: var(--dl-space-space-fiveunits);
              font-family: Merriweather;
              font-weight: 400;
              margin-left: var(--dl-space-space-unit);
            }
            .home-hero-type-11 {
              width: 95%;
              padding: 0px;
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-text47 {
              width: 100%;
            }
          }
          @media (max-width: 1000px) {
            .home-nav {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container03 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-text01 {
              font-size: 1.8rem;
            }
            .home-container05 {
              width: 500px;
            }
            .home-container06 {
              align-items: flex-end;
            }
            .home-container07 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-text05 {
              font-size: 1.8rem;
            }
            .home-container09 {
              width: 500px;
            }
            .home-container10 {
              align-items: flex-end;
            }
            .home-container11 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-text09 {
              font-size: 1.8rem;
            }
            .home-container13 {
              width: 500px;
            }
            .home-container14 {
              align-items: flex-end;
            }
            .home-container15 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-text13 {
              font-size: 1.7rem;
            }
            .home-container17 {
              width: 500px;
            }
            .home-container18 {
              align-items: flex-end;
            }
            .home-text33 {
              width: 850px;
            }
            .home-text34 {
              max-width: auto;
              margin-bottom: 0px;
            }
            .home-hero-type-1 {
              width: 98%;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: row;
              justify-content: space-between;
            }
            .home-container21 {
              align-items: flex-start;
              margin-right: var(--dl-space-space-twounits);
              margin-bottom: 70px;
              padding-right: 0px;
            }
            .home-textinput {
              width: 350px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-textinput1 {
              width: 350px;
            }
            .home-textinput2 {
              width: 350px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-textarea {
              width: 350px;
            }
            .home-container24 {
              width: 300px;
              align-self: center;
              align-items: flex-start;
              padding-top: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .home-text38 {
              color: var(--dl-color-colors-cream);
              font-size: 1.5rem;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
            }
            .home-container25 {
              flex-direction: column;
            }
            .home-text39 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-family: Merriweather;
              font-weight: 400;
            }
            .home-text43 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-family: Merriweather;
              font-weight: 400;
              margin-left: 0px;
            }
            .home-image4 {
              width: 125px;
            }
            .home-hero-type-11 {
              width: 98%;
            }
            .home-text47 {
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .home-gallery {
              grid-template-columns: 1fr 1fr;
            }
            .home-hero-type-1 {
              flex-direction: column;
            }
            .home-container21 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text37 {
              text-align: center;
            }
            .home-hero-type-11 {
              flex-direction: column;
            }
          }
          @media (max-width: 800px) {
            .home-nav {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav1 {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-icon {
              fill: var(--dl-color-colors-red);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-mobile-menu {
              display: flex;
              background-color: var(--dl-color-colors-cream);
            }
            .home-nav2 {
              align-items: flex-start;
            }
            .home-image1 {
              height: 6rem;
            }
            .home-icon2 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-banner {
              padding: var(--dl-space-space-oneandhalfunits);
              border-color: var(--dl-color-colors-black);
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-text {
              align-self: flex-start;
            }
            .home-container03 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .home-container04 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-text01 {
              font-size: 1.8rem;
            }
            .home-container05 {
              width: auto;
            }
            .home-text02 {
              width: 300px;
            }
            .home-container06 {
              width: auto;
              align-items: flex-start;
            }
            .home-container07 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .home-container08 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-text05 {
              font-size: 1.8rem;
            }
            .home-container09 {
              width: auto;
            }
            .home-text06 {
              width: 300px;
            }
            .home-container10 {
              width: auto;
              align-items: flex-start;
            }
            .home-container11 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .home-container12 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-text09 {
              font-size: 1.8rem;
            }
            .home-container13 {
              width: auto;
            }
            .home-text10 {
              width: 300px;
            }
            .home-container14 {
              width: auto;
              align-items: flex-start;
            }
            .home-container15 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .home-container16 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-text13 {
              font-size: 1.7rem;
            }
            .home-container17 {
              width: auto;
            }
            .home-text17 {
              width: 300px;
            }
            .home-container18 {
              width: auto;
              align-items: flex-start;
            }
            .home-button4 {
              align-self: flex-end;
            }
            .home-text33 {
              width: 100%;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 400;
            }
            .home-hero-type-1 {
              width: 750px;
              padding: var(--dl-space-space-unit);
            }
            .home-container21 {
              width: 500px;
            }
            .home-text37 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
            }
            .home-textinput {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-textinput2 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-textarea {
              height: 150px;
            }
            .home-button8 {
              font-size: 0.7rem;
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .home-container24 {
              width: 250px;
            }
            .home-text38 {
              color: var(--dl-color-colors-cream);
              font-size: 1em;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
            }
            .home-text39 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              align-self: flex-start;
              margin-top: var(--dl-space-space-threeunits);
              font-family: Merriweather;
            }
            .home-text43 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 400;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-image4 {
              width: 100px;
              align-self: flex-end;
            }
            .home-hero-type-11 {
              width: 95%;
              padding: var(--dl-space-space-unit);
              margin-top: 0px;
              border-width: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              background-color: var(--dl-color-colors-red);
            }
            .home-text47 {
              color: var(--dl-color-colors-cream);
              font-size: 1.8em;
              font-style: italic;
              font-family: Merriweather;
              font-weight: 400;
            }
          }
          @media (max-width: 767px) {
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text34 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-gallery-card {
              flex-direction: column;
            }
            .home-gallery-card1 {
              flex-direction: column;
            }
            .home-hero-type-1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-type-11 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 500px) {
            .home-nav {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-banner {
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
            .home-text {
              font-size: 1.2rem;
              align-self: center;
              text-align: left;
            }
            .home-container02 {
              width: 500px;
              height: auto;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-container03 {
              margin-top: var(--dl-space-space-halfunit);
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .home-container04 {
              width: auto;
              height: auto;
            }
            .home-text01 {
              font-size: 0.8em;
            }
            .home-container05 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .home-text02 {
              width: 250px;
              font-size: 0.7rem;
              align-self: flex-start;
            }
            .home-container06 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-button {
              font-size: 0.5rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container07 {
              margin: 0px;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .home-container08 {
              width: auto;
              height: auto;
            }
            .home-text05 {
              font-size: 0.8em;
            }
            .home-container09 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .home-text06 {
              width: 250px;
              font-size: 0.7rem;
              align-self: flex-start;
              text-align: left;
            }
            .home-container10 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-button1 {
              font-size: 0.5rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container11 {
              margin-top: var(--dl-space-space-halfunit);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .home-container12 {
              width: auto;
              height: auto;
            }
            .home-text09 {
              font-size: 0.8em;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container13 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .home-text10 {
              width: 215px;
              font-size: 0.7rem;
              align-self: flex-start;
            }
            .home-container14 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-button2 {
              font-size: 0.5rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              margin-left: 30px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container15 {
              margin-top: var(--dl-space-space-halfunit);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .home-container16 {
              width: auto;
              height: auto;
            }
            .home-text13 {
              font-size: 0.8em;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-container17 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .home-text17 {
              width: 215px;
              font-size: 0.7rem;
              align-self: flex-start;
            }
            .home-container18 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-button3 {
              font-size: 0.5rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              margin-left: 36px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-button4 {
              font-size: 0.6rem;
              align-self: flex-end;
              font-family: Merriweather;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text26 {
              font-size: 1rem;
              font-style: normal;
              font-weight: 600;
            }
            .home-text27 {
              align-self: flex-end;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-container19 {
              width: 500px;
              justify-content: space-between;
            }
            .home-container20 {
              width: auto;
              height: auto;
              align-self: center;
              margin-left: 40px;
            }
            .home-ul {
              padding: 0px;
              align-self: center;
              list-style-type: square;
            }
            .home-li {
              font-family: Merriweather;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text29 {
              font-size: 1rem;
            }
            .home-li1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text30 {
              font-size: 1rem;
              font-family: Merriweather;
            }
            .home-list-item {
              font-family: Merriweather;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text31 {
              font-size: 1rem;
            }
            .home-text32 {
              font-size: 1rem;
              font-family: Merriweather;
            }
            .home-button5 {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text33 {
              width: 450px;
              font-size: 1.2rem;
              text-align: center;
            }
            .home-text34 {
              text-align: center;
            }
            .home-gallery {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-button6 {
              font-size: 0.8rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              text-align: center;
            }
            .home-button7 {
              font-size: 0.8rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              text-align: center;
            }
            .home-hero-type-1 {
              width: 475px;
              max-width: auto;
              align-self: center;
              min-height: auto;
              align-items: flex-start;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: row;
              justify-content: flex-start;
            }
            .home-container21 {
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
            .home-text37 {
              font-size: 1.5rem;
              max-width: 200px;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-textinput {
              width: 200px;
              font-size: 0.5rem;
              font-family: Merriweather;
            }
            .home-textinput1 {
              width: 200px;
              font-size: 0.5rem;
              margin-top: var(--dl-space-space-halfunit);
              font-family: Merriweather;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-textinput2 {
              width: 200px;
              font-size: 0.5rem;
              font-family: Merriweather;
            }
            .home-container23 {
              flex-direction: column;
            }
            .home-textarea {
              width: 200px;
              height: 70px;
              font-size: 0.5rem;
              align-self: flex-start;
              margin-top: var(--dl-space-space-halfunit);
              font-family: Merriweather;
            }
            .home-button8 {
              font-size: 0.7rem;
              align-self: flex-start;
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container24 {
              width: 175px;
            }
            .home-text38 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              font-style: normal;
              text-align: left;
              font-family: Merriweather;
              font-weight: 700;
            }
            .home-text39 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              margin-top: 0px;
            }
            .home-text43 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              font-style: normal;
              margin-top: var(--dl-space-space-threeunits);
              font-family: Merriweather;
              font-weight: 400;
              padding-top: 0px;
            }
            .home-hero-type-11 {
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
            .home-text47 {
              color: var(--dl-color-colors-cream);
              width: auto;
              font-size: 1.2rem;
            }
          }
          @media (max-width: 479px) {
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-gallery {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image2 {
              height: 10rem;
            }
            .home-image3 {
              height: 10rem;
            }
            .home-hero-type-1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container21 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero-type-11 {
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

export default Home
