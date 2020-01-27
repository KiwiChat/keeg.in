import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

interface SidebarProps {
  href: string
}

const Sidebar: React.FC<SidebarProps> = ({ href }) => {
  const data = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "keegin-avatar" }
      ) {
        childImageSharp {
          fixed(width: 44, height: 44) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <StyledSidebar>
      <StyledLink to={href}>
        <Name>Software Engineer</Name>
      </StyledLink>
      <About>Columbia, MO based Front End Engineer currently @Paytient</About>
      <Avatar>
        <StyledImage fixed={data.file.childImageSharp.fixed} />
      </Avatar>
    </StyledSidebar>
  )
}

export default Sidebar

// background-color: ${props => props.theme.colors.secondary};
const StyledSidebar = styled.div`
  width: 100vh;
  height: 5rem;
  position: fixed;
  top: -5rem;
  left: 0;
  z-index: 11;
  background-color: ${props => props.theme.global.background};
  align-items: center;
  transform: rotateZ(90deg);
  transform-origin: bottom left;
  padding: 0 16px;
  border-top: 1px solid #151419;
  display: flex;
  justify-content: space-between;
  color: white;
  /* @media screen and (min-width: 52em) {
    display: flex;
  } */
`

const StyledImage = styled(Img)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: 2px solid paleturquoise;
`

// color: ${props => props.theme.colors.primary};
const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  font-size: 12px;
`
const Name = styled.span`
  text-decoration: none;
  border-bottom: 0;
  color: white;
  padding: 0px 24px 0px 0px;
  font-family: ${props => props.theme.font.headlineExtra};
`
// color: ${props => props.theme.colors.primary};
const About = styled.span`
  color: paleturquoise;
  font-family: ${props => props.theme.font.paragraphLight};
  font-size: 14px;
  font-weight: 300;
`

const Avatar = styled.span`
  margin-left: auto;
  transform: rotateZ(-90deg);
  z-index: 100;
`
