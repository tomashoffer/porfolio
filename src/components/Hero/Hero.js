import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi, my name is <br/>
        Tomas
      </SectionTitle>
      <SectionText>
         Welcome to My Personal Portfolio
         
      </SectionText>
      <a href="#about"><Button>About me</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;