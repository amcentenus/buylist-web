import React from 'react';
import { getUser } from './localStorage';

const UserContext = React.createContext(getUser());

export default UserContext;