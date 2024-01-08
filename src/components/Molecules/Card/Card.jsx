import React from 'react';
import PropTypes from 'prop-types';

export const card = ({primary }) => {
    const CardMode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
       <div>
       Card
       </div>
      );
};