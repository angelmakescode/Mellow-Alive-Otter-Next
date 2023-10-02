import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import GalleryCard11 from '../components/gallery-card11'

const Projects = (props) => {
  return (
    <>
      <div className="projects-container">
        <Head>
          <title>Projects - Mellow Alive Otter</title>
          <meta property="og:title" content="Projects - Mellow Alive Otter" />
        </Head>
        <header data-role="Header" className="projects-nav">
          <img
            alt="logo"
            src="https://i.imgur.com/mseZpUy.png"
            className="projects-image"
          />
          <div className="projects-nav1">
            <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="projects-burger-menu">
            <svg viewBox="0 0 1024 1024" className="projects-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="projects-mobile-menu">
            <div className="projects-nav2">
              <div className="projects-container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="projects-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="projects-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="projects-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="projects-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="projects-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="projects-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="projects-hero">
          <span className="projects-text">about us:</span>
          <h1 className="projects-text01">
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
          <button className="projects-button button">
            <span className="projects-text05">
              <span className="projects-text06">get consult</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="projects-banner">
          <h1 className="projects-text08">Our Recent Projects</h1>
          <span className="projects-text09">
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
        <div className="projects-gallery">
          <div className="projects-gallery-card">
            <img
              alt="image"
              src="https://i.imgur.com/M64SMGk.png"
              className="projects-image2"
            />
            <button className="projects-button1 button">view project</button>
          </div>
          <GalleryCard11
            image_src="https://i.imgur.com/124k90Z.png"
            rootClassName="rootClassName"
          ></GalleryCard11>
          <div className="projects-gallery-card1">
            <img
              alt="image"
              src="https://i.imgur.com/Wq4LOIV.png"
              className="projects-image3"
            />
            <button className="projects-button2 button">view project</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .projects-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .projects-nav {
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
          .projects-image {
            height: 8rem;
          }
          .projects-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .projects-burger-menu {
            display: none;
          }
          .projects-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .projects-mobile-menu {
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
          .projects-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .projects-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .projects-image1 {
            height: 2rem;
          }
          .projects-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .projects-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .projects-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .projects-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .projects-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .projects-hero {
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
          .projects-text {
            color: var(--dl-color-colors-red);
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 900;
            letter-spacing: 2px;
          }
          .projects-text01 {
            color: var(--dl-color-colors-black);
            font-size: 1rem;
            max-width: 100%;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .projects-button {
            align-self: flex-end;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .projects-button:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .projects-text06:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .projects-banner {
            width: 85%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .projects-text08 {
            width: 1200px;
            font-size: 3rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 700;
          }
          .projects-text09 {
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .projects-gallery {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-unit);
            max-width: auto;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .projects-gallery-card {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projects-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .projects-button1 {
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
          .projects-button1:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          .projects-gallery-card1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projects-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .projects-button2 {
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
          .projects-button2:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }
          @media (max-width: 1600px) {
            .projects-nav {
              padding-left: var(--dl-space-space-sixunits);
              padding-right: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 1000px) {
            .projects-nav {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .projects-text08 {
              width: 850px;
            }
            .projects-text09 {
              max-width: auto;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 991px) {
            .projects-gallery {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 800px) {
            .projects-nav {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-nav1 {
              display: none;
            }
            .projects-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .projects-icon {
              fill: var(--dl-color-colors-red);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .projects-button {
              align-self: flex-end;
            }
            .projects-text08 {
              width: 100%;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 400;
            }
          }
          @media (max-width: 767px) {
            .projects-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-text09 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .projects-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-gallery-card {
              flex-direction: column;
            }
            .projects-gallery-card1 {
              flex-direction: column;
            }
          }
          @media (max-width: 500px) {
            .projects-nav {
              padding: var(--dl-space-space-unit);
            }
            .projects-mobile-menu {
              padding: 16px;
            }
            .projects-button {
              font-size: 0.6rem;
              align-self: flex-end;
              font-family: Merriweather;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .projects-text05 {
              font-size: 1rem;
              font-style: normal;
              font-weight: 600;
            }
            .projects-text06 {
              align-self: flex-end;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .projects-banner {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .projects-text08 {
              width: 450px;
              font-size: 1.2rem;
              text-align: center;
            }
            .projects-text09 {
              text-align: center;
            }
            .projects-gallery {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .projects-button1 {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
            .projects-button2 {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
          }
          @media (max-width: 479px) {
            .projects-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .projects-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .projects-gallery {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .projects-image2 {
              height: 10rem;
            }
            .projects-image3 {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Projects
