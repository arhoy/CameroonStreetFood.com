import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

import { FaAlignRight } from 'react-icons/fa';

import styled from '@emotion/styled';

import { MobileMenu1 } from '../menus-mobile/Main/MobileMenu1';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

import NoStyleLink from '../Links/NoStyleLink';

const Header = styled.header`
  height: 80px;
  position: relative;

  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};

  display: flex;

  margin: 0 auto;

  justify-content: space-around;
  align-items: center;

  z-index: 1;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
  }
`;

const Logo = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
`;
const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  font-size: 2.9rem;
  padding: 0;
  margin: 0;

  text-decoration: none !important;
`;

const NavContainer = styled.nav`
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const BurgerIcon = styled(FaAlignRight)`
  cursor: pointer;
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomButtonStyle2 = styled(ButtonStyle2)`
  font-size: 1.6rem;
  display: flex;
`;

const CustomLink = styled(NoStyleLink)`
  color: ${props => props.theme.colors.white};
  height: 100%;
  padding: 1rem;
  margin: 1rem;
  & :hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const LogoImage = styled.img`
  max-height: 80px;
`;

const NavSuperStore1 = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "FoodInviteLogo.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 600) {
            src
          }
        }
      }
    }
  `);

  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <Logo>
          <LogoLink to="/">
            <LogoImage src={image.sharp.fluid.src} />
          </LogoLink>
        </Logo>

        <NavContainer>
          <CustomLink to="/">Home </CustomLink>
          <CustomLink to="/recipes">Recipes </CustomLink>
          <CustomLink to="/delivery">Delivery </CustomLink>

          {/* <MyMenu3 color={'white'} title={`Recipes`}>
            <Container1200>
              <MegaMenu2 background={'white'}>
                <MainList2 />
              </MegaMenu2>
            </Container1200>
          </MyMenu3> */}

          <CustomButtonStyle2>
            <a href="tel:587-920-9921">587-920-9921</a>
          </CustomButtonStyle2>
        </NavContainer>

        <BurgerIcon onClick={mobileMenuHandler} />
        {mobileMenuOpen ? (
          <MobileMenu1 mobileMenuHandler={mobileMenuHandler} />
        ) : null}
      </Header>
    </>
  );
};

export default NavSuperStore1;
