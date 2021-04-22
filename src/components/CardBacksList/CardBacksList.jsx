import React from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import CardBack from '../CardBack/CardBack';

const StyledListGroup = styled(ListGroup)`
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledCardBackListItem = styled(ListGroup.Item)`
  background: transparent;
  border: none;
`;

const CardBacksList = ({ cardBacks }) => (
  <StyledListGroup horizontal>
    {cardBacks.map((cardBack) => (
      <StyledCardBackListItem key={cardBack.id}>
        <CardBack cardBack={cardBack} />
      </StyledCardBackListItem>
    ))}
  </StyledListGroup>
);

CardBacksList.propTypes = {
  cardBacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

CardBacksList.defaultProps = {
  cardBacks: [],
};

export default CardBacksList;
