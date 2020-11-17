/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

import Layout from '../components/layout'
import ChatWidget from '../components/chatWidget'

import SEO from '../components/seo'

const IndexPage = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      transition: { delay: i === 0 ? 0.2 : i * 0.3 },
      opacity: 1,
      y: 0,
    }))
  }, [])
  return (
    <Layout>
      <SEO title="Test Page" />
      <ChatWidget />
      <HeroText
        // custom={0}
        custom={1}
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={controls}
      >
        Test Pàge
      </HeroText>
      <P
        custom={1}
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={controls}
      >
        test....
      </P>
      <P
        custom={1}
        initial={{
          opacity: 0,
          y: 24,
        }}
        animate={controls}
      >
        Test.....
      </P>
      <LinksContainer>
        <SocialLink
          target="blank"
          href="https://github.com/"
          // custom={2}
          custom={1}
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={controls}
        >
          <div />
          Github
        </SocialLink>
        <SocialLink
          target="blank"
          href="https://dribbble.com"
          // custom={3}
          custom={1}
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={controls}
        >
          <div />
          Dribbble
        </SocialLink>
        <SocialLink
          target="blank"
          href="https://linkedin.com/in/"
          // custom={4}
          custom={1}
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={controls}
        >
          <div />
          LinkedIn
        </SocialLink>
      </LinksContainer>
    </Layout>
  )
}

const HeroText = styled(motion.h1)`
  padding: 60px 0 8px 0;
  font-family: ${props => props.theme.font.headlineExtra};
`

const P = styled(motion.p)`
  font-family: ${props => props.theme.font.paragraphLight};
  hyphens: none;
`

const LinksContainer = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
`

/* Alternative way to type a bunch of styled props
interface SocialLinkProps {
  dotColor?: string
}
styled(motion.a)<LinkProps>
*/
const SocialLink = styled(motion.a)<{ dotColor?: string }>`
  padding-bottom: 16px;
  font-family: ${props => props.theme.font.paragraphLight};
  color: ${props => props.theme.palette.lightAccent};
  display: flex;
  align-items: center;
  div {
    width: ${props => props.dotColor && '8px'};
    height: ${props => props.dotColor && '8px'};
    border-radius: ${props => props.dotColor && '16px'};
    background-color: ${props => props.dotColor};
    display: inline-block;
    margin: ${props => props.dotColor && '0 8px 0 0'};
  }
`


