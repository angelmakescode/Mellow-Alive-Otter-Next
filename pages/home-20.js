import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import HeroType1 from '../components/hero-type-1'
import Banner from '../components/banner'
import AwardSection from '../components/award-section'
import GalleryCard11 from '../components/gallery-card11'

const Home20 = (props) => {
  return (
    <>
      <div className="home20-container">
        <Head>
          <title>Home-20 - Mellow Alive Otter</title>
          <meta property="og:title" content="Home-20 - Mellow Alive Otter" />
        </Head>
        <header data-role="Header" className="home20-nav">
          <img
            alt="logo"
            src="https://i.imgur.com/mseZpUy.png"
            className="home20-image"
          />
          <div className="home20-nav1">
            <NavigationLinks rootClassName="rootClassName8"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="home20-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home20-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home20-mobile-menu">
            <div className="home20-nav2">
              <div className="home20-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home20-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="home20-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home20-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName9"></NavigationLinks>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home20-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home20-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home20-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <HeroType1
          image_src="https://i.imgur.com/hVNACXi.png"
          rootClassName="hero-type1-root-class-name1"
        ></HeroType1>
        <Banner rootClassName="banner-root-class-name"></Banner>
        <AwardSection></AwardSection>
        <div className="home20-banner">
          <h1 className="home20-text"> our services</h1>
        </div>
        <div className="home20-container02">
          <div className="home20-container03">
            <h1 className="home20-text01">1. residential</h1>
          </div>
          <div className="home20-container04">
            <span className="home20-text02">
              <span>
                Transform your living space into a haven of style and comfort
                with our exceptional residential interior design services.
              </span>
              <span></span>
            </span>
          </div>
          <div className="home20-container05">
            <button className="home20-button button">
              <span>
                <span className="home20-text06">get consult</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <div className="home20-container06">
          <div className="home20-container07">
            <h1 className="home20-text08">2. commercial</h1>
          </div>
          <div className="home20-container08">
            <span className="home20-text09">
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
          <div className="home20-container09">
            <button className="home20-button1 button">
              <span>
                <span className="home20-text13">get consult</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <div className="home20-container10">
          <div className="home20-container11">
            <h1 className="home20-text15">3. staging</h1>
          </div>
          <div className="home20-container12">
            <span className="home20-text16">
              <span>
                We understand the power of first impressions when it comes to
                selling a property. Prepare to showcase your home&apos;s true
                potential with our expert home staging interior design services.
              </span>
              <span></span>
            </span>
          </div>
          <div className="home20-container13">
            <button className="home20-button2 button">
              <span>
                <span className="home20-text20">get consult</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <div className="home20-container14">
          <div className="home20-container15">
            <h1 className="home20-text22">
              <span>4.3D</span>
              <br></br>
              <span>rendering</span>
            </h1>
          </div>
          <div className="home20-container16">
            <span className="home20-text26">
              <span>
                Experience the power of immersive visualizations with our
                cutting-edge 3D rendering interior design services.
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home20-container17">
            <button className="home20-button3 button">
              <span>
                <span className="home20-text31">get consult</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <div className="home20-hero">
          <span className="home20-text33">about us:</span>
          <h1 className="home20-text34">
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
          <button className="home20-button4 button">
            <span className="home20-text38">
              <span className="home20-text39">get consult</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="home20-banner1">
          <h1 className="home20-text41">Our Recent Projects</h1>
          <span className="home20-text42">
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
        <div className="home20-gallery">
          <div className="home20-gallery-card">
            <img
              alt="image"
              src="https://i.imgur.com/M64SMGk.png"
              className="home20-image2"
            />
            <button className="home20-button5 button">start a project</button>
          </div>
          <GalleryCard11
            image_src="https://i.imgur.com/124k90Z.png"
            rootClassName="rootClassName1"
          ></GalleryCard11>
          <div className="home20-gallery-card1">
            <img
              alt="image"
              src="https://i.imgur.com/Wq4LOIV.png"
              className="home20-image3"
            />
            <button className="home20-button6 button">start a project</button>
          </div>
        </div>
        <div className="home20-hero-type-1">
          <div className="home20-container18">
            <h1 className="home20-text45">Get in touch.</h1>
            <input
              type="text"
              placeholder="Name"
              className="home20-textinput input"
            />
            <input
              type="text"
              placeholder="Number"
              className="input home20-textinput1"
            />
            <input
              type="text"
              placeholder="Email"
              className="home20-textinput2 input"
            />
            <div className="home20-container19">
              <div className="home20-container20">
                <textarea
                  placeholder="Message"
                  className="home20-textarea textarea"
                ></textarea>
              </div>
              <button className="home20-button7 button">
                <span>
                  <span className="home20-text47">send</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="home20-container21">
            <h1 className="home20-text49">Contact Info</h1>
            <div className="home20-container22">
              <span className="home20-text50">
                <span>Email:</span>
                <br></br>
                <span>emailaddress@email.com</span>
              </span>
              <span className="home20-text54">
                <span>Phone:</span>
                <br></br>
                <span>(123)456-789</span>
              </span>
            </div>
            <img
              src="https://i.imgur.com/mseZpUy.png"
              alt="image"
              className="home20-image4"
            />
          </div>
        </div>
        <div className="home20-hero-type-11">
          <h1 className="home20-text58">
            “the heart of design lies in understanding the needs and desires of
            the people who inhabit a space.”
          </h1>
        </div>
      </div>
      <style jsx>
        {`
          .home20-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home20-nav {
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
          .home20-image {
            height: 8rem;
          }
          .home20-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home20-burger-menu {
            display: none;
          }
          .home20-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .home20-mobile-menu {
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
          .home20-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home20-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home20-image1 {
            height: 2rem;
          }
          .home20-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home20-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home20-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home20-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home20-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home20-banner {
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
          .home20-text {
            font-size: 3rem;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home20-container02 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home20-container03 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home20-text01 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home20-container04 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home20-text02 {
            width: 550px;
          }
          .home20-container05 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home20-button {
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home20-button:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-text06:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-container06 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home20-container07 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home20-text08 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home20-container08 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home20-text09 {
            width: 550px;
          }
          .home20-container09 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home20-button1 {
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home20-button1:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-text13:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-container10 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home20-container11 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home20-text15 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home20-container12 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home20-text16 {
            width: 550px;
          }
          .home20-container13 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home20-button2 {
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home20-button2:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-text20:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-container14 {
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
          .home20-container15 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home20-text22 {
            font-size: 1.7rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home20-container16 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home20-text26 {
            width: 550px;
          }
          .home20-container17 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .home20-button3 {
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home20-button3:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-text31:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-hero {
            width: 95%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            box-shadow: 5px 5px 10px 0px #ad9d9d;
            margin-top: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home20-text33 {
            color: var(--dl-color-colors-red);
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 900;
            letter-spacing: 2px;
          }
          .home20-text34 {
            color: var(--dl-color-colors-black);
            font-size: 1rem;
            max-width: 100%;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home20-button4 {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home20-button4:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-text39:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-banner1 {
            width: 85%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home20-text41 {
            width: 1200px;
            font-size: 3rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home20-text42 {
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home20-gallery {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-unit);
            max-width: auto;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home20-gallery-card {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home20-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home20-button5 {
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
          .home20-button5:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-gallery-card1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home20-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home20-button6 {
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
          .home20-button6:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-hero-type-1 {
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
          .home20-container18 {
            width: 800px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home20-text45 {
            color: var(--dl-color-colors-cream);
            font-size: 3rem;
            max-width: 900px;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home20-textinput {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home20-textinput2 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home20-container19 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .home20-container20 {
            flex: 0 0 auto;
            width: auto;
            height: 300px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home20-textarea {
            width: 800px;
            height: 300px;
          }
          .home20-button7 {
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
          .home20-button7:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-text47:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home20-container21 {
            flex: 0 0 auto;
            width: 800px;
            height: 700px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home20-text49 {
            color: var(--dl-color-colors-cream);
            font-size: 2rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .home20-container22 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home20-text50 {
            color: var(--dl-color-colors-cream);
            font-size: 1.2rem;
            font-style: normal;
            margin-top: var(--dl-space-space-fiveunits);
            font-family: Merriweather;
            font-weight: 400;
          }
          .home20-text54 {
            color: var(--dl-color-colors-cream);
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-fiveunits);
            font-family: Merriweather;
            font-weight: 400;
            margin-left: var(--dl-space-space-sixunits);
          }
          .home20-image4 {
            width: var(--dl-size-size-xxlarge);
            align-self: flex-end;
            margin-top: 200px;
            object-fit: cover;
          }
          .home20-hero-type-11 {
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
          .home20-text58 {
            color: var(--dl-color-colors-cream);
            font-size: 2.4em;
            font-style: italic;
            text-align: center;
            font-family: Merriweather;
            font-weight: 400;
          }
          @media (max-width: 1600px) {
            .home20-nav {
              padding-left: var(--dl-space-space-sixunits);
              padding-right: var(--dl-space-space-sixunits);
            }
            .home20-container02 {
              width: 95%;
              justify-content: space-between;
            }
            .home20-text01 {
              font-size: 1.8rem;
            }
            .home20-container04 {
              width: 500px;
              height: auto;
            }
            .home20-container05 {
              align-items: flex-end;
            }
            .home20-container06 {
              width: 95%;
              justify-content: space-between;
            }
            .home20-text08 {
              font-size: 1.8rem;
            }
            .home20-container08 {
              width: 500px;
              height: auto;
            }
            .home20-container09 {
              align-items: flex-end;
            }
            .home20-container10 {
              width: 95%;
              justify-content: space-between;
            }
            .home20-text15 {
              font-size: 1.8rem;
            }
            .home20-container12 {
              width: 500px;
              height: auto;
            }
            .home20-container13 {
              align-items: flex-end;
            }
            .home20-container14 {
              width: 95%;
              justify-content: space-between;
            }
            .home20-text22 {
              font-size: 1.7rem;
            }
            .home20-container16 {
              width: 500px;
              height: auto;
            }
            .home20-container17 {
              align-items: flex-end;
            }
            .home20-hero-type-1 {
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
            .home20-container18 {
              width: 500px;
              height: 500px;
            }
            .home20-text45 {
              color: var(--dl-color-colors-cream);
            }
            .home20-textinput {
              width: 335px;
              margin-top: var(--dl-space-space-twounits);
              border-width: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home20-textinput1 {
              width: 335px;
              border-width: 0px;
            }
            .home20-textinput2 {
              width: 335px;
              margin-top: var(--dl-space-space-twounits);
              border-width: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home20-container20 {
              height: auto;
            }
            .home20-textarea {
              width: 335px;
              height: 150px;
              border-width: 0px;
              margin-right: var(--dl-space-space-unit);
            }
            .home20-button7 {
              color: var(--dl-color-colors-cream);
              align-self: flex-end;
              border-color: var(--dl-color-colors-cream);
              margin-right: 115px;
              background-color: transparent;
            }
            .home20-container21 {
              width: 500px;
              height: 500px;
              padding: var(--dl-space-space-twounits);
              align-self: center;
              align-items: center;
              border-radius: 10px;
              background-color: var(--dl-color-colors-red);
            }
            .home20-text49 {
              color: var(--dl-color-colors-cream);
              font-size: 2rem;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home20-text50 {
              color: var(--dl-color-colors-cream);
              font-size: 1.2rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-fourunits);
              font-family: Merriweather;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home20-text54 {
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
            .home20-image4 {
              width: 225px;
              margin-top: 10px;
            }
            .home20-hero-type-11 {
              width: 92%;
              padding: 0px;
              max-width: auto;
              min-height: auto;
              border-radius: 10px;
              justify-content: center;
            }
          }
          @media (max-width: 1500px) {
            .home20-container02 {
              width: 95%;
              justify-content: space-between;
            }
            .home20-text01 {
              font-size: 1.8rem;
            }
            .home20-text02 {
              width: 500px;
            }
            .home20-container06 {
              width: 95%;
              justify-content: space-between;
            }
            .home20-text08 {
              font-size: 1.8rem;
            }
            .home20-text09 {
              width: 500px;
            }
            .home20-container10 {
              width: 95%;
              justify-content: space-between;
            }
            .home20-text15 {
              font-size: 1.8rem;
            }
            .home20-text16 {
              width: 500px;
            }
            .home20-container14 {
              width: 95%;
              justify-content: space-between;
            }
            .home20-text22 {
              font-size: 1.7rem;
            }
            .home20-text26 {
              width: 500px;
            }
            .home20-hero-type-1 {
              width: 93%;
              padding: var(--dl-space-space-unit);
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              margin-top: var(--dl-space-space-unit);
              border-radius: 10px;
              justify-content: space-between;
              background-color: var(--dl-color-colors-red);
              border-bottom-width: 0px;
            }
            .home20-container18 {
              width: 700px;
              align-items: flex-start;
            }
            .home20-text45 {
              color: var(--dl-color-colors-cream);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home20-textinput {
              width: 300px;
            }
            .home20-textinput1 {
              width: 300px;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home20-textinput2 {
              width: 300px;
            }
            .home20-textarea {
              width: 500px;
              height: 300px;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home20-button7 {
              color: var(--dl-color-colors-cream);
              font-size: 2rem;
              align-self: flex-end;
              margin-top: 0px;
              margin-left: var(--dl-space-space-oneandhalfunits);
              background-color: transparent;
            }
            .home20-container21 {
              width: 500px;
              height: 500px;
              padding: var(--dl-space-space-twounits);
              align-items: flex-start;
              border-radius: 10px;
            }
            .home20-text49 {
              color: var(--dl-color-colors-cream);
              font-size: 1.8rem;
              font-style: normal;
              margin-top: var(--dl-space-space-threeunits);
              font-family: Merriweather;
              font-weight: 700;
            }
            .home20-text50 {
              color: var(--dl-color-colors-cream);
              font-size: 1.5rem;
              font-style: normal;
              margin-top: var(--dl-space-space-fiveunits);
              font-family: Merriweather;
              font-weight: 400;
            }
            .home20-text54 {
              color: var(--dl-color-colors-cream);
              font-size: 1.5rem;
              font-style: normal;
              margin-top: 100px;
              font-family: Merriweather;
              font-weight: 400;
            }
            .home20-hero-type-11 {
              width: 95%;
              padding: 0px;
              margin-top: var(--dl-space-space-fourunits);
            }
            .home20-text58 {
              width: 100%;
            }
          }
          @media (max-width: 1000px) {
            .home20-nav {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home20-container02 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home20-text01 {
              font-size: 1.8rem;
            }
            .home20-container04 {
              width: 500px;
            }
            .home20-container05 {
              align-items: flex-end;
            }
            .home20-container06 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home20-text08 {
              font-size: 1.8rem;
            }
            .home20-container08 {
              width: 500px;
            }
            .home20-container09 {
              align-items: flex-end;
            }
            .home20-container10 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home20-text15 {
              font-size: 1.8rem;
            }
            .home20-container12 {
              width: 500px;
            }
            .home20-container13 {
              align-items: flex-end;
            }
            .home20-container14 {
              width: 95%;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home20-text22 {
              font-size: 1.7rem;
            }
            .home20-container16 {
              width: 500px;
            }
            .home20-container17 {
              align-items: flex-end;
            }
            .home20-text41 {
              width: 850px;
            }
            .home20-text42 {
              max-width: auto;
              margin-bottom: 0px;
            }
            .home20-hero-type-1 {
              width: 98%;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: row;
              justify-content: space-between;
            }
            .home20-container18 {
              align-items: flex-start;
              margin-right: var(--dl-space-space-twounits);
              margin-bottom: 70px;
              padding-right: 0px;
            }
            .home20-textinput {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home20-textinput1 {
              width: 350px;
            }
            .home20-textinput2 {
              width: 350px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home20-textarea {
              width: 350px;
            }
            .home20-button7 {
              align-self: flex-start;
              font-family: Merriweather;
            }
            .home20-text47 {
              align-self: flex-end;
            }
            .home20-text49 {
              color: var(--dl-color-colors-cream);
              font-size: 1.5rem;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
            }
            .home20-text50 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-family: Merriweather;
              font-weight: 400;
            }
            .home20-text54 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              align-self: flex-start;
              font-style: normal;
              margin-top: var(--dl-space-space-twounits);
              font-family: Merriweather;
              font-weight: 400;
            }
            .home20-hero-type-11 {
              width: 98%;
            }
            .home20-text58 {
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .home20-gallery {
              grid-template-columns: 1fr 1fr;
            }
            .home20-hero-type-1 {
              flex-direction: column;
            }
            .home20-container18 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home20-text45 {
              text-align: center;
            }
            .home20-hero-type-11 {
              flex-direction: column;
            }
          }
          @media (max-width: 800px) {
            .home20-nav {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home20-nav1 {
              display: none;
            }
            .home20-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home20-icon {
              fill: var(--dl-color-colors-red);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home20-banner {
              padding: var(--dl-space-space-oneandhalfunits);
              border-color: var(--dl-color-colors-black);
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home20-text {
              align-self: flex-start;
            }
            .home20-container02 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .home20-container03 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home20-text01 {
              font-size: 1.8rem;
            }
            .home20-container04 {
              width: auto;
            }
            .home20-text02 {
              width: 300px;
            }
            .home20-container05 {
              width: auto;
              align-items: flex-start;
            }
            .home20-button {
              align-self: flex-start;
            }
            .home20-container06 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .home20-container07 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home20-text08 {
              font-size: 1.8rem;
            }
            .home20-container08 {
              width: auto;
            }
            .home20-text09 {
              width: 300px;
            }
            .home20-container09 {
              width: auto;
              align-items: flex-start;
            }
            .home20-button1 {
              align-self: flex-start;
            }
            .home20-container10 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .home20-container11 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home20-text15 {
              font-size: 1.8rem;
            }
            .home20-container12 {
              width: auto;
            }
            .home20-text16 {
              width: 300px;
            }
            .home20-container13 {
              width: auto;
              align-items: flex-start;
            }
            .home20-button2 {
              align-self: flex-start;
            }
            .home20-container14 {
              width: 95%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .home20-container15 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home20-text22 {
              font-size: 1.7rem;
            }
            .home20-container16 {
              width: auto;
            }
            .home20-text26 {
              width: 300px;
            }
            .home20-container17 {
              width: auto;
              align-items: flex-start;
            }
            .home20-button3 {
              align-self: flex-start;
            }
            .home20-button4 {
              align-self: flex-end;
            }
            .home20-text41 {
              width: 100%;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 400;
            }
            .home20-hero-type-1 {
              width: auto;
              padding: var(--dl-space-space-unit);
            }
            .home20-text45 {
              font-size: 1.5rem;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
            }
            .home20-textinput {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home20-textinput2 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home20-text49 {
              color: var(--dl-color-colors-cream);
              font-size: 1em;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
            }
            .home20-text50 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              align-self: flex-start;
              margin-top: var(--dl-space-space-threeunits);
              font-family: Merriweather;
            }
            .home20-text54 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              align-self: flex-start;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 400;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home20-hero-type-11 {
              width: 95%;
              padding: var(--dl-space-space-unit);
              border-width: 0px;
              background-color: var(--dl-color-colors-red);
            }
            .home20-text58 {
              color: var(--dl-color-colors-cream);
              font-size: 1.8em;
              font-style: italic;
              font-family: Merriweather;
              font-weight: 400;
            }
          }
          @media (max-width: 767px) {
            .home20-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home20-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home20-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home20-text42 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home20-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home20-gallery-card {
              flex-direction: column;
            }
            .home20-gallery-card1 {
              flex-direction: column;
            }
            .home20-hero-type-1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home20-hero-type-11 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 500px) {
            .home20-nav {
              padding: var(--dl-space-space-unit);
            }
            .home20-mobile-menu {
              padding: 16px;
            }
            .home20-banner {
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
            .home20-text {
              font-size: 1.2rem;
              align-self: flex-start;
              text-align: left;
            }
            .home20-container02 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .home20-container03 {
              width: auto;
              height: auto;
            }
            .home20-text01 {
              font-size: 1em;
            }
            .home20-container04 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .home20-text02 {
              width: 250px;
              font-size: 0.7rem;
            }
            .home20-container05 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .home20-button {
              font-size: 0.6rem;
              align-self: flex-end;
              font-family: Merriweather;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home20-text06 {
              align-self: flex-end;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home20-container06 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .home20-container07 {
              width: auto;
              height: auto;
            }
            .home20-text08 {
              font-size: 1em;
            }
            .home20-container08 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .home20-text09 {
              width: 250px;
              font-size: 0.7rem;
              text-align: left;
            }
            .home20-container09 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .home20-button1 {
              font-size: 0.6rem;
              align-self: flex-end;
              font-family: Merriweather;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home20-text13 {
              align-self: flex-end;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home20-container10 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .home20-container11 {
              width: auto;
              height: auto;
            }
            .home20-text15 {
              font-size: 1em;
            }
            .home20-container12 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .home20-text16 {
              width: 215px;
              font-size: 0.7rem;
            }
            .home20-container13 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .home20-button2 {
              font-size: 0.6rem;
              align-self: flex-end;
              font-family: Merriweather;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home20-text20 {
              align-self: flex-end;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home20-container14 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              justify-content: space-between;
            }
            .home20-container15 {
              width: auto;
              height: auto;
            }
            .home20-text22 {
              font-size: 1em;
            }
            .home20-container16 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
            }
            .home20-text26 {
              width: 215px;
              font-size: 0.7rem;
            }
            .home20-container17 {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-halfunit);
            }
            .home20-button3 {
              font-size: 0.6rem;
              align-self: flex-end;
              font-family: Merriweather;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home20-text31 {
              align-self: flex-end;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home20-button4 {
              font-size: 0.6rem;
              align-self: flex-end;
              font-family: Merriweather;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home20-text38 {
              font-size: 1rem;
              font-style: normal;
              font-weight: 600;
            }
            .home20-text39 {
              align-self: flex-end;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home20-banner1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home20-text41 {
              width: 450px;
              font-size: 1.2rem;
              text-align: center;
            }
            .home20-text42 {
              text-align: center;
            }
            .home20-gallery {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home20-button5 {
              font-size: 0.8rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              font-style: normal;
              text-align: center;
              font-weight: 400;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home20-button6 {
              font-size: 0.8rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              font-style: normal;
              text-align: center;
              font-weight: 400;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home20-hero-type-1 {
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
            .home20-container18 {
              flex: 1;
              width: 250px;
              align-self: center;
              margin-right: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home20-text45 {
              font-size: 1.5rem;
              max-width: 200px;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home20-textinput {
              width: 200px;
              font-size: 0.5rem;
              font-family: Merriweather;
            }
            .home20-textinput1 {
              width: 200px;
              font-size: 0.5rem;
              margin-top: var(--dl-space-space-halfunit);
              font-family: Merriweather;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home20-textinput2 {
              width: 200px;
              font-size: 0.5rem;
              font-family: Merriweather;
            }
            .home20-textarea {
              width: 200px;
              height: 70px;
              font-size: 0.5rem;
              align-self: flex-start;
              margin-top: var(--dl-space-space-halfunit);
              font-family: Merriweather;
            }
            .home20-button7 {
              font-size: 0.8rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              font-style: normal;
              text-align: center;
              font-weight: 400;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home20-text47 {
              font-size: 0.8rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
              font-style: normal;
              text-align: center;
              font-weight: 400;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home20-text49 {
              color: var(--dl-color-colors-cream);
              font-size: 1rem;
              font-style: normal;
              text-align: left;
              font-family: Merriweather;
              font-weight: 700;
            }
            .home20-text50 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              margin-top: var(--dl-space-space-threeunits);
            }
            .home20-text54 {
              color: var(--dl-color-colors-cream);
              font-size: 0.8rem;
              font-style: normal;
              margin-top: var(--dl-space-space-threeunits);
              font-family: Merriweather;
              font-weight: 400;
              padding-top: 0px;
            }
            .home20-hero-type-11 {
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
            .home20-text58 {
              color: var(--dl-color-colors-cream);
              width: auto;
              font-size: 1.2rem;
            }
          }
          @media (max-width: 479px) {
            .home20-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home20-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home20-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home20-gallery {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home20-image2 {
              height: 10rem;
            }
            .home20-image3 {
              height: 10rem;
            }
            .home20-hero-type-1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home20-container18 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home20-hero-type-11 {
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

export default Home20
