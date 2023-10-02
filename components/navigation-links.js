import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/projects">
          <a className="navigation-links-link">{props.PROJECTS}</a>
        </Link>
        <Link href="/services">
          <a className="navigation-links-link1">{props.SERVICES}</a>
        </Link>
        <Link href="/about">
          <a className="navigation-links-link2">{props.ABOUT}</a>
        </Link>
        <Link href="/contact">
          <a className="navigation-links-link3">{props.CONTACT}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            font-family: Merriweather;
            text-decoration: none;
          }
          .navigation-links-link1 {
            font-family: Merriweather;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link2 {
            font-family: Merriweather;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link3 {
            font-family: Merriweather;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 800px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link3 {
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
