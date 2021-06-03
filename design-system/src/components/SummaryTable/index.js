import React from "react";
import styled from "styled-components";
import { string, shape, arrayOf } from "prop-types";
import {colors, spacing, typography} from '../../tokens';
import {spacing3XlTop, spacingLgTop} from '../../tokens/dist/spacing';
import {shadowDefault0Color} from '../../tokens/dist/colors';
import {headline6FontSize, headline6FontWeight, paragraph1FontSize} from '../../tokens/dist/typography';

/* SummaryTable
 *
 * SummaryTable displays order details in a table, each row has information on name and price for each item.
 */

const SummaryTable = ({ items, total, ...props }) => {
  return (
    items &&
    items.length > 0 && (
      <div {...props}>
        <StyledHeading>Summary</StyledHeading>
        <StyledGrid>
          {items.map((item) => (
            <React.Fragment key={item.name}>
              <p>{item.name}</p>
              <StyledPrice>{item.price}</StyledPrice>
            </React.Fragment>
          ))}
        </StyledGrid>
        {total && (
          <>
            <StyledBorder />
            <StyledGrid>
              <StyledItemName>Total</StyledItemName>
              <StyledTotal>{total}</StyledTotal>
            </StyledGrid>
          </>
        )}
      </div>
    )
  );
};

SummaryTable.propTypes = {
  items: arrayOf(
    shape({
      name: string,
      price: string,
    })
  ),
  total: string,
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: ${spacing.spacingLgTop}
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.shadowDefault0Color};
  margin: ${spacing.spacing3XlTop} 0;
`;

const StyledItemName = styled.p`
  font-size: ${typography.paragraph1FontSize};
  line-height: ${typography.paragraph1LineHeight};
`;

const StyledHeading = styled.h2`
  margin-bottom: ${spacing.spacing3XlTop}
`;

const StyledPrice = styled.div`
  font-family: "DM Sans";
  font-size: ${typography.headline6FontSize};
  font-weight: ${typography.headline6FontWeight};
  font-style: ${typography.headline6FontStyle};
  line-height: ${typography.headline6LineHeight};
  letter-spacing: ${typography.headline6LetterSpacing};
  text-align: right;
`;

const StyledTotal = styled.div`
  font-family: "DM Sans";
  font-size: ${typography.paragraph1FontSize};
  font-weight: ${typography.headline6FontWeight};
  font-style: ${typography.paragraph1FontStyle};
  line-height: ${typography.paragraph1LineHeight};
  letter-spacing: ${typography.paragraph1LetterSpacing};
  text-align: right;
`;

export default SummaryTable;
