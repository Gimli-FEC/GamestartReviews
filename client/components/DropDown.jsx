import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const SelectMenu = styled.div`
  display: inline-block;
  float: right;
  margin: 20px;
  span {
    font-weight: bold;
    font-size: .9em;
  }
  span:nth-child(2) {
    border: 1pt transparent dotted;
  }
  &:hover span:nth-child(2){
    border-color: black;
  }
  svg {
    margin-left: 5px;
  }
`;

const Selections = styled.ul`
  position: absolute;
  list-style: none;
  border: 1px darkgray solid;
  width: 230px;
  padding: 0;
  z-index: 2;
  li {
    background-color: white;
    padding: 8px 30px 8px 10px;
  }
  li:hover {
    background-color: #da291c;
    color: white;
  }
`;

const DropDown = ({ handleSortChange }) => {
  const [selected, setSelected] = useState('Most Recent');
  const [displayMenu, setDisplayMenu] = useState(false);

  const onMenuToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  const onSelectionClick = (e) => {
    onMenuToggle();
    setSelected(e.target.innerText);
    handleSortChange(e);
  };

  const selections = ['Most Recent', 'Highest to Lowest Rating', 'Lowest to Highest Rating'];

  return (
    <div>
      <SelectMenu>
        <div onFocus={onMenuToggle} onMouseOver={onMenuToggle}>
          <span>Sort by: </span>
          <span>{selected}</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        { displayMenu
        && (
          <Selections>
            {selections.map(
              (selection, index) => <li key={index.toString()} onClick={onSelectionClick}>{selection}</li>,
            )}
          </Selections>
        )}
      </SelectMenu>
    </div>
  );
};

DropDown.propTypes = {
  handleSortChange: PropTypes.func.isRequired,
};

export default DropDown;
