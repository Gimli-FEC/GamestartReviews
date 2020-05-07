import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ avatar }) => (
  <>
    <img alt="user-avatar" src={avatar} />
  </>
);

Avatar.propTypes = { avatar: PropTypes.string.isRequired };

export default Avatar;
