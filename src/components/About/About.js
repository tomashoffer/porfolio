import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => {
  return (
    <Section id='about'>
        <SectionDivider />
        <br />
      <SectionTitle>About me</SectionTitle>
      <SectionText>Hola como estas aca tamb rellena loco!</SectionText>
    </Section>
  );
};

export default About;
