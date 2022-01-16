import styled from 'styled-components';
import { FaTrash, FaUserTie } from 'react-icons/fa';

export const TrashIcon = styled(FaTrash)``;
export const UserIcon = styled(FaUserTie)`
  margin-right: 15px;
`;

export const ListItem = styled.li`
  text-align: center;

  @media screen and (min-width: 400px) {
    display: flex;
    align-items: center;
  }

  transition: background-color 250ms
      ${({ theme }) => theme.generalStyles.timingFunction},
    color 250ms ${({ theme }) => theme.generalStyles.timingFunction};

  :not(:last-child) {
    margin-bottom: 10px;
  }
  :focus,
  :hover {
    color: ${({ theme }) => theme.generalStyles.white};
    background-color: ${({ theme }) => theme.generalStyles.accentColor};
  }
`;
export const ItemText = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-right: 15px;
`;
export const ItemButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 425px) {
    margin: 0 0 0 auto;
  }

  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 4px;
  min-width: 80px;
  font-family: inherit;
  font-size: 14px;
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
