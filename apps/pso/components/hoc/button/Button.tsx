import React from 'react';
import { Button, ButtonProps } from '@components/Button';


interface ButtonPropsHoc extends ButtonProps {
  primary?: boolean;
}

const ButtonWrapper: React.FunctionComponent<ButtonPropsHoc> = (props) => {
  return (
    <Button {...props} />
  );
};

export default ButtonWrapper; 