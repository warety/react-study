import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import titleInitials from '../utils/title-initials';
import getColor from '../utils/color-form'

const MyAvatar = ({ colorFrom, children, ...rest }) => (
  <Avatar style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
    {titleInitials(children)}
  </Avatar>
)

export default MyAvatar;
