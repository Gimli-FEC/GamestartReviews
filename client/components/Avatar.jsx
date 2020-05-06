import React from 'react';
import PropTypes from 'prop-types';

export default function Avatar({ avatar }) {
  return (
    <>
      <img alt="user-avatar" src={avatar} />
    </>
  );
}

Avatar.propTypes = { avatar: PropTypes.string.isRequired };
