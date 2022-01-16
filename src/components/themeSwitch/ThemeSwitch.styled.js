import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  font-size: 19px;
  color: ${({ theme }) => theme.textColor};
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  font-size: 8px;
  font-weight: 700;
  padding-right: 2px;
  padding-left: 2px;
  color: #233030;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (min-width: 1024px) {
    right: -550px;
    top: 0;
  }
`;
