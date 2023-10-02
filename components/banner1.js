import React from 'react'

import PropTypes from 'prop-types'

const Banner1 = (props) => {
  return (
    <>
      <div className="banner1-banner">
        <h1 className="banner1-text">{props.heading}</h1>
        <span className="banner1-text1">
          <span>
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
          <span>
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
        </span>
        <button className="banner1-button button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .banner1-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .banner1-text {
            font-size: 3rem;
            text-align: center;
          }
          .banner1-text1 {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .banner1-button {
            transition: 0.3s;
            font-family: Merriweather;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .banner1-button:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          @media (max-width: 767px) {
            .banner1-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .banner1-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 500px) {
            .banner1-banner {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .banner1-text {
              font-size: 1.2rem;
              text-align: left;
            }
            .banner1-text1 {
              text-align: left;
            }
            .banner1-button {
              align-self: flex-end;
            }
          }
          @media (max-width: 479px) {
            .banner1-banner {
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

Banner1.defaultProps = {
  button: 'start a project',
  heading:
    ' Our dedicated team takes the time to really listen, observe, and engage with our clients.',
}

Banner1.propTypes = {
  button: PropTypes.string,
  heading: PropTypes.string,
}

export default Banner1
