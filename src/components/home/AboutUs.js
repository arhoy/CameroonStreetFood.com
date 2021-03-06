import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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

const AboutUs = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Container>
      <BlurbContainer>
        <CustomH2>About Me</CustomH2>
        <CustomP>My Roots...</CustomP>
        <CustomPHome>
          Hi,
          <br /> I am Claudine Arrey a Cameroonian Canadian based in Edmonton
          ALBERTA. I was birthed in West Africa in Cameroon's South West
          Region-Buea. I am a Daughter, Wife, Mum and <Bold>
            FOOD INVITE
          </Bold>{' '}
          is my baby!
        </CustomPHome>
        <CustomPHome>
          FOOD is HOSPITALITY. {`  `} In most African cultures it is how we say
          "I LOVE YOU." The phrase, "Parents are Our First Teachers" is not only
          true of my values and upbringing is how I grew in LOVE with food. My
          culinary skills are in-born and mostly perfected from watching my
          parents in synergy beam in cookery. My love for cooking comes from
          being a picky eater and wanting to create food that suits my taste
          bud. Also, just loving the traditional gender roles. I love to cater
          to loved ones around me...it is exuberant! And if you are reading
          this, <Bold>WELCOME TO THE FOOD INVITE FAMILY!</Bold>
        </CustomPHome>

        <ButtonStyle2>
          <NoStyleLink to="/recipes">View Recipes</NoStyleLink>
        </ButtonStyle2>
      </BlurbContainer>
      <ImageContainer>
        <StyledImage fluid={image.sharp.fluid} fadeIn={true} />
      </ImageContainer>
    </Container>
  );
};

export default AboutUs;
