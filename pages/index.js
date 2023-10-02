import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import GalleryCard1 from '../components/gallery-card1'
import ContactCard from '../components/contact-card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Mellow Alive Otter</title>
          <meta property="og:title" content="Mellow Alive Otter" />
        </Head>
        <header data-role="Header" className="home-navbar">
          <img
            alt="logo"
            src="https://i.imgur.com/mseZpUy.png"
            className="home-image"
          />
          <div className="home-nav">
            <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav1">
              <div className="home-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero">
          <div className="home-container02">
            <h1 className="home-text">
              Extraordinary design-with real people in mind.
            </h1>
            <span className="home-text01">
              <span>
                Kindred Studios- where exceptional design meets the art of
                transformation. We believe that your home should be a
                sanctuary—a space that reflects your unique personality,
                inspires your daily life, and nurtures your well-being. With a
                passion for creating captivating interiors, we specialize in
                crafting spaces that harmonize style, functionality, and
                timeless beauty. Whether you seek a serene oasis, an
                invigorating workspace, or a gathering place that fosters
                connection, our talented team of designers is dedicated to
                bringing your vision to life
              </span>
              <span>
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
            <div className="home-btn-container">
              <button className="home-button button">start a project</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/hVNACXi.png"
            className="home-image2"
          />
        </div>
        <div className="home-banner">
          <h1 className="home-text05">
            {' '}
            Our dedicated team takes the time to really listen, observe, and
            engage with our clients.
          </h1>
          <span className="home-text06">
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
        <div className="home-stats">
          <div className="home-container03">
            <div className="home-pricing-card">
              <span className="home-text09">300+</span>
              <div className="home-container04">
                <span className="home-text10">
                  <span>COMPLETED</span>
                  <br className="home-text12"></br>
                  <br></br>
                  <span>PROJECTS</span>
                </span>
              </div>
            </div>
            <div className="home-pricing-card1">
              <span className="home-text15">12</span>
              <div className="home-container05">
                <span className="home-text16">
                  <span>YEARS OF</span>
                  <br className="home-text18"></br>
                  <br></br>
                  <span>EXPERIENCE</span>
                </span>
              </div>
            </div>
            <div className="home-pricing-card2">
              <span className="home-text21">100+</span>
              <div className="home-container06">
                <span className="home-text22">AWARDS WON</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-service-1">
          <div className="home-stat">
            <h1 className="home-text23">our services</h1>
          </div>
        </div>
        <div className="home-container07">
          <div className="home-service-11">
            <div className="home-stat01">
              <h1 className="home-text24">1. residential</h1>
            </div>
            <div className="home-stat02">
              <h1 className="home-text25">
                Transform your living space into a haven of style and comfort
                with our exceptional residential interior design services.
              </h1>
            </div>
            <div className="home-stat03">
              <button className="home-button1 button">book consult</button>
            </div>
          </div>
          <div className="home-service-2">
            <div className="home-stat04">
              <h1 className="home-text26">2. commercial</h1>
            </div>
            <div className="home-stat05">
              <h1 className="home-text27">
                With a focus on functionality, aesthetics, and creating a
                memorable customer experience, we bring your commercial space to
                life with impeccable attention to detail. Witness the
                transformative power of exceptional design that enhances your
                business&apos;s success and sets you apart from the competition.
              </h1>
            </div>
            <div className="home-stat06">
              <button className="home-button2 button">
                <span>
                  <span className="home-text29">book consult</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="home-service-3">
            <div className="home-stat07">
              <h1 className="home-text31">3. staging</h1>
            </div>
            <div className="home-stat08">
              <h1 className="home-text32">
                We understand the power of first impressions when it comes to
                selling a property. Prepare to showcase your home&apos;s true
                potential with our expert home staging interior design services.
              </h1>
            </div>
            <div className="home-stat09">
              <button className="home-button3 button">book consult</button>
            </div>
          </div>
          <div className="home-service-4">
            <div className="home-stat10">
              <h1 className="home-text33">4. 3D rendering</h1>
            </div>
            <div className="home-stat11">
              <h1 className="home-text34">
                Experience the power of immersive visualizations with our
                cutting-edge 3D rendering interior design services.
              </h1>
            </div>
            <div className="home-stat12">
              <button className="home-button4 button">book consult</button>
            </div>
          </div>
        </div>
        <div className="home-hero1">
          <div className="home-container08">
            <h1 className="home-text35">about us.</h1>
            <span className="home-text36">
              <span>
                From concept to completion, we collaborate closely with you,
                infusing each project with our expertise, creativity, and
                unwavering attention to detail. With an emphasis on personalized
                service and a commitment to exceeding expectations, we take
                pride in transforming houses into homes that evoke a sense of
                joy, comfort, and inspiration. Step into a world of limitless
                possibilities and let [Business Name] redefine your living
                experience.
              </span>
              <span>
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
          <h1 className="home-text40">
            “the heart of design lies in understanding the needs and desires of
            the people who inhabit a space.”
          </h1>
        </div>
        <div className="home-banner1">
          <h1 className="home-text41"> recent projects</h1>
          <span className="home-text42">
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
          <GalleryCard1 rootClassName="rootClassName"></GalleryCard1>
          <div className="home-gallery-card">
            <img
              alt="image"
              src="https://i.imgur.com/M64SMGk.png"
              className="home-image3"
            />
            <button className="home-button5 button">view project</button>
          </div>
          <div className="home-gallery-card1">
            <img
              alt="image"
              src="https://i.imgur.com/124k90Z.png"
              className="home-image4"
            />
            <button className="home-button6 button">view project</button>
          </div>
        </div>
        <div className="home-contact">
          <div className="home-container09">
            <ContactCard rootClassName="rootClassName3"></ContactCard>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
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
          .home-nav {
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
          .home-nav1 {
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
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: 0px;
            min-height: 40vh;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: space-between;
          }
          .home-container02 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text {
            font-size: 3rem;
            max-width: 450px;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 400;
          }
          .home-text01 {
            width: 500px;
            margin-top: var(--dl-space-space-twounits);
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-button {
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home-image2 {
            width: 600px;
            align-self: flex-end;
            object-fit: cover;
          }
          .home-banner {
            width: var(--dl-size-size-maxwidth);
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: space-between;
          }
          .home-text05 {
            font-size: 3rem;
            text-align: left;
            font-family: Merriweather;
          }
          .home-text06 {
            max-width: var(--dl-size-size-maxwidth);
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-stats {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container03 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .home-pricing-card {
            width: 100%;
            height: 350px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 250px;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-colors-red);
          }
          .home-pricing-card:hover {
            transform: scale(1.02);
          }
          .home-text09 {
            color: var(--dl-color-colors-cream);
            font-size: 3.5rem;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            font-family: Merriweather;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .home-container04 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text10 {
            color: var(--dl-color-colors-cream);
            font-size: 1.15rem;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 300;
            line-height: 1;
          }
          .home-text12 {
            font-size: 1.15rem;
            font-style: normal;
            font-weight: 300;
          }
          .home-pricing-card1 {
            width: 100%;
            height: 350px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 250px;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-colors-red);
          }
          .home-pricing-card1:hover {
            transform: scale(1.02);
          }
          .home-text15 {
            color: var(--dl-color-colors-cream);
            font-size: 3.5rem;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            font-family: Merriweather;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .home-container05 {
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .home-text16 {
            color: var(--dl-color-colors-cream);
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Merriweather;
            font-weight: 300;
            line-height: 1;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text18 {
            font-size: 1.15rem;
            font-style: normal;
            font-weight: 300;
          }
          .home-pricing-card2 {
            width: 100%;
            height: 350px;
            display: flex;
            max-width: 450px;
            min-height: 250px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-colors-red);
          }
          .home-pricing-card2:hover {
            transform: scale(1.02);
          }
          .home-text21 {
            color: var(--dl-color-colors-cream);
            font-size: 3.5rem;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            font-family: Merriweather;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .home-container06 {
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .home-text22 {
            color: var(--dl-color-colors-cream);
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Merriweather;
            font-weight: 300;
          }
          .home-service-1 {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-stat {
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text23 {
            color: rgb(0, 0, 0);
            width: 296px;
            font-size: 2.4rem;
            font-family: Merriweather;
            border-color: var(--dl-color-colors-black);
            border-width: 1px;
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: var(--dl-size-size-maxwidth);
            height: 800px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-service-11 {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-stat01 {
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text24 {
            color: #000000;
            width: 296px;
            font-size: 2.4rem;
            font-family: Merriweather;
          }
          .home-stat02 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text25 {
            color: var(--dl-color-colors-black);
            width: 455px;
            font-size: 1rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 400;
          }
          .home-stat03 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-button1 {
            width: 175px;
            font-size: 15px;
            align-self: center;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-family: Merriweather;
            font-weight: 400;
            line-height: 1;
            margin-left: 225px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button1:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home-service-2 {
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-stat04 {
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text26 {
            color: rgb(0, 0, 0);
            width: 296px;
            font-size: 2.4rem;
            font-family: Merriweather;
          }
          .home-stat05 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text27 {
            color: var(--dl-color-colors-black);
            width: 455px;
            font-size: 1rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 400;
          }
          .home-stat06 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-button2 {
            width: 175px;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-family: Merriweather;
            font-weight: 400;
            line-height: 1;
            margin-left: 225px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button2:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home-text29:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home-service-3 {
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-stat07 {
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text31 {
            color: rgb(0, 0, 0);
            width: 296px;
            font-size: 2.4rem;
            font-family: Merriweather;
          }
          .home-stat08 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text32 {
            color: var(--dl-color-colors-black);
            width: 455px;
            font-size: 1rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 400;
          }
          .home-stat09 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-button3 {
            width: 175px;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-family: Merriweather;
            font-weight: 400;
            line-height: 1;
            margin-left: 225px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button3:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home-service-4 {
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-stat10 {
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text33 {
            color: rgb(0, 0, 0);
            width: 296px;
            font-size: 2.4rem;
            font-family: Merriweather;
          }
          .home-stat11 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text34 {
            color: var(--dl-color-colors-black);
            width: 455px;
            font-size: 1rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 400;
          }
          .home-stat12 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-button4 {
            width: 175px;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-family: Merriweather;
            font-weight: 400;
            line-height: 1;
            margin-left: 225px;
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
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: 1300px;
            align-self: center;
            min-height: 50vh;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: space-between;
            background-color: var(--dl-color-colors-red);
          }
          .home-container08 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text35 {
            color: var(--dl-color-colors-cream);
            font-size: 3rem;
            max-width: 450px;
            font-family: Merriweather;
          }
          .home-text36 {
            color: var(--dl-color-colors-cream);
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Merriweather;
            font-weight: 400;
            line-height: 1.4;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text40 {
            color: var(--dl-color-colors-cream);
            font-style: normal;
            font-family: Merriweather;
            font-weight: 400;
            line-height: 1.35;
          }
          .home-banner1 {
            width: 100%;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: space-between;
          }
          .home-text41 {
            font-size: 3rem;
            text-align: center;
            font-family: Merriweather;
          }
          .home-text42 {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-gallery {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-gallery-card {
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
          .home-button5 {
            width: 138px;
            font-size: 15px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            transition: 0.3s;
            font-family: Merriweather;
            font-weight: 400;
            line-height: 1;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button5:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home-gallery-card1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-button6 {
            width: 138px;
            font-size: 15px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            transition: 0.3s;
            font-family: Merriweather;
            font-weight: 400;
            line-height: 1;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button6:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .home-contact {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            min-height: 50vh;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-colors-red);
          }
          .home-container09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          @media (max-width: 1000px) {
            .home-hero {
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .home-container02 {
              align-self: flex-start;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text {
              align-self: flex-start;
              text-align: left;
            }
            .home-text01 {
              align-self: flex-start;
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-btn-container {
              align-self: flex-start;
              justify-content: center;
            }
            .home-image2 {
              width: 350px;
              align-self: flex-end;
            }
            .home-banner {
              width: 900px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text06 {
              text-align: left;
            }
            .home-pricing-card {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .home-text23 {
              text-align: center;
            }
            .home-container07 {
              width: auto;
              height: auto;
              max-width: 900px;
              align-self: center;
              align-items: flex-start;
              justify-content: center;
            }
            .home-service-11 {
              width: auto;
              align-self: center;
            }
            .home-stat01 {
              margin-right: 0px;
            }
            .home-text24 {
              text-align: left;
            }
            .home-text25 {
              width: var(--dl-size-size-xxlarge);
              align-self: center;
              text-align: center;
            }
            .home-button1 {
              margin-left: 0px;
            }
            .home-stat04 {
              margin-right: 0px;
            }
            .home-text26 {
              text-align: left;
            }
            .home-text27 {
              width: var(--dl-size-size-xxlarge);
              text-align: center;
            }
            .home-button2 {
              margin-left: 0px;
            }
            .home-stat07 {
              margin-right: 0px;
            }
            .home-text31 {
              text-align: left;
            }
            .home-text32 {
              width: var(--dl-size-size-xxlarge);
              text-align: center;
            }
            .home-button3 {
              margin-left: 0px;
            }
            .home-service-4 {
              max-width: 900px;
            }
            .home-stat10 {
              margin-right: 0px;
            }
            .home-text33 {
              text-align: left;
            }
            .home-text34 {
              width: var(--dl-size-size-xxlarge);
              text-align: center;
            }
            .home-button4 {
              width: 175px;
              margin-left: 0px;
            }
            .home-hero1 {
              max-width: 1000px;
              flex-direction: column;
            }
            .home-container08 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text35 {
              text-align: center;
            }
            .home-text36 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-gallery {
              align-self: center;
              grid-template-columns: 1fr 1fr;
            }
            .home-gallery-card1 {
              display: none;
            }
            .home-contact {
              flex-direction: column;
            }
          }
          @media (max-width: 800px) {
            .home-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav {
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
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-image2 {
              width: 80%;
            }
            .home-banner {
              width: 800px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text06 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container03 {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-pricing-card {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-service-1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-service-11 {
              align-self: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-button1 {
              display: none;
            }
            .home-service-2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-button2 {
              display: none;
            }
            .home-service-3 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-button3 {
              display: none;
            }
            .home-service-4 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-button4 {
              display: none;
            }
            .home-hero1 {
              min-height: 50vh;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text35 {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: 0px;
            }
            .home-text36 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text40 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text42 {
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
            .home-image4 {
              display: none;
            }
            .home-button6 {
              display: none;
            }
            .home-contact {
              max-width: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 500px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero {
              width: 500px;
              padding-top: 0px;
              padding-left: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-container02 {
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text01 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-btn-container {
              align-self: flex-end;
              align-items: center;
              flex-direction: column;
            }
            .home-image2 {
              width: 100%;
            }
            .home-banner {
              width: 500px;
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-container03 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              margin-bottom: 0px;
            }
            .home-service-1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-text23 {
              text-align: left;
            }
            .home-container07 {
              width: 500px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-service-11 {
              align-self: flex-start;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-text25 {
              text-align: left;
            }
            .home-service-2 {
              align-self: flex-start;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-text27 {
              text-align: left;
            }
            .home-service-3 {
              align-self: flex-start;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-text32 {
              text-align: left;
            }
            .home-service-4 {
              align-self: flex-start;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-text34 {
              text-align: left;
            }
            .home-hero1 {
              width: 450px;
              align-self: center;
              min-height: 40vh;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container08 {
              width: 300px;
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text35 {
              color: var(--dl-color-colors-cream);
              font-size: 3rem;
              align-self: center;
              font-family: Merriweather;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text36 {
              text-align: center;
            }
            .home-text40 {
              width: 300px;
              font-size: 1.5em;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-weight: 500;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: Two0Units;
            }
            .home-gallery {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image3 {
              height: 10rem;
            }
            .home-image4 {
              height: 10rem;
            }
            .home-contact {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container09 {
              width: 500px;
            }
          }
          @media (max-width: 350px) {
            .home-text {
              font-size: 2rem;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 600;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text01 {
              font-size: 0.9rem;
              margin-top: var(--dl-space-space-unit);
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
              padding-right: 0px;
            }
            .home-image2 {
              width: 100%;
              margin: 0px;
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text05 {
              font-size: 2rem;
              font-style: normal;
              font-weight: 600;
            }
            .home-text06 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text23 {
              text-align: left;
            }
            .home-text25 {
              text-align: left;
            }
            .home-text27 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
