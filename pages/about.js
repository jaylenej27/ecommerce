/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';

const centeredContainerStyles = css`
  max-width: 100%;
  text-align: center;
  justify-content: center;
  display: block;
  position: relative;
  margin-top: 15vh;

  ul {
    li {
      list-style: none;
    }
  }
`;

export default function AboutUs(props) {
  return (
    <Layout>
      <main>
        <div css={centeredContainerStyles}>
          <img
            src="/founder.jpg"
            alt="Women with shortblonde hair standing outdoors looking down at her feet and the shoes on the ground around her"
            style={{ height: 300, width: 250 }}
          />
          <h1>Who are we</h1>

          <p>
            Applejacks Shoes is founded and designed by a dancer looking for
            comfort for long wear, and balance and stability. We want you to not
            only look good, but to feel good. To be able to stay on the dance
            floor all night or walk around the city. Our shoes are designed to
            help your body stay aligned and balanced. Room for your toes, secure
            on your ankles and happiness on your feet. We believe that
            Applejacks represents a fresh take on comfort and design. One of the
            most important visions Jenna had when starting the company was
            balanced heels – and we delivered! The number one piece of feedback
            we get on our high heels is “Wow they are so comfy and I feel so
            balanced!”{' '}
          </p>

          <p>
            We work extra hard to make sure the insoles in our shoes are soft
            and supportive. We have arch supports when possible. We use research
            on heel placement/balance/alignment to influence all of our designs.
            We name all of our models after important neighborhoods/locations in
            regards to jazz/swing/blues and the history and culture surrounding
            it. We aim for a variety of colors so that people of all skin tones
            have options. We are always making sure we are providing the best
            shipping options possible. We strive to make our online shop
            efficient and easy to navigate. We strive to learn and adapt as our
            brand grows. We have a goal to help reduce unnecessary waste,
            maintain high industry standards and choose sustainable durable or
            recycled materials whenever possible. We believe that Black Lives
            Matter and we stand behind the rights for the LGBTQ+ community and
            Immigrants. We are proud to be Women Founded and Women Owned.
          </p>

          <p>
            We know feet are as unique as personalities, which is why we don’t
            believe in “one size (style) fits all” That means we know our shoes
            may not work for everyone. But that is ok, because we founded this
            company to help fill in the gaps from the other companies already in
            business. Fit the feet that weren’t being fitted 🙂 Which means if
            our shoes don’t work for you, that is ok – they may fit your friends
            and family instead! And you can always check out some of the other
            great shoe companies out there with a different fit.
          </p>

          <p>
            With all this in mind, here is what you can expect from our brand:
            <ul>
              <li>
                Representation of models on our platforms Balanced, stable heels
              </li>
              <li>
                Removable insoles on any non-sandal and non-heeled style models
              </li>
              <li>
                Simple labels – It gets thrown away anyway, so we only label
                what we need to
              </li>
              <li>
                Minimal packaging – From the factory to you, we do our best to
                only use what is needed
              </li>
              <li>1 free shoe bag for every pair purchased</li>
              <li>
                Leatherwork follows German PCP Regulations Fair working
                conditions
              </li>
              <li>Non-gendered/Non-roled sizing and styles </li>
              <li>Vegan options on many models</li>
              <li>
                All samples are tried out on actual dance floors and streets{' '}
              </li>
              <li>All samples are kept, donated or sold as-is </li>
              <li>
                Extra shoe boxes are donated to local schools for craft projects{' '}
              </li>
              <li>Leather samples and scraps are donated or recycled </li>
              <li>
                Continued research/education on waster reducing, environmentally
                friendly alternatives
              </li>
            </ul>
          </p>

          <p>
            We are still working on building our brand and identity. We
            appreciate your feedback, and we hope you travel along with us on
            our journey. We are based in Vienna, AT and as of now all items ship
            from there, but our products are currently made in Spain.
          </p>

          <p>
            Founding: Applejacks was founded in Vienna, AT in 2019 by
            International Dance Instructor Jenna Applegarth after many years of
            searching for the “right” swing dance shoes. There were many
            beautiful, quality dance shoes out there – but she still struggled
            to find things that fit her feet and her specific needs. She was
            needing something that would have enough room in the toe box to keep
            her balanced and stable but the shoe itself still being flexible
            enough for dance movements. They needed to be comfortable enough to
            wear day and night but still look good enough for performing. She
            decided it was time to step in and design what she needed.
          </p>
        </div>
      </main>
    </Layout>
  );
}
