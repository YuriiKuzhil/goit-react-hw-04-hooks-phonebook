const generalStyles = {
  timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  fontFamilyRoboto: 'Roboto, sans-serif',
  fontFamilyRaleway: 'Raleway, sans-serif',
  titleColor: '#882426',
  accentColor: '#c05805',
  white: '#fff',
};
export const theme = {
  dark: {
    textColor: '#cdbea7',
    backgroundColor: '#233030',
    buttonBackground: '#cdbea7',
    borderColor: '#882426',
    inputBorderColor: '#cdbea7',
    generalStyles,
  },

  light: {
    textColor: '#233030',
    backgroundColor: '#cdbea7',
    buttonBackground: '#f4ebdb',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    inputBorderColor: '#233030',
    generalStyles,
  },
};
