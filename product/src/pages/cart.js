import React from "react";
import styled from "styled-components";
import {Button, Menu, Icon, SummaryTable,Avatar, Card, colors} from "design-system";
import {Link} from "react-router-dom";

const data = require("../data/data.js");
const items = data.products;

const Cart = ({
                  match: {
                      params: {id},
                  },
              }) => {
    const item = items[id];
    return (
        <div>
            <StyledDiv1>
                <Menu firstAction={<Avatar src={data.user.avatar} />}
                      lastAction={
                          <Button isOutline>
                              <Icon name="menu" />
                          </Button>
                      } />
                <Styledh1>Shopping Cart</Styledh1>
                <Card
                    description={item.description}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    size="small"
                />
                <StyledBorder/>
                <StyledDiv5>
                    <SummaryTable
                        items={[
                            {name: "Subtotal", price: item.price},
                            {name: "Estimated Delivery & Handling", price: "€0.00"},
                        ]}
                        total={item.price}
                    />
                    <Button as={Link} to="/checkout" isStretched>
                        Checkout
                    </Button>
                </StyledDiv5>
            </StyledDiv1>
        </div>
    );
};

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

const StyledDiv5 = styled.div`
  margin-top: 32px;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.onSurface100};
  margin: 32px 0;
`;

export default Cart;
