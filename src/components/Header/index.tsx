import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Toolbar,
  Select,
  ListItem,
  List,
  Drawer,
  Divider,
  Box,
  AppBar,
  MenuItem,
} from "@mui/material";
import Image from "./Image";
import logo from "../../assets/logo.png";
import { ChangeEvent, useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { UserOutput } from "../../models/User";
import { navItems } from "./headerItems";
import { Button } from "@mui/material";
import { roleTranslation } from "./translateRole";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

function Header({ window }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { roles } = useAuthUser() as UserOutput;
  const currentRole = localStorage.getItem("currentRole") || "default";
  const signOut = useSignOut();

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const role = roles?.find((role) => role.name === value);
    if (role) localStorage.setItem("currentRole", role.name);
    navigate("/");
  };

  const handleSignOut = () => {
    signOut();
    localStorage.removeItem("currentRole");
    navigate("/login");
  };

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const linkListDrawer = navItems[currentRole].map((item) => {
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

  const selectRole = (
    <Select
      value={currentRole}
      defaultValue={currentRole}
      onChange={() => handleChange}
      className="border-2 border-white m-2 bg-Blue !text-white rounded-md p-2 appearance-none"
      sx={{
        '.MuiSvgIcon-root ': {
              fill: "white !important",
            }
      }}
    >
      {roles.map((op) => (
        <MenuItem key={op.id} value={op.name} id={op.id.toString()}>
          {roleTranslation[op.name]}
        </MenuItem>
      ))}
    </Select>
  );

  const linkList = navItems[currentRole].map((item) => (
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
  ));

  const drawer = (
    <>
      <Box onClick={handleDrawerToggle}>
        <div className="w-full">
          <Image src={logo} />
        </div>
        <List className="flex-nowrap">
          {roles && roles.length > 1 && selectRole}
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
          <Box className="h-full hidden sm:flex">
            {linkList}
            {roles.length >= 0 && selectRole}
            <Button
              variant="text"
              sx={{ color: "white", padding: "0 1rem" }}
              startIcon={<RiLogoutBoxRLine className="flex-shrink-0" />}
              key={"logout"}
              onClick={handleSignOut}
            >
              Sair
            </Button>
          </Box>
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
