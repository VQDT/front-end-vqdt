import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Image from "./Image";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAuth from "../../context/auth/useAuth";
import { MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from "@mui/material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    name: "Provas",
    to: "/",
  },
  {
    name: "changeRole",
    to: ""
  },
  {
    name: "Sair",
    to: "/auth",
  },
  
];

function Header({ window }: Props) {

  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentRoleinList, setCurrentRoleinList] = useState<''| HTMLSelectElement | undefined>()

  const { loggout, setCurrentRole, roles } = useAuth();

  const handleChange = (event: SelectChangeEvent<HTMLSelectElement>) => {
    setCurrentRole(event.target.value as string);
    setCurrentRoleinList(event.target.value as HTMLSelectElement);
  };
  
  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const linkListDrawer = navItems.map((item) => {
    return (
      <div key={item.name}>
        <Divider />
        <ListItem disablePadding>
          <Link
            to={item.to}
            className="
              h-16 w-full pl-3
              text-Blue text-xl font-semibold uppercase
              hover:bg-Light
              flex items-center"
          >
            {item.name}
          </Link>
        </ListItem>
        <Divider />
      </div>
    );
  });

  const linkList = navItems.map((item) => {
    if (item.name === "Sair") {
      return (
        <Link
          key={item.name}
          to={item.to}
          onClick={loggout}
          className="
          h-full py-0 px-5 
          rounded-none text-lg 
          text-White hover:text-LightTextSecondary font-semibold
          flex justify-center items-center gap-1"
        >
          <RiLogoutBoxRLine className="flex-shrink-0" />
          {item.name}
        </Link>
      );
    }
    else if (item.name === "changeRole") {
      return(
        <Select
          value={currentRoleinList}
          onChange={handleChange}
          className="border-2 border-white m-2"
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {
            roles && roles.map(
              role => (
                <MenuItem className="text-white" value={role.name} id={role.id.toString()}>{role.name}</MenuItem>
              )
            )
          }
        </Select>
      )
    }
    else {
      return (
        <Link
          key={item.name}
          to={item.to}
          className="
            h-full py-0 px-5 
            border-r border-White rounded-none text-lg 
            text-White hover:text-LightTextSecondary uppercase font-semibold
            flex justify-center items-center gap-1"
        >
          {item.name}
        </Link>
      );
    }
  });

  const drawer = (
    <>
      <Box onClick={handleDrawerToggle}>
        <div className="w-full">
          <Image src={logo} />
        </div>
        <List className="flex-nowrap">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={'age'}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          {linkListDrawer}
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="h-16 flex">
      <AppBar
        component="nav"
        className="shadow-sm h-16"
        sx={{ boxShadow: "none" }}
      >
        <Toolbar
          className="w-full bg-Blue flex items-center justify-between"
          sx={{ padding: { xs: "0", sm: "0", sx: "0" } }}
        >
          <div className="h-full">
            <Image src={logo} />
          </div>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="ml-auto"
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box className="h-full hidden sm:flex">{linkList}</Box>
        </Toolbar>
      </AppBar>

      <nav>

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          className="lg:block sm:none"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}

export default Header;
