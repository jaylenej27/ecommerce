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
      <main>
        <div css={centeredContainerStyles}>
          <div>
            <Accordion
              title="Where are your items produced?"
              content="Short answer: Europe! Spain.... Alicante... awesome places"
            />
            <Accordion title="Why Applejacks" content="We are amazing" />
            <Accordion
              title="Who are you"
              content="
   <p>friends</p>
   </br>
   <p>family</p>
   </br>
   <p>potatoes</p>"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
