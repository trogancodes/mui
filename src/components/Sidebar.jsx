import {
  ContactSupport,
  DarkMode,
  Diversity3,
  Group,
  Home,
  Info,
  Pages,
  Person,
  Settings,
  Store,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';

const Sidebar = () => {
  return (
    <Box
      bgcolor="#C8B6A6"
      flex={1}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      Sidebar
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <Diversity3 />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton a="a" href="groups">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton a="a" href="pages">
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton a="a" href="store">
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton a="a" href="settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton a="a" href="settings">
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
            </ListItemButton>
            <Switch />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
