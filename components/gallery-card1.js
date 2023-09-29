import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard1 = (props) => {
  return (
    <>
      <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
        <img
          alt="image"
          src="https://i.imgur.com/Wq4LOIV.png"
          className="gallery-card1-image"
        />
        <button className="gallery-card1-button button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .gallery-card1-gallery-card {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card1-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-card1-button {
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
          .gallery-card1-button:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }

          @media (max-width: 800px) {
            .gallery-card1-gallery-card {
              flex-direction: column;
            }
          }
          @media (max-width: 500px) {
            .gallery-card1-image {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  )
}

GalleryCard1.defaultProps = {
  button: 'view project',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&w=1500',
  subtitle: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  title: 'Project Title',
  image_alt: 'image',
}

GalleryCard1.propTypes = {
  button: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GalleryCard1
