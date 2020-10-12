/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';
import Accordion from '../components/Accordian';

const centeredContainerStyles = css`
  max-width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  position: relative;
  margin-top: 25vh;
`;

export default function FAQ(props) {
  return (
    <Layout>
      <h1>qa goes here</h1>
      <div css={centeredContainerStyles}>
        <div>
          <Accordion
            title="Where are your items produced?"
            content="Short answer: Europe! Spain.... Alicante... awesome places"
          />
          <Accordion
            title="Why Applejacks"
            content="We are amazing. Built for comfort, quality AND fashion. Non-gendered, our shoes are for all"
          />
          <Accordion
            title="Who are you"
            content="potato. Well, at least that is how we feel some days. "
          />
        </div>
      </div>
    </Layout>
  );
}
