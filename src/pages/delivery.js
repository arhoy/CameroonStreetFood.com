import React from 'react';

import Layout from '../components/layouts/Layout';

import {
  Section,
  Container800,
} from '../components/reusableStyles/sections/Sections.js';

import {
  BlurbContainer,
  CustomH2,
  CustomP,
  CustomPHome,
} from '../components/home/HomeStyling';
import { ButtonStyle2 } from '../components/reusableStyles/buttons/Button';
import NoStyleLink from '../components/Links/NoStyleLink';
import { Bold } from '../components/reusableStyles/typography/Typography';

const DeliveryPage = () => {
  return (
    <Layout>
      <Section>
        <Container800>
          <BlurbContainer>
            <CustomH2>Delivery And Packaging</CustomH2>
            <CustomP>Our Food...</CustomP>
            <CustomPHome>
              Our food comes in a zip lock foil bag, BPA approved silver back
              clear front...lick proof, smell proof and it's reusable.
              <br />
              <br />
              Delivery on all catering orders within Edmonton.
              <br />
              Free delivery to North Locations on orders <Bold> $50</Bold> and
              over.
              <br />
              Free Deliveries to other parts of Edmonton for orders{' '}
              <Bold>$100</Bold> or more
            </CustomPHome>

            <CustomPHome>
              We season the heck outta our food...here is your FOOD INVITE!
              LET'S GO!
            </CustomPHome>
            <ButtonStyle2>
              <NoStyleLink to="/recipes">View Recipes</NoStyleLink>
            </ButtonStyle2>
          </BlurbContainer>
        </Container800>
      </Section>
    </Layout>
  );
};

export default DeliveryPage;
