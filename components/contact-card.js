import React from 'react'

import PropTypes from 'prop-types'

const ContactCard = (props) => {
  return (
    <>
      <div className={`contact-card-blog-post-card ${props.rootClassName} `}>
        <div className="contact-card-container">
          <h1 className="contact-card-text">{props.heading}</h1>
          <div className="contact-card-container1">
            <input
              type="text"
              placeholder="name"
              className="contact-card-textinput input"
            />
            <input
              type="text"
              placeholder="email"
              className="contact-card-textinput1 input"
            />
            <input
              type="text"
              placeholder="number"
              className="contact-card-textinput2 input"
            />
          </div>
          <textarea
            placeholder="message"
            className="contact-card-textarea textarea"
          ></textarea>
          <button className="contact-card-button button">{props.button}</button>
        </div>
        <div className="contact-card-container2">
          <div className="contact-card-container3">
            <h1 className="contact-card-text1">{props.title}</h1>
            <div className="contact-card-container4">
              <span className="contact-card-text2">{props.when1}</span>
              <span className="contact-card-text3">{props.when}</span>
            </div>
            <div className="contact-card-container5">
              <span className="contact-card-text4">{props.when11}</span>
              <span className="contact-card-text5">{props.when2}</span>
            </div>
          </div>
          <div className="contact-card-container6">
            <img
              alt="image"
              src="https://i.imgur.com/mseZpUy.png"
              className="contact-card-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-card-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: var(--dl-color-colors-red);
          }
          .contact-card-blog-post-card:hover {
            transform: scale(1.02);
          }
          .contact-card-container {
            width: 550px;
            height: auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .contact-card-text {
            color: var(--dl-color-colors-cream);
            align-self: flex-start;
            font-family: Merriweather;
          }
          .contact-card-container1 {
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-card-textinput {
            width: 305px;
            margin-top: var(--dl-space-space-unit);
            border-width: 0px;
            border-radius: 0px;
          }
          .contact-card-textinput1 {
            width: 305px;
            margin-top: var(--dl-space-space-unit);
            border-width: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-card-textinput2 {
            width: 305px;
            border-width: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-card-textarea {
            width: 305px;
            height: 248px;
            align-self: flex-start;
            border-width: 0px;
            border-radius: 0px;
          }
          .contact-card-button {
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-circle);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .contact-card-button:hover {
            color: #ffffff;
            background-color: var(--dl-color-colors-black);
          }
          .contact-card-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .contact-card-container3 {
            height: 100%;
            display: flex;
            margin-top: 42px;
            align-items: center;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-card-text1 {
            color: var(--dl-color-colors-cream);
            align-self: flex-start;
            font-family: Merriweather;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-card-container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-card-text2 {
            color: var(--dl-color-colors-cream);
            font-weight: 300;
          }
          .contact-card-text3 {
            color: var(--dl-color-colors-cream);
            font-weight: 300;
            margin-right: 91px;
          }
          .contact-card-container5 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-card-text4 {
            color: var(--dl-color-colors-cream);
            font-weight: 300;
            margin-right: var(--dl-space-space-unit);
          }
          .contact-card-text5 {
            color: var(--dl-color-colors-cream);
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
          }
          .contact-card-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .contact-card-image {
            width: var(--dl-size-size-xxlarge);
            align-self: flex-end;
            object-fit: cover;
          }

          @media (max-width: 1000px) {
            .contact-card-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
            .contact-card-root-class-name3 {
              max-width: 1000px;
            }
          }
          @media (max-width: 800px) {
            .contact-card-blog-post-card {
              flex-direction: column;
            }
            .contact-card-container {
              width: auto;
              align-self: center;
              margin-right: 0px;
            }
            .contact-card-container1 {
              align-self: center;
            }
            .contact-card-textinput {
              width: 700px;
              align-self: center;
            }
            .contact-card-textinput1 {
              width: 700px;
              align-self: center;
            }
            .contact-card-textinput2 {
              width: 700px;
              align-self: center;
            }
            .contact-card-textarea {
              width: 700px;
              align-self: center;
            }
            .contact-card-container2 {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .contact-card-container3 {
              align-self: center;
              margin-top: 0px;
              align-items: center;
              margin-left: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .contact-card-text1 {
              display: none;
            }
            .contact-card-text2 {
              font-size: 1.5rem;
            }
            .contact-card-text3 {
              font-size: 1.5rem;
              margin-right: 135px;
            }
            .contact-card-text4 {
              font-size: 1.5rem;
            }
            .contact-card-text5 {
              font-size: 1.5rem;
            }
            .contact-card-container6 {
              align-self: center;
            }
            .contact-card-image {
              align-self: center;
            }
            .contact-card-root-class-name3 {
              align-self: center;
            }
          }
          @media (max-width: 500px) {
            .contact-card-container {
              width: 500px;
              align-self: center;
            }
            .contact-card-text {
              align-self: flex-start;
              text-align: left;
              margin-left: var(--dl-space-space-unit);
            }
            .contact-card-container1 {
              align-self: center;
            }
            .contact-card-textinput {
              width: 475px;
            }
            .contact-card-textinput1 {
              width: 475px;
            }
            .contact-card-textinput2 {
              width: 475px;
            }
            .contact-card-textarea {
              width: 475px;
              align-self: center;
            }
            .contact-card-button {
              align-self: center;
              margin-right: 0px;
            }
            .contact-card-container2 {
              width: 500px;
            }
            .contact-card-container3 {
              align-self: center;
            }
            .contact-card-text1 {
              align-self: center;
            }
            .contact-card-text2 {
              font-size: 1.2rem;
            }
            .contact-card-text3 {
              font-size: 1.2rem;
              margin-right: 108px;
            }
            .contact-card-container5 {
              align-items: center;
            }
            .contact-card-text4 {
              font-size: 1.2rem;
            }
            .contact-card-text5 {
              font-size: 1.2rem;
            }
            .contact-card-image {
              width: var(--dl-size-size-large);
            }
          }
        `}
      </style>
    </>
  )
}

ContactCard.defaultProps = {
  when2: 'email@email.com',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  textinput_placeholder: 'placeholder',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  button: 'start a project',
  author: 'Jane Doe',
  heading: 'get in touch with us',
  profile_alt: 'profile',
  when111: '(123) 456-789',
  when1: 'phone',
  image_alt1: 'image',
  image_alt: 'image',
  rootClassName: '',
  label: 'number',
  title: 'reach out now',
  description: '',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  when: 'email',
  when21: 'email@email.com',
  textarea_placeholder: 'placeholder',
  when11: '(123) 456-789',
  when3: 'email',
  title1: 'reach out now',
  when12: 'phone',
}

ContactCard.propTypes = {
  when2: PropTypes.string,
  profile_src: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src1: PropTypes.string,
  button: PropTypes.string,
  author: PropTypes.string,
  heading: PropTypes.string,
  profile_alt: PropTypes.string,
  when111: PropTypes.string,
  when1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  when: PropTypes.string,
  when21: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  when11: PropTypes.string,
  when3: PropTypes.string,
  title1: PropTypes.string,
  when12: PropTypes.string,
}

export default ContactCard
