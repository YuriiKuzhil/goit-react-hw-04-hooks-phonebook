import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { Text, Wrapper, Label } from './ThemeSwitch.styled';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeSwitch({ themeChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = checked => {
    setChecked(checked);
    themeChange(checked);
  };
  useEffect(() => {
    const themeStyle = localStorage.getItem('themeStyle');
    themeStyle === 'dark' ? setChecked(true) : setChecked(false);
  }, []);

  return (
    <Label>
      <Switch
        checked={checked}
        onChange={handleChange}
        height={30}
        width={65}
        offColor="#c05805"
        onColor="#cdbea7"
        uncheckedIcon={<Text>DAY MODE</Text>}
        checkedIcon={<Text>NIGHT MODE</Text>}
        uncheckedHandleIcon={
          <Wrapper>
            <FaSun />
          </Wrapper>
        }
        checkedHandleIcon={
          <Wrapper>
            <FaMoon />
          </Wrapper>
        }
      />
    </Label>
  );
}
ThemeSwitch.propTypes = {
  themeChange: PropTypes.func.isRequired,
};
