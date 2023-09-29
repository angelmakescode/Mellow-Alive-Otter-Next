import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <span className="navigation-links-text">{props.PROJECTS}</span>
        <span className="navigation-links-text1">{props.SERVICES}</span>
        <span className="navigation-links-text2">{props.ABOUT}</span>
        <span className="navigation-links-text3">{props.CONTACT}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-text {
            font-family: Merriweather;
          }
          .navigation-links-text1 {
            font-family: Merriweather;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text2 {
            font-family: Merriweather;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text3 {
            font-family: Merriweather;
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 800px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  CONTACT: 'CONTACT',
  ABOUT: 'ABOUT',
  rootClassName: '',
  SERVICES: 'SERVICES',
  PROJECTS: 'PROJECTS',
}

NavigationLinks.propTypes = {
  CONTACT: PropTypes.string,
  ABOUT: PropTypes.string,
  rootClassName: PropTypes.string,
  SERVICES: PropTypes.string,
  PROJECTS: PropTypes.string,
}

export default NavigationLinks
