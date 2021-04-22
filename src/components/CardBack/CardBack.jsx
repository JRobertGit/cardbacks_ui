import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)`
  background-color: #1a1b20;
  border-color: #148eff;
  height: 392px;
  width: 222px;
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: #0074e0;
  color: #fff;
  font-size: 18px;
  padding: 8px 12px;
`;

const StyledCardImage = styled(Card.Img)`
  margin: 8px auto;
  width: 150px;
`;

const StyledCardBody = styled(Card.Body)`
  overflow: scroll;
  padding: 8px 12px;
`;

const StyledCardTitle = styled(Card.Title)`
  color: #ffb400;
  line-height: 1.3;
  font-size: 14px;
  margin-bottom: 8px;
`;

const StyledCardText = styled(Card.Text)`
  color: hsla(0, 0%, 100%, 0.72);
  font-size: 12px;
`;

const CardBack = ({ cardBack }) => (
  <StyledCard key={cardBack.id}>
    <StyledCardHeader>{cardBack.name}</StyledCardHeader>
    <StyledCardImage src={cardBack.image} />
    <StyledCardBody>
      <StyledCardTitle>{cardBack.slug}</StyledCardTitle>
      <StyledCardText>{cardBack.text}</StyledCardText>
    </StyledCardBody>
  </StyledCard>
);

CardBack.propTypes = {
  cardBack: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardBack;
