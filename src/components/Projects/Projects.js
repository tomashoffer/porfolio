import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider/>
    <br />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, language, code, visit}) => (
        <div>
           <BlogCard key={id}>
              <Img src={image}/>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr/>
                <CardInfo>{description}</CardInfo>
              </TitleContent>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <div>
                Language: {language}
              </div>
              <UtilityList>
                <ExternalLinks href={code}>Code</ExternalLinks>              
                <ExternalLinks href={visit}>Visit</ExternalLinks>              
              </UtilityList>
           </BlogCard>
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;