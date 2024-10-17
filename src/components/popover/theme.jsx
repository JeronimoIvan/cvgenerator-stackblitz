import { Tooltip, IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../../contexts';

const ThemePopover = () => {
  const { t } = useTranslation();
  const { themeName, toggleTheme } = useThemeContext();

  return (
    <Tooltip title={t('tooltipthemeicon')}>
      <IconButton onClick={toggleTheme}>
        {themeName === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemePopover;
