import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard11 = (props) => {
  return (
    <>
      <div className={`gallery-card11-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="gallery-card11-image"
        />
        <button className="gallery-card11-button button">
          {props.button1}
        </button>
      </div>
      <style jsx>
        {`
          .gallery-card11-gallery-card {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card11-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-card11-button {
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
          .gallery-card11-button:hover {
            color: var(--dl-color-colors-cream);
            border-width: 1px;
            background-color: var(--dl-color-colors-red);
          }

          @media (max-width: 767px) {
            .gallery-card11-gallery-card {
              flex-direction: column;
            }
          }
          @media (max-width: 500px) {
            .gallery-card11-button {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #ad9d9d;
            }
          }
          @media (max-width: 479px) {
            .gallery-card11-image {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  )
}

GalleryCard11.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  title: 'Project Title',
  rootClassName: '',
  image_alt: 'image',
  subtitle: 'Lorem ipsum dolor sit amet',
  button: 'start a project',
  button1: 'view project',
}

GalleryCard11.propTypes = {
  image_src: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  subtitle: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default GalleryCard11
