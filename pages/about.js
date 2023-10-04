import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import Banner from '../components/banner'
import AwardSection from '../components/award-section'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Mellow Alive Otter</title>
          <meta property="og:title" content="About - Mellow Alive Otter" />
        </Head>
        <header data-role="Header" className="about-nav">
          <img
            alt="logo"
            src="https://i.imgur.com/mseZpUy.png"
            className="about-image"
          />
          <div className="about-nav1">
            <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="about-burger-menu">
            <svg viewBox="0 0 1024 1024" className="about-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="about-mobile-menu">
            <div className="about-nav2">
              <div className="about-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="about-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="about-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="about-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName15"></NavigationLinks>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="about-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="about-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="about-container02">
          <div className="about-container03">
            <div className="about-container04">
              <span className="about-text">Who are we?</span>
              <h1 className="about-text1">
                <span className="about-text2">
                  Nestled in a bustling city, Kindred Studios, founded by
                  childhood friends Emma Davis and Oliver Thompson, is a design
                  haven rooted in connection. Starting in a cozy attic, the
                  studio&apos;s essence lies in its commitment to creating not
                  just beautiful spaces but a sense of belonging. Their
                  breakthrough project, a historic building turned community
                  space, epitomized their collaborative approach, involving the
                  local community in the transformation process.
                </span>
                <br></br>
              </h1>
              <button className="about-button button">start a project</button>
            </div>
            <div className="about-container05">
              <img
                alt="image"
                src="https://images.pexels.com/photos/4065137/pexels-photo-4065137.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                className="about-image2"
              />
            </div>
          </div>
        </div>
        <Banner rootClassName="banner-root-class-name1"></Banner>
        <AwardSection></AwardSection>
        <div className="about-container06">
          <div className="about-container07">
            <div className="about-container08">
              <h1 className="about-text4">
                <span>
                  From concept to completion, we collaborate closely with you,
                  infusing each project with our expertise, creativity, and
                  unwavering attention to detail. With an emphasis on
                  personalized service and a commitment to exceeding
                  expectations, we take pride in transforming houses into homes
                  that evoke a sense of joy, comfort, and inspiration. Step into
                  a world of limitless possibilities and let Kindred Studios
                  redefine your living experience.
                </span>
                <br></br>
                <br></br>
              </h1>
              <button className="about-button1 button">start a project</button>
            </div>
            <div className="about-container09">
              <img
                alt="image"
                src="https://images.pexels.com/photos/5806989/pexels-photo-5806989.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                className="about-image3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-nav {
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
          .about-image {
            height: 8rem;
          }
          .about-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-burger-menu {
            display: none;
          }
          .about-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .about-mobile-menu {
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
          .about-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .about-image1 {
            height: 2rem;
          }
          .about-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .about-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .about-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .about-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .about-container04 {
            flex: 0 0 auto;
            width: 800px;
            height: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-text {
            color: var(--dl-color-colors-red);
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 900;
            letter-spacing: 2px;
          }
          .about-text1 {
            color: var(--dl-color-colors-black);
            font-size: 1rem;
            max-width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-button {
            align-self: flex-start;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .about-button:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .about-container05 {
            flex: 0 0 auto;
            width: 1000px;
            height: 650px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-image2 {
            width: 1000px;
            height: 650px;
            object-fit: cover;
          }
          .about-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .about-container07 {
            flex: 0 0 auto;
            width: 1825px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-threeunits);
            border-color: var(--dl-color-colors-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .about-container08 {
            flex: 0 0 auto;
            width: 1000px;
            height: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-text4 {
            color: var(--dl-color-colors-black);
            font-size: 1rem;
            max-width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-button1 {
            align-self: flex-start;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .about-button1:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .about-container09 {
            flex: 0 0 auto;
            width: 650px;
            height: 650px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-image3 {
            width: 650px;
            height: 650px;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .about-nav {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .about-container05 {
              width: 700px;
            }
            .about-image2 {
              width: 700px;
            }
            .about-container07 {
              width: 1500px;
              margin-bottom: var(--dl-space-space-threeunits);
              border-bottom-width: 1px0;
            }
            .about-container08 {
              width: 650px;
            }
            .about-container09 {
              width: 500px;
            }
          }
          @media (max-width: 1500px) {
            .about-container05 {
              width: 600px;
            }
            .about-image2 {
              width: 600px;
            }
            .about-container07 {
              width: var(--dl-size-size-maxwidth);
              margin-bottom: var(--dl-space-space-threeunits);
              border-bottom-width: 0px;
            }
            .about-container08 {
              width: 500px;
            }
            .about-container09 {
              width: 500px;
            }
          }
          @media (max-width: 1000px) {
            .about-nav {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-container04 {
              width: 430px;
            }
            .about-text1 {
              max-width: 350px;
            }
            .about-container05 {
              width: 500px;
              align-items: flex-start;
            }
            .about-image2 {
              width: 500px;
              align-self: center;
            }
            .about-container07 {
              width: 900px;
              margin-top: 0px;
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-container08 {
              width: 350px;
            }
            .about-container09 {
              width: 350px;
            }
            .about-image3 {
              width: 350px;
            }
          }
          @media (max-width: 800px) {
            .about-nav {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .about-nav1 {
              display: none;
            }
            .about-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .about-icon {
              fill: var(--dl-color-colors-red);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .about-container04 {
              width: 250px;
            }
            .about-container05 {
              width: 425px;
            }
            .about-image2 {
              width: 425px;
            }
            .about-container07 {
              width: 700px;
              margin-top: 0px;
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
              justify-content: space-between;
              border-bottom-width: 0px;
            }
            .about-container08 {
              width: 250px;
            }
            .about-text4 {
              width: 250px;
            }
            .about-container09 {
              width: 300px;
            }
            .about-image3 {
              width: 300px;
            }
          }
          @media (max-width: 500px) {
            .about-nav {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .about-mobile-menu {
              padding: 16px;
            }
            .about-container04 {
              width: 150px;
              height: auto;
            }
            .about-text {
              color: var(--dl-color-colors-red);
              font-size: 2rem;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 900;
              letter-spacing: 2px;
            }
            .about-text1 {
              color: var(--dl-color-colors-black);
              font-size: 0.8rem;
              margin-top: 0px;
              min-height: 500px;
              font-family: Merriweather;
              margin-bottom: 0px;
            }
            .about-text2 {
              font-family: Merriweather;
            }
            .about-button {
              font-size: 0.7rem;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
            .about-container05 {
              width: 250px;
            }
            .about-image2 {
              width: 250px;
            }
            .about-container08 {
              width: 200px;
            }
            .about-button1 {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
