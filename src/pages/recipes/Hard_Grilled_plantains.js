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
    heroImage: file(
      relativePath: { eq: "recipes/Hard_Grilled_plantains.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Hard_Grilled_plantains = ({ data }) => {
  return (
    <Layout>
      <Section>
        <Container1200>
          <Container>
            <Title>{recipeData && recipeData[4].title}</Title>
            <CustomImage fluid={data.heroImage.childImageSharp.fluid} />
            <SubContainer>
              <Description>
                {recipeData && recipeData[4].description}
              </Description>
              <Price>${recipeData && recipeData[4].price.toFixed(2)}</Price>
              {recipeData && recipeData[4].calories && (
                <Calories>
                  Calories: {` `}
                  {recipeData[4].calories}
                </Calories>
              )}
            </SubContainer>
          </Container>
        </Container1200>
      </Section>
    </Layout>
  );
};

export default Hard_Grilled_plantains;
