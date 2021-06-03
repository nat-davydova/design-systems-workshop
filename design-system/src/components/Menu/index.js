import React from "react";
import styled from "styled-components";
import {node, string} from "prop-types";
import { spacing } from "../../tokens"

/* Menu
 *
 * A wrapper component for the app Menu, with slots for two actions and a title.
 */
const Menu = ({firstAction = null, title, lastAction = null}) => {
    return (
        <StyledMenu>
            {firstAction}
            {title && (
                <StyledTitle>
                    <h4>{title}</h4>
                </StyledTitle>
            )}
            {lastAction}
        </StyledMenu>
    );
};

Menu.propTypes = {
    firstAction: node,
    lastAction: node,
    title: string,
};

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.spacing3XlTop};
  padding-top: ${spacing.spacing2XlTop};
`;

const StyledTitle = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: ${spacing.spacing2XlTop};
`;

export default Menu;
