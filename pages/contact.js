/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';

const centeredContainerStyles = css`
  max-width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  position: relative;
  margin-top: 25vh;

  form {
    width:740px;
    height:540px;
    background:#e6e6e6;
    border-radius:8px;
    box-shadow:0 0 40px -10px #000;
    margin:calc(50vh - 220px) auto;
    padding:20px 30px;
    max-width:calc(100vw - 40px);
    box-sizing:border-box;
    font-family:'Montserrat',sans-serif;
    position:relative;
    color:#7a435a;
      
    .h2 {
      margin:10px 0;
      padding-bottom:10px;
      width:180px;
      border-bottom:3px solid #78788c
      text-align: center;
    }
  }

    input {
      width:100%;
      padding:10px;
      box-sizing:border-box;
      background:none; 
      outline:none;
      resize:none;border:0;
      font-family:'Montserrat',sans-serif;
      transition:all .3s;
      border-bottom:2px solid #bebed2
    }
    
    input:focus {
      border-bottom:2px solid #78788c
    }

    p:before {
      content:attr(type);
      display:block;
      margin:28px 0 0;
      font-size:14px;
      color:#5a5a5a
    }

    textarea {
      width: 75%;
      min-height: 25px;
      padding: 10px;
      margin: 5px;

      :focus {
    outline: -webkit-focus-ring-color #78788c 1px;
}
    }
    button {
      float:right;
      padding:8px 12px;
      margin:8px 0 0;
      font-family:'Montserrat',sans-serif;
      border:2px solid #78788c;
      background:0;
      color:#5a5a6e;
      cursor:pointer;
      transition:all .3s
    }

    button:hover {
      background:#78788c;
      color:#fff
    }
  }
`;

export default function Contact(props) {
  return (
    <Layout>
      <main>
        <div css={centeredContainerStyles}>
          <form>
            <h2>CONTACT US</h2>
            <p>
              <label>Name</label>
              <input type="text" placeholder="Full Name" />
            </p>
            <p>
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </p>
            <p>
              <label>Message</label>
              <br />
              <textarea placeholder="Please enter your message here"></textarea>
            </p>
            <p>
              <button type="submit">Send Message</button>
            </p>
          </form>
        </div>
      </main>
    </Layout>
  );
}
