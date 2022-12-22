import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br />
        I'm Emrehan
      </SectionTitle>
      <SectionText>
        I am a 2nd year computer science student at <a href="https://carleton.ca/">Carleton University</a> and a developer.
      </SectionText>
      <Button onClick = {() => window.location = "mailto:iamemrehansagin@hotmail.com"}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;