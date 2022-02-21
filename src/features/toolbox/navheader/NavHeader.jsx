import React from 'react';
import { SiInstagram } from 'react-icons/si';
import { ImLinkedin2, ImFacebook } from 'react-icons/im';

const NavHeader = ({ textColor, borderBgColor }) => {
  return (
    <div className={`${borderBgColor} mobile-padding normalize-padding d-flex justify-between align-center`}>
      <div>
        <a
          href="mailto:info@twc.az"
          className={`text-decoration-none ${textColor} nav-header-links nav-link-padding-right`}
        >
          {' info@twc.az'}
        </a>
        <a
          href="tel:+994 50 447 10 90"
          className={`text-decoration-none mobile-display-none ${textColor} nav-header-links nav-link-padding-left`}
        >
          {'+994 50 447 10 90'}
        </a>
      </div>

      <div className="d-flex align-center">
        <a href="https://www.linkedin.com/company/think-wise-business-consulting">
          <ImLinkedin2 className={`${textColor} nav-icon-margin-right`} />
        </a>
        <a href="https://www.facebook.com/thinkwiseazerbaijan/">
          <ImFacebook className={`${textColor} nav-icon-margin-right`} />
        </a>
        <a href="https://www.instagram.com/thinkwise.consulting/">
          <SiInstagram className={`${textColor}`} />
        </a>
      </div>
    </div>
  );
};

export default NavHeader;
