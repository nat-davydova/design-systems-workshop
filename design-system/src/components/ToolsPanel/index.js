import React from "react";
import styled from "styled-components";
import { Icon, Button, colors } from "../..";

/* ToolsPanel
 *
 * Filters and sorting
 */

const ToolsPanel = () => (
  <StyledToolsPanel>
    <h4>All Product</h4>
    <StyledIconWrapper>
      <StyledButton color="transparent">
        <Icon name="viewItem" width={24} height={16} />
      </StyledButton>
      <StyledButton color="transparent">
        <Icon name="viewGrid" width={24} height={16} />
      </StyledButton>
      <StyledBorder />
      <StyledButton color="transparent">
        <Icon name="filter" width={24} height={16} />
      </StyledButton>
    </StyledIconWrapper>
  </StyledToolsPanel>
);

const StyledToolsPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  padding: 0;
  border: 0;
  margin: 0 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${colors.onSurface100};
  margin: 0 8px;
`;

export default ToolsPanel;
