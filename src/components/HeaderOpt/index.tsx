import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from "../Header/Image";
import logo from "../../assets/logo.png";
import { useState } from 'react';
import { AiOutlineLogout, AiOutlineRollback } from 'react-icons/ai';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Provas', 'Dados Pessoais', 'Sair'];

export default function HeaderOpt(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          item === 'Sair' ? <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' , bgcolor: '#000'}}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem> : <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: '#000' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className='pt-20'>
      <CssBaseline />
      <AppBar component="nav" variant='outlined' sx={{bgcolor:'#108ABD'}}>
        <Toolbar sx={{ paddingLeft: { sm: "0 !important"  }}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Image src={logo} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='bg-[#108ABD]'>
            {navItems.map((item) => (

                item === 'Sair' ?
              <Button key={item} sx={{ color: '#ffffff', marginLeft:2 ,  border:1 }} className='gap-1'>
                <AiOutlineLogout />
                {item}
              </Button>:
              <Button key={item} sx={{ color: '#ffffff' }}>
              {item}
            </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}