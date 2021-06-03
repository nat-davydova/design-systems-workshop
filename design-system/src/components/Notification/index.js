import React from "react";
import styled from "styled-components";
import Button from "../Button";
import {spacing, boxShadow, radius } from "../../tokens"
/* Notification
 *
 * TODO: add component description
 */

/* use "as" prop to pass Link component of React Router, when you implement this component into product */
const Notification = ({as, props}) => {
    const component = as || "a";
    return (
        <StyledNotification>
            <p>Added to your cart</p>
            <Button as={component} to="/checkout" isBorderless>
                Checkout
            </Button>
        </StyledNotification>
    );
};

export const StyledNotification = styled.div`
  display: flex;
  box-shadow: ${boxShadow.shadowDefault1OffsetX} ${boxShadow.shadowDefault0OffsetY} ${boxShadow.shadowDefault0Radius} ${boxShadow.shadowDefault0Spread} ${boxShadow.shadowDefault0Color};
  padding: ${spacing.spacingXlTop} ${spacing.spacing2XlTop};
  justify-content: space-between;
  border-radius:${radius.radii16RadiiBottomLeft};
  margin-top: ${spacing.spacing2XlTop};
`;

export default Notification;
