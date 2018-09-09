import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

ProfileName.propTypes = {
  name: PropTypes.string,
  isBiz: PropTypes.bool,
};

function ProfileName(props) {
  return (
    <div className="row justify-content-between w-100">
      <div></div>
      <h3>{props.name}</h3>
      { props.isBiz ?
        <Button
          bsStyle="success"
          className="button-size"
        >
          Update Profile
        </Button>
      :
        <div></div>
      }
    </div>
  );
}
export default ProfileName;
