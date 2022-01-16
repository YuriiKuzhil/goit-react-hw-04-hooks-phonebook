import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 15px;

  @media screen and (min-width: 425px) {
    width: 425px;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
export const Title = styled.h1`
  margin-bottom: 15px;
  font-family: ${({ theme }) => theme.generalStyles.fontFamilyRaleway};
  color: ${({ theme }) => theme.generalStyles.titleColor};
`;
export const ContactsContainer = styled.div`
  @media screen and (max-width: 1023px) {
    border-top: 3px solid ${({ theme }) => theme.borderColor};
  }
  @media screen and (min-width: 1024px) {
    padding: 9px 15px 0;
    width: 400px;
  }
`;
export const ContactsTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;
export const PartsOfWord = styled.span`
  color: ${({ theme }) => theme.textColor};
`;

export const PhonebookFormWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 1024px) {
    padding: 0px 15px;
    width: 400px;
    margin-right: 120px;
  }
`;
