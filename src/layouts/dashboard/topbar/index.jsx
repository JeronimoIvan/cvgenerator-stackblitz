import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  useTheme,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Dimensions } from '../../../constants';
import { LanguagePopover, ThemePopover } from '../../../components';
import { useThemeContext } from '../../../contexts';
import { LightMode, DarkMode } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = (props) => {
  //const { onSideBarOpen } = props;
  const { t } = useTranslation();
  const { palette } = useTheme();
  const { themeName, toggleTheme } = useThemeContext();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: palette.background.default,
        width: { sm: `calc(100% - ${Dimensions.sideBarWidth}px)` },
        ml: { sm: `${Dimensions.sideBarWidth}px` },
      }}
    >
      <Toolbar>
        <LanguagePopover />
        <ThemePopover />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

/*

<Tooltip title={t('tooltipthemeicon')}>
          <IconButton onClick={toggleTheme}>
            {themeName === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Tooltip>
import { AppBar, Toolbar, IconButton, Tooltip, useTheme, Box } from "@mui/material";
import { Dimensions } from "../../constants";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../contexts/ThemeProvider";
import { LightMode, DarkMode } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';

import { LanguagePopover } from "../../components";

export default function TopBar(props) {

    // eslint-disable-next-line react/prop-types
    const { onSideBarOpen } = props;
    const { t } = useTranslation();
    const { palette } = useTheme();
    const { themeName, toggleTheme } = useThemeContext();

    return (
        <AppBar position="fixed" elevation={0} sx={{
            backgroundColor: palette.background.default,
            width: { sm: `calc(100% - ${Dimensions.SideBarWidth}px)` },
            ml: { sm: `${Dimensions.SideBarWidth}px` }
        }}>
            <Toolbar>

                <Tooltip title={t('tooltipdrawericon')}>
                    <IconButton
                        color={palette.background.contrastText}
                        aria-label="Open Menu"
                        edge="start"
                        onClick={onSideBarOpen}
                        sx={{
                            mr: 2, display: { sm: 'none' }
                        }}>
                        <MenuIcon />
                    </IconButton>
                </Tooltip>

                <Box sx={{ flexGrow: 1 }} />

                <LanguagePopover/>

                <Tooltip title={t('tooltipthemeicon')}>
                    <IconButton
                        onClick={toggleTheme}
                    >
                        {
                            themeName === 'dark' ?
                                <LightMode />
                                :
                                <DarkMode />
                        }
                    </IconButton>
                </Tooltip>


            </Toolbar>
        </AppBar>
    )
}






*/
