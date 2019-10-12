import React, { FC, useContext } from 'react';
import { UserContext } from '../../context';

interface IUserProps {
  [key: string]: any;
}

const User: FC<IUserProps> = () => {
  const { user } = useContext<any>(UserContext);

  return <div>{user.displayName}</div>;
};

export default User;
