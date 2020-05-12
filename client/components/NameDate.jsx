import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: .8em;
`;

const Name = styled.span`
  margin: 0 5px 0 7px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Tooltip = styled.span`
  display: inline-block;
  background-color: darkgray;
  color: white;
  text-align: center;
  padding: 20px;
  border: 1px solid #888;
  position: absolute;
  z-index: 1;
  left: 50%;
  margin-left: -50%;
  top: 25px;
`;

const NameDate = ({
  name,
  date,
  age,
  purchaseType,
}) => {
  const [show, setShow] = useState(false);

  const toggleNameTooltip = () => {
    setShow(!show);
  };

  const tooltip = show ? <Tooltip onMouseLeave={(e) => toggleNameTooltip(e)}>{name}</Tooltip> : null;

  return (

      <Container>
        <Name name={name} onMouseEnter={(e) => toggleNameTooltip(e)}>
          {name}
        </Name>
        {tooltip}
      <span> • </span>
      {moment(date).fromNow()}
      </Container>

  );
};

NameDate.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  purchaseType: PropTypes.number.isRequired,
};

export default NameDate;
