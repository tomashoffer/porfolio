import React from 'react';
import { DiFirebase, DiReact, DiGitCompare } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end to Front-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/> 
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML <br/>
            CSS <br/>
            Sass <br/>
            JavaScript (ES6) <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/> 
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br/>
            Express <br/>
            MySQL <br/>
            MongoDb <br/>
            Firebase <br/>
            Heroku 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGitCompare size="3rem"/> 
        <ListContainer>
          <ListTitle>Other relevant skills</ListTitle>
          <ListParagraph>
            REST APIs <br/>
            Unit-Testing <br/>
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
</Section>
);

export default Technologies;
