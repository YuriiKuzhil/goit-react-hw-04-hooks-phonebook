import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  bottom: 2px;
  left: 11px;
`;
export const Label = styled.label`
  position: relative;
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
