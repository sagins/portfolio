import React from 'react';
import { DiDatabase, DiFirebase, DiJavascript, DiJira, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a variety of technologies in programming world. 
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size = "3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with 
            JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDatabase size = "3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with 
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJira size = "3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with 
            Jira
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with 
            Jira
          </ListParagraph>
        </ListContainer>
      </ListItem> */}

    </List>
     
  </Section>
);

export default Technologies;
