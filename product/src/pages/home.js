/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, ToolsPanel, Menu, Avatar, Card } from "design-system";

const data = require("../data/data.js");

const Home = () => {
  return (
    <div>
      <StyledDiv1>
        <Menu firstAction={<Avatar src={data.user.avatar} />}
              lastAction={
                <Button isOutline>
                  <Icon name="menu" />
                </Button>
              } />
        <Styledh1>Store</Styledh1>

        <ToolsPanel />

        <StyledDiv5>
          {Object.entries(data.products).map(([id, item]) => {
            return (
              <Card
                description={item.description}
                image={item.image}
                name={item.name}
                price={item.price}
                size="medium"
              />
            );
          })}
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
`;

export default Home;
