import Link from "next/link";

import Image from "next/image";

import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu, MenuItem, ListItemIcon, Divider } from "@mui/material";
import { Settings, Logout } from "@mui/icons-material";

import { Session } from "@supabase/supabase-js";


const Account = ({ session }: { session: Session | null }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar sx={{ height: 40, width: 40 }} srcSet={session?.user?.user_metadata.avatar_url} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            minWidth: "300px",
            overflow: 'visible',
            backgroundColor: 'background.paper',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 20,
              width: 20,
              height: 20,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Typography sx={{ px: 2, py: 1.5, fontWeight: 600 }} variant="subtitle2">
          {session?.user?.user_metadata.full_name}
        </Typography>
        <Typography sx={{ px: 2, pb: 1.5, color: 'text.secondary' }} variant="body2">
          {session?.user?.email}
        </Typography>
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem> */}
        <Divider />
        {/* menu item handleClose and route to /c */}
        <Link href="/c" passHref>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            History
          </MenuItem>
        </Link>
        <Link href="/logout" passHref>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </>
  )
}


export const DashboardNavbar = (
  { session, setSidebarOpen }: { session: Session | null, setSidebarOpen: () => void }
) => {

  return (
    <>
      <AppBar sx={{ width: 'full', backgroundColor: "primary", boxShadow: 'none', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar disableGutters sx={{ minHeight: 64, left: 0, px: 2 }}>
          <IconButton onClick={setSidebarOpen} sx={{ display: "inline-flex" }}>
            <MenuIcon fontSize="small" />
          </IconButton>
          <Link href="/" passHref>
            <IconButton sx={{ px: 2 }}>
              <Image src={"/mindcase.png"} alt="logo" height={"40"} width={"40"} />
            </IconButton>
          </Link>
          <Link href="/" passHref>
            <Typography variant="h4">Mindcase</Typography>
          </Link>
          {/* Space */}
          <Box sx={{ flexGrow: 1 }} />
          {/* Space */}
          <Account session={session} />
        </Toolbar>
      </AppBar>
    </>
  );
};
