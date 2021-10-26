import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Algun texto aca con una mini description, ahora es solo para relleno!
      </SectionText>
      <a href="#about"><Button>About me</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;