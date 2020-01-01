import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Bold } from '../reusableStyles/typography/Typography';
import {
  Container,
  BlurbContainer,
  CustomH2,
  CustomP,
  ImageContainer,
  StyledImage,
  CustomPHome,
} from './HomeStyling';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import NoStyleLink from '../Links/NoStyleLink';

const CustomContainer = styled(Container)`
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const AboutOurFood = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "recipes/Whole_Roasted_fish.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <CustomContainer>
      <ImageContainer>
        <StyledImage fluid={image.sharp.fluid} fadeIn="soft" />
      </ImageContainer>
      <BlurbContainer>
        <CustomH2>About Our Food</CustomH2>
        <CustomP>From Our Kitchen to Your Table</CustomP>
        <CustomPHome>
          Our food is derived from a combination of
          <Bold> popular street foods </Bold> enjoyed in most Regions in
          Cameroon. However, am putting my spin on it. Incorporated in our food
          is a mixture of blended African nuts, infused with scented leaves that
          upshots an aromatic flavour having you taste your lips in
          anticipation.
        </CustomPHome>
        <CustomPHome>
          Our food is mostly done on grill...the smokey tender taste. The exotic
          lingering flavour. You know what they say about going black...HA!
          (CHARCOAL). The taste just can't be beat! Our food is mostly
          <Bold> spicy </Bold> but can be done to accommodate your tolerance to
          heat. Food is cooked in our home boosting Hygienization, Warmth and
          LOVE.{' '}
          <span role="img" aria-label="">
            ❤️
          </span>
        </CustomPHome>
        <ButtonStyle2>
          <NoStyleLink to="/recipes">View Recipes</NoStyleLink>
        </ButtonStyle2>
      </BlurbContainer>
    </CustomContainer>
  );
};

export default AboutOurFood;