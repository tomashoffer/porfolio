import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => {
  return (
    <Section id='about'>
        <SectionDivider />
        <br />
      <SectionTitle>About me</SectionTitle>
      <SectionText>
          I am a Full-Stack Developer just moved to Israel. All my life i was linked to business management until I entered the world of programming which made me want to always challenge myself. I joined a Full Stack Coding Bootcamp where i learnt the ins and outs of development and have never looked back since. 
      </SectionText>
      <SectionText>
      I’m passionate about using technology and software to solve complex problems and translate innovative ideas to elegant tech solutions. My goal is to constantly keep on learning and developing myself in the software industry. I’m looking for a position as a full stack developer where I can leverage my skills and learn along the way.
      </SectionText>
    </Section>
  );
};

export default About;
