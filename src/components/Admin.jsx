import React from 'react';
import PropTypes from 'prop-types';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
    </div>
  );
}
Admin.propTypes = {
    ticketList: PropTypes.array
}
export default Admin;