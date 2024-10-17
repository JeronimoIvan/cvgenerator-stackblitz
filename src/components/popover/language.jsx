import { useState } from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
//import { languagelist } from '../../constants';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';

const LanguagePopover = () => {
  const [open, setOpen] = useState(null);
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  return (
    <Tooltip title={t('tooltiplanguageicon')}>
      <IconButton>
        <p>djd</p>
      </IconButton>
    </Tooltip>
  );
};

export default LanguagePopover;

/*
import { useState } from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { languagelist } from '../../constants';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';

export default function LanguagePopover() {

    const [open, setOpen] = useState(null);
    const { t, i18n: { changeLanguage, language } } = useTranslation();


    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleLanguageChange = (lang) => {
        changeLanguage(lang);
        localStorage.setItem('LANGUAGE', lang);
        setOpen(false);
    }

    return (
        <>
            <Tooltip title={t('tooltiplanguageicon')}>
                <IconButton
                    onClick={handleOpen}
                    sx={{
                        width: 40,
                        height: 40,
                        ...(open && {
                            bgcolor: 'action.selected',
                        }),
                    }}
                >
                    {language === 'pt' && <img src={languagelist[0].icon} alt={languagelist[0].icon} />}
                    {language === 'en' && <img src={languagelist[1].icon} alt={languagelist[1].icon} />}
                </IconButton>
            </Tooltip>

            <Popover
                open={!!open}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 0,
                        mt: 1,
                        ml: 0.75,
                        width: 180,
                    },
                }}
            >
                {languagelist.map((option, index) => (
                    <MenuItem
                        key={option.value}
                        selected={language === languagelist[index].value}
                        onClick={() => handleLanguageChange(option.value)}
                        sx={{ typography: 'body2', py: 1 }}
                    >
                        <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

                        {option.label}
                    </MenuItem>
                ))}
            </Popover>
        </>
    );
}
*/
