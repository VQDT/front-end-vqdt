import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "../Header/Image";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Provas", "Dados Pessoais", "Sair"];

function HeaderOpt({ window }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const linkListDrawer = navItems.map((item) => {
    if (item === "Sair") {
      return (
        <>
          <Divider />
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textTransform: "uppercase",
                height: "64px",
                color: "#108ABD",
                fontWeight: "600",
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px"
              }}
            >
              <RiLogoutBoxRLine />
              <span className="text-center">{item}</span>
            </ListItemButton>
          </ListItem>
          <Divider />
        </>
      );
    } else {
      return (
        <>
          <Divider />
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textTransform: "uppercase",
                height: "64px",
                color: "#108ABD",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              <span className="mx-auto text-center">{item}</span>
            </ListItemButton>
          </ListItem>
        </>
      );
    }
  });

  const linkList = navItems.map((item) => {
    if (item === "Sair") {
      return (
        <Button key={item}
          sx={{ 
            height: "100%", padding: "0 1rem",
            borderRadius: "0", ":hover": { color: "#00000099"},
            color: "#ffffff", fontSize: "18px",
            display: "flex", justifyContent: "center", alignItems: "center", gap: "5px"
          }}
        >
          <RiLogoutBoxRLine className="flex-shrink-0"/>
          {item}
        </Button>
      );
    } else {
      return (
        <Button key={item} 
          sx={{ 
            height: "100%", padding: "0 1rem",
            borderRight: "1px solid #FFFFFF", borderRadius: "0", ":hover": { color: "#00000099"},
            color: "#ffffff", fontSize: "18px", 
            gap: 1,
          }}
        >
          { item }
        </Button>
      );
    }
  });

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ marginLeft: "auto", textAlign: "center" }}
    >
      <div className="w-full">
        <Image src={logo} />
      </div>
      <List sx={{ sx: { flexWrap: "nowrap" } }}>{linkListDrawer}</List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="h-16 flex">
      <AppBar
        component="nav"
        sx={{ bgcolor: "#108ABD", boxShadow: "none", height: "64px" }}
      >
        <Toolbar
          sx={{
            width: "100%",
            padding: { xs: "0", sm: "0", sx: "0" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="h-full">
            <Image src={logo} />
          </div>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              marginLeft: "auto",
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "flex" }, height: "100%" }}>
            {linkList}
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
          sx={{
            display: { xs: "block", sm: "none" },
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

export default HeaderOpt;
