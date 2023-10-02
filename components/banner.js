import React from 'react'

import PropTypes from 'prop-types'

const Banner = (props) => {
  return (
    <>
      <div className={`banner-banner ${props.rootClassName} `}>
        <h1 className="banner-text">{props.heading}</h1>
        <span className="banner-text1">
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
        <button className="banner-button button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .banner-banner {
            width: 85%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .banner-text {
            width: 1200px;
            font-size: 3rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Merriweather;
            font-weight: 700;
          }
          .banner-text1 {
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .banner-button {
            align-self: center;
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .banner-button:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }

          @media (max-width: 1000px) {
            .banner-text {
              width: 850px;
            }
            .banner-text1 {
              max-width: auto;
            }
          }
          @media (max-width: 800px) {
            .banner-text {
              width: 100%;
              font-style: normal;
              font-family: Merriweather;
              font-weight: 400;
            }
            .banner-root-class-name {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .banner-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .banner-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 500px) {
            .banner-banner {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .banner-text {
              width: 450px;
              font-size: 1.2rem;
              text-align: center;
            }
            .banner-text1 {
              text-align: center;
            }
            .banner-button {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
          }
          @media (max-width: 479px) {
            .banner-banner {
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

Banner.defaultProps = {
  button: 'start a project',
  rootClassName: '',
  heading:
    'Our dedicated team takes the time to really listen, observe, and engage with our clients.',
}

Banner.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default Banner
