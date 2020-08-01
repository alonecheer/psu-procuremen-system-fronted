import React from "react";
import FooterStyleWrapper from "./footer.style.js";
const Footer = () => {
  return (
    <FooterStyleWrapper>
      <title>Footer</title>
      <footer>
        <div className="copyright">
          <div className="container">
            <div className="copy-grid">
              <div className="copytext">
                <p>
                  Copyright © 2020 Jetnipat Thankeatphangan - All Rights
                  Reserved
                </p>
              </div>
              <div className="creadit">
                <p>#CoE 6035512021</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyleWrapper>
  );
};
export default Footer;
