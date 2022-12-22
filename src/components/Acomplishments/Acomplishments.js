import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Software Projects'},
  { number: 100, text: 'Accomplishment Rate', },
  { number: 100, text: 'Positive Feedback', },
  { number: 1, text: 'Work Experience', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          
          {card.number === 100 ? (
            <BoxNum>{card.number}%</BoxNum>
          ) : (
            <BoxNum>{card.number}+</BoxNum>
          )}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
