import React from 'react'

import PropTypes from 'prop-types'

const HeroType1 = (props) => {
  return (
    <>
      <div className={`hero-type-1-hero-type-1 ${props.rootClassName} `}>
        <div className="hero-type-1-container">
          <h1 className="hero-type-1-text">{props.heading}</h1>
          <span className="hero-type-1-text1">
            <span>
              Kindred Studios- where exceptional design meets the art of
              transformation.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
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
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="hero-type-1-image"
        />
      </div>
      <style jsx>
        {`
          .hero-type-1-hero-type-1 {
            width: 95%;
            display: flex;
            position: relative;
            max-width: auto;
            min-height: auto;
            align-items: center;
            border-color: var(--dl-color-colors-black);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .hero-type-1-container {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .hero-type-1-text {
            font-size: 3rem;
            max-width: 900px;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
          }
          .hero-type-1-text1 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .hero-type-1-image {
            width: 400px;
            object-fit: cover;
          }

          @media (max-width: 1600px) {
            .hero-type-1-hero-type-1 {
              width: 90%;
              padding: 0px;
              max-width: auto;
              min-height: auto;
              justify-content: center;
            }
            .hero-type-1-image {
              width: 500px;
            }
          }
          @media (max-width: 1500px) {
            .hero-type-1-hero-type-1 {
              width: 88%;
              padding: 0px;
            }
            .hero-type-1-root-class-name1 {
              width: 95%;
            }
          }
          @media (max-width: 1000px) {
            .hero-type-1-hero-type-1 {
              width: 98%;
            }
            .hero-type-1-image {
              width: 415px;
            }
          }
          @media (max-width: 991px) {
            .hero-type-1-hero-type-1 {
              flex-direction: column;
            }
            .hero-type-1-container {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .hero-type-1-text {
              text-align: center;
            }
            .hero-type-1-text1 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 800px) {
            .hero-type-1-hero-type-1 {
              width: 95%;
              padding: var(--dl-space-space-unit);
            }
            .hero-type-1-text {
              font-style: normal;
              font-family: Merriweather;
              font-weight: 700;
            }
            .hero-type-1-image {
              width: 300px;
            }
          }
          @media (max-width: 767px) {
            .hero-type-1-hero-type-1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .hero-type-1-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .hero-type-1-image {
              width: 80%;
            }
          }
          @media (max-width: 500px) {
            .hero-type-1-hero-type-1 {
              width: 500px;
              max-width: auto;
              min-height: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .hero-type-1-text {
              font-size: 1.5rem;
            }
            .hero-type-1-text1 {
              width: auto;
              align-self: center;
            }
            .hero-type-1-image {
              width: 200px;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
          }
          @media (max-width: 479px) {
            .hero-type-1-hero-type-1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .hero-type-1-container {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

HeroType1.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&ixlib=rb-1.2.1&w=500',
  heading: 'Extraordinary design-with real people in mind.',
}

HeroType1.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default HeroType1
