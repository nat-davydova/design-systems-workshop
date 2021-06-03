import React from "react";
import styled from "styled-components";
import { node, string } from "prop-types";

/* Menu
 *
 * A wrapper component for the app Menu, with slots for two actions and a title.
 */
const Menu = ({ firstAction = null, title, lastAction = null }) => {
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
  margin-bottom: 40px;
  padding-top: 24px;
`;

const StyledTitle = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export default Menu;
