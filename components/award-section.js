import React from 'react'

import PropTypes from 'prop-types'

const AwardSection = (props) => {
  return (
    <>
      <div className="award-section-award-section">
        <div className="award-section-container">
          <div className="award-section-container1">
            <div className="award-section-container2">
              <span className="award-section-text">{props.text2}</span>
              <span className="award-section-text1">{props.text3}</span>
            </div>
            <div className="award-section-container3">
              <span className="award-section-text2">{props.text22}</span>
              <span className="award-section-text3">{props.text32}</span>
            </div>
            <div className="award-section-container4">
              <span className="award-section-text4">{props.text21}</span>
              <span className="award-section-text5">{props.text31}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .award-section-award-section {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
          }
          .award-section-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: auto;
            align-items: flex-start;
            justify-content: center;
          }
          .award-section-container1 {
            flex: auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .award-section-container2 {
            flex: 1;
            color: #ffffff;
            height: auto;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #b9a8a8;
            transition: 0.3s;
            align-items: center;
            margin-left: 0px;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-colors-red);
          }
          .award-section-container2:hover {
            transform: scale(1.02);
          }
          .award-section-text {
            color: var(--dl-color-colors-cream);
            font-size: 1.5rem;
            font-weight: 600;
          }
          .award-section-text1 {
            color: var(--dl-color-colors-cream);
            margin: var(--dl-space-space-twounits);
            font-size: 1rem;
            font-weight: 200;
          }
          .award-section-container3 {
            flex: 1;
            color: #ffffff;
            height: auto;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #b9a8a8;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-sixunits);
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-colors-red);
          }
          .award-section-container3:hover {
            transform: scale(1.02);
          }
          .award-section-text2 {
            color: var(--dl-color-colors-cream);
            font-size: 1.5rem;
            font-weight: 600;
          }
          .award-section-text3 {
            color: var(--dl-color-colors-cream);
            margin: var(--dl-space-space-twounits);
            font-size: 1rem;
            font-weight: 200;
          }
          .award-section-container4 {
            flex: 1;
            color: #ffffff;
            height: auto;
            display: flex;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #b9a8a8;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-sixunits);
            padding-top: var(--dl-space-space-twounits);
            margin-right: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-colors-red);
          }
          .award-section-container4:hover {
            transform: scale(1.02);
          }
          .award-section-text4 {
            color: var(--dl-color-colors-cream);
            font-size: 1.5rem;
            font-weight: 600;
          }
          .award-section-text5 {
            color: var(--dl-color-colors-cream);
            margin: var(--dl-space-space-twounits);
            font-size: 1rem;
            font-weight: 200;
          }
          @media (max-width: 1000px) {
            .award-section-text1 {
              text-align: center;
            }
            .award-section-container3 {
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
            }
            .award-section-text3 {
              text-align: center;
            }
            .award-section-text5 {
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .award-section-container {
              align-items: center;
              flex-direction: column;
            }
            .award-section-container1 {
              width: 100%;
            }
          }
          @media (max-width: 800px) {
            .award-section-container1 {
              width: auto;
            }
            .award-section-container2 {
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .award-section-container3 {
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .award-section-container4 {
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .award-section-container {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .award-section-container1 {
              flex-direction: column;
            }
            .award-section-container2 {
              width: 100%;
            }
            .award-section-container3 {
              width: 100%;
            }
            .award-section-container4 {
              width: 100%;
            }
          }
          @media (max-width: 500px) {
            .award-section-award-section {
              align-items: center;
              background-color: transparent;
            }
            .award-section-container {
              align-self: center;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .award-section-container1 {
              flex-direction: row;
            }
            .award-section-container2 {
              height: auto;
              padding: var(--dl-space-space-halfunit);
              min-width: var(--dl-size-size-medium);
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .award-section-text {
              margin-top: var(--dl-space-space-halfunit);
            }
            .award-section-text1 {
              font-size: 0.8rem;
            }
            .award-section-container3 {
              height: auto;
              padding: var(--dl-space-space-halfunit);
              min-width: var(--dl-size-size-small);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .award-section-text2 {
              margin-top: var(--dl-space-space-halfunit);
            }
            .award-section-text3 {
              font-size: 0.8rem;
            }
            .award-section-container4 {
              height: auto;
              padding: var(--dl-space-space-halfunit);
              min-width: var(--dl-size-size-small);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: 0px;
            }
            .award-section-text4 {
              margin-top: var(--dl-space-space-halfunit);
            }
            .award-section-text5 {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 479px) {
            .award-section-container {
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

AwardSection.defaultProps = {
  text21: '50+',
  text2: '300+',
  text4: 'Free',
  text1: '$29',
  text3: 'COMPLETED  PROJECTS',
  text5: '$29',
  text: 'Free',
  text22: '12',
  text31: 'AWARDS WON',
  text32: 'YEARS OF  EXPERIENCE',
}

AwardSection.propTypes = {
  text21: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  text22: PropTypes.string,
  text31: PropTypes.string,
  text32: PropTypes.string,
}

export default AwardSection
