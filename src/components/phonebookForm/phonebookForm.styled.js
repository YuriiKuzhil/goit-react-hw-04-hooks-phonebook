import styled from 'styled-components';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

export const UserIcon = styled(FaUser)`
  position: absolute;
  bottom: 13px;
  left: 11px;
`;
export const PhoneIcon = styled(FaPhoneAlt)`
  position: absolute;
  bottom: 13px;
  left: 11px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;
export const Label = styled.label`
  position: relative;
  margin-bottom: 10px;
  font-size: 18px;
  transition: color 250ms ${({ theme }) => theme.generalStyles.timingFunction};

  :hover,
  :focus-within {
    color: ${({ theme }) => theme.generalStyles.accentColor};
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 50px;
  border: 2px solid ${({ theme }) => theme.inputBorderColor};
  border-radius: 4px;
  outline: none;
  transition: border-color 250ms
    ${({ theme }) => theme.generalStyles.timingFunction};

  :hover,
  :focus {
    border-color: ${({ theme }) => theme.generalStyles.accentColor};
  }
`;
export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 auto;
  min-width: 200px;
  font-family: inherit;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.buttonBackground};
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  cursor: pointer;
  transition: background-color 250ms
      ${({ theme }) => theme.generalStyles.timingFunction},
    color 250ms ${({ theme }) => theme.generalStyles.timingFunction};

  :hover,
  :focus-visible {
    color: ${({ theme }) => theme.generalStyles.white};
    background-color: ${({ theme }) => theme.generalStyles.accentColor};
  }
`;
