import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import {Drawer,DrawerHeader} from './Sidebar.element'




const menuItems = [
  {
    icon: <InboxIcon />,
    title: "Dashboard",
    path: "/",
    role: ["admin", "staff"],
  },
  {
    icon: <InboxIcon />,
    title: "Orders",
    path: "/order",
    role: ["admin", "staff", "user"],
  },
  {
    icon: <InboxIcon />,
    title: "Accounts",
    path: "/accounts",
    role: ["admin"],
  },
  {
    icon: <InboxIcon />,
    title: "Card",
    path: "/card",
    role: ["user"],
  },
];

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const profile = {
    userId: 1,
    userName: 'thang123',
    role: 'admin',
  }



  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton  onClick={()=>setOpen(!open)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => {
            if (item.role.includes(profile.role)) {
              return (
                <ListItem
                  key={item.path}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    to={item.path}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
        </List>
      </Drawer>
    </Box>
  );
}
