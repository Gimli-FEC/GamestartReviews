import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

const Name = styled.span`
  font-weight: bold;
`;

const NameDate = ({ name, date }) => (
  <>
    <Name>{name}</Name>
    <span> • </span>
    {moment(date).fromNow()}
  </>
);

NameDate.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NameDate;
