import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
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

const Selections = styled.div`
  position: absolute;
  display: block;
  border: 1px darkgray solid;
  width: 230px;
  padding: 0;
  z-index: 2;
  span {
    display: block;
    background-color: white;
    padding: 8px 30px 8px 10px;
  }
  span:hover {
    background-color: #da291c;
    color: white;
  }
`;

const DropDown = ({ selectionsArray, handleSortChange }) => {
  const [selected, setSelected] = useState(selectionsArray[0]);
  const [displayMenu, setDisplayMenu] = useState(false);

  const onMenuToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  const onSelectionClick = (e) => {
    onMenuToggle();
    setSelected(e.target.innerText);
    handleSortChange(e);
  };

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
            {selectionsArray.map(
              (selection, index) => (
                <span
                  role="option"
                  aria-selected
                  tabIndex={0}
                  key={index.toString()}
                  onClick={onSelectionClick}
                  onKeyUp={onSelectionClick}
                >
                  {selection}
                </span>
              ),
            )}
          </Selections>
        )}
      </SelectMenu>
    </div>
  );
};

DropDown.propTypes = {
  selectionsArray: PropTypes.arrayOf(string).isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default DropDown;
