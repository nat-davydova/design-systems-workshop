import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { arrayOf, shape, string } from "prop-types";
import {colors, spacing} from '../../tokens';

/* Slider
 *
 * Simple Slider to display payment method options
 */
const Slider = ({ images, className, ...props }) => {
  return (
    <StyledSlider className={className}>
      <AwesomeSlider organicArrows={false} {...props}>
        {images &&
          images.map((image) => (
            <div key={image.source} style={{ display: "flex" }}>
              <img src={image.source} />
            </div>
          ))}
      </AwesomeSlider>
    </StyledSlider>
  );
};

Slider.propTypes = {
  images: arrayOf(shape({ source: string })).isRequired,
};

const StyledSlider = styled.div`
  > .awssld {
    --control-bullet-color: ${colors.onSurface500};
    --control-bullet-active-color: ${colors.onBackground500};
    --content-background-color: transparent;
    --loader-bar-color: ${colors.background500};
    --loader-bar-height: 1px;
  }
  .awssld__content > img,
  .awssld__content > video {
    object-fit: contain;
  }
  .awssld__bullets {
    position: relative;
    bottom: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
    height: 36px;
    align-items: flex-end;
    button {
      width: 8px;
      height: 8px;
      margin: 0 ${spacing.spacingSmBottom};
      opacity: 0.6;
      border-radius: 50%;
    }
    & > .awssld__bullets--active {
      transform: none;
    }
  }
`;

export default Slider;
