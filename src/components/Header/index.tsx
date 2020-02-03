import React from 'react';
import Switch from 'react-switch';

import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      Hello World
      <Switch 
        onChange={()=>{}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor=""
        onColor=""
      />
    </Container>
  )
};

export default Header;