import Link from "next/link";

import Image from "next/image";

import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";


export const DashboardNavbar = (
  { setSidebarOpen }: { setSidebarOpen: () => void }
) => {
  return (
    <>
      <AppBar sx={{ width: 'full', backgroundColor: "primary", boxShadow: 'none', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar disableGutters sx={{ minHeight: 64, left: 0, px: 2 }}>
          <IconButton onClick={setSidebarOpen} sx={{ display: "inline-flex" }}>
            <MenuIcon fontSize="small" />
          </IconButton>
          <IconButton sx={{ px: 2 }} href="/">
            <Image src={"/mindcase.png"} alt="logo" height={"40"} width={"40"} />
          </IconButton>
          <Typography variant="h4">Mindcase</Typography>
          {/* Space */}
          <Box sx={{ flexGrow: 1 }} />
          {/* Space */}
          <Button>
            <Link href="/account" passHref>
              {/* {session ? (
                <Avatar sx={{ height: 40, width: 40 }} srcSet={session.user?.user_metadata.avatar_url} />
              ) : (
                <Avatar sx={{ height: 40, width: 40 }} />
              )} */}
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
