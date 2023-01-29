import React from "react";
import logo from "../../imgs/logo.png";
import styled from "styled-components";
import theme from "../../styles/theme";

const Banner = () => {
  const BannerBackground = styled.div`
    background-color: ${theme.dark};
  `;

  return (
    <BannerBackground>
      <div className="banner text-white">
        <div className="container p-4 text-center">
          <img src={logo} alt="banner" />
          <div>
            <span>A place to </span>
            <span id="get-part">get</span>
            <span> the cool stuff.</span>
          </div>
        </div>
      </div>
    </BannerBackground>
  );
};

export default Banner;
