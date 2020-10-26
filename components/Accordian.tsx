import React from 'react';
import { useState, useRef } from 'react';

type Props = {
  content: 'string'
  title: 'string'
}

function Accordion(props: Props) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`,
    );
  }

  return (
    <>
      <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{props.title}</p>
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </div>

      <style jsx>{`
        /* Style the accordion section */
        .accordion__section {
          display: flex;
          flex-direction: column;
        }

        /* Style the buttons that are used to open and close the accordion panel */
        .accordion {
          background-color: #eee;
          color: #444;
          cursor: pointer;
          padding: 18px;
          display: flex;
          align-items: center;
          border: none;
          outline: none;
          transition: background-color 0.6s ease;
        }

        /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
        .accordion:hover,
        .active {
          background-color: #ccc;
        }

        /* Style the accordion content title */
        .accordion__title {
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
        }

        /* Style the accordion chevron icon */
        .accordion__icon {
          margin-left: auto;
          transition: transform 0.6s ease;
        }

        /* Style to rotate icon when state is active */
        .rotate {
          transform: rotate(90deg);
        }

        /* Style the accordion content panel. Note: hidden by default */
        .accordion__content {
          background-color: white;
          overflow: hidden;
          transition: max-height 0.6s ease;
        }

        /* Style the accordion content text */
        .accordion__text {
          font-family: 'Open Sans', sans-serif;
          font-weight: 400;
          font-size: 14px;
          padding: 18px;
        }
      `}</style>
    </>
  );
}

export default Accordion;
