import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../Icon";
import { bool, string, oneOf } from "prop-types";
import {colors, typography as t, spacing, radius} from "../../tokens";
import {spacing2XlTop, spacingBaseBottom, spacingMdLeft, spacingMdRight, spacingXlTop} from '../../tokens/dist/spacing';

/* Card
 *
 * Card component displays product image, name and price
 */

export const Card = ({
  as,
  size = "medium",
  image,
  name,
  description,
  price,
  ...props
}) => {
  return (
    <StyledCard as={as} size={size} {...props}>
      {size === "big" && (
        <StyledButton isOutline>
          <Icon name="heart" />
        </StyledButton>
      )}
      <StyledCardImage src={image} alt={name} size={size} />
      <StyledCardInfo size={size}>
        {size !== "medium" && (
          <StyledCardDescription size={size}>
            {description}
          </StyledCardDescription>
        )}
        <StyledMainInfoWrapper size={size}>
          <StyledCardName size={size}>{name}</StyledCardName>
          <StyledCardPrice size={size}>{price}</StyledCardPrice>
        </StyledMainInfoWrapper>
      </StyledCardInfo>
    </StyledCard>
  );
};

Card.propTypes = {
  size: oneOf(["small", "medium", "big"]),
  image: string,
  name: string,
  price: string,
  description: string,
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-decoration: none;
  color: inherit;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  ${({ size }) =>
    size === "small" &&
    `height: 100px; 
    flex-direction: row;`}
  ${({ size }) => size === "big" && `margin-bottom: ${spacing.spacing3XlBottom};`}
`;

const StyledCardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: ${({ size }) =>
    size === "big" ? spacing.spacing2XlBottom : size === "small" ? "0px" : spacing.spacingXlBottom};
  display: block;
  border-radius: ${radius.radii32Radius};
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin: ${spacing.spacing2XlTop};
`;

const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${({ size }) =>
    size == "small" &&
    `
     flex-grow: 1;
     margin-left: ${spacing.spacingMdLeft};
     align-content: flex-start;
     max-width: 60%;`}
`;

const StyledCardDescription = styled.p`
  margin-bottom: 8px;
  opacity: 0.6;
  ${({ size }) => size === "small" && `order: 5;`}
`;

const StyledMainInfoWrapper = styled.div`
  ${({ size }) =>
    size === "small" &&
    `display: inline-flex; 
    flex-wrap: nowrap; 
    flex-direction: row;`}
`;

const StyledCardName = styled.h2`
  ${({ size }) => {
    if (size === "big") {
      return `
        font-family: ${t.headline1FontFamily};
        font-size: ${t.headline1FontSize};
        line-height: ${t.headline1LineHeight};
        font-weight: ${t.headline1FontWeight};
        font-style: ${t.headline1FontStyle};
        letter-spacing: ${t.headline1LetterSpacing};`;
    } else if (size === "medium") {
      return `
        font-family: ${t.headline4FontFamily};
        font-size: ${t.headline4FontSize};
        line-height: ${t.headline4LineHeight};
        font-weight: ${t.headline4FontWeight};
        font-style: ${t.headline4FontStyle};
        letter-spacing: ${t.headline4LetterSpacing};
        margin-bottom: ${spacing.spacingBaseBottom};
    `;
    } else {
      return `
        font-family: ${t.headline6FontFamily};
        font-size: ${t.headline6FontSize};
        line-height: ${t.headline6LineHeight};
        font-weight: ${t.headline6FontWeight};
        font-style: ${t.headline6FontStyle};
        letter-spacing: ${t.headline6LetterSpacing};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-right: ${spacing.spacingMdRight};
    `;
    }
  }}
`;

const StyledCardPrice = styled.p`
  color: ${colors.primary500};
  margin-top: ${spacing.spacingBaseTop};
  font-weight: 500;
  ${({ size }) => {
    if (size === "big") {
      return `
        font-family: ${t.headline2FontFamily};
        font-size: ${t.headline2FontSize};
        line-height: ${t.headline2LineHeight};
        font-weight: ${t.headline2FontWeight};
        font-style: ${t.headline2FontStyle};
        letter-spacing: ${t.headline1LetterSpacing};
        color: ${colors.primary500};
        margin-top: ${spacing.spacingXlTop};`;
    } else if (size === "small") {
      return `
        color: ${colors.onBackground500}; 
        margin-top: 0; 
        margin-left: auto; 
        font-weight: ${t.headline2FontWeight};`;
    }
  }}
`;

export default Card;
