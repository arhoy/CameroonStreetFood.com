import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/Layout';
import {
  Section,
  Container1200,
} from '../../components/reusableStyles/sections/Sections';

import {
  Container,
  SubContainer,
  CustomImage,
  Title,
  Description,
  Price,
  Calories,
} from '../../components/recipes/EachRecipePage';
import recipeData from '../../../apis/recipeData';

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "recipes/chicken_wing.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const chicken_wing = ({ data }) => {
  return (
    <Layout>
      <Section>
        <Container1200>
          <Container>
            <Title>{recipeData && recipeData[2].title}</Title>
            <CustomImage fluid={data.heroImage.childImageSharp.fluid} />
            <SubContainer>
              <Description>
                {recipeData && recipeData[2].description}
              </Description>
              <Price>${recipeData && recipeData[2].price.toFixed(2)}</Price>
              {recipeData && recipeData[2].calories && (
                <Calories>
                  Calories: {` `}
                  {recipeData[2].calories}
                </Calories>
              )}
            </SubContainer>
          </Container>
        </Container1200>
      </Section>
    </Layout>
  );
};

export default chicken_wing;