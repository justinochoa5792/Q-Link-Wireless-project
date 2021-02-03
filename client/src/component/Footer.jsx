import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-inner">
          <ul>
            <li>
              <strong>Helpful Links</strong>
            </li>
            <li>Home</li>
            <li>Support</li>
            <li>My Q Link/Login</li>
            <li>Upload Proof</li>
            <li>Activate</li>
            <li>Coverage</li>
          </ul>
          <ul>
            <li>
              <strong>Lifeline Program</strong>
            </li>
            <li>About Us</li>
            <li>About Life</li>
            <li>Enroll for Lifeline</li>
            <li>Lifeline Plans</li>
            <li>Lifeline Features</li>
            <li>How Do I Qualify</li>
            <li> FAQs/Help Center</li>
          </ul>
          <ul>
            <li>
              <strong>Get Connected</strong>
            </li>
            <li>
              <i class="fab fa-facebook fa-lg">Like Us on Facebook!</i>
            </li>
            <li>
              <i class="fab fa-twitter fa-lg">Follow Us on Twitter!</i>
            </li>
            <li>
              <i class="fab fa-instagram fa-lg">
                Hang out with us on Instagram
              </i>
            </li>
            <li>
              <i class="fas fa-clipboard fa-lg"> See What We Have To Say</i>
            </li>
            <li>
              <i class="fas fa-info fa-lg"> Get Help Here</i>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Testimonials</strong>
            </li>
            <li>
              <i>
                "I love new phone from Q Link Wireless because it is
                <br />
                easy to use and now I will never be without a phone. <br />
                Thanks Q Link!"
              </i>
            </li>
            <li>
              <i>
                "Q Link's service never lets me down. They sent me an
                <br />
                excellent phone which I love and I have never had a <br />
                problem. I use my phoen to make appointments and
                <br />
                stay connected with my work, friends and family.
              </i>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
