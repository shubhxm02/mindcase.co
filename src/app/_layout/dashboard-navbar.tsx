import Link from "next/link";

import Image from "next/image";

import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";

import { Session } from "@supabase/supabase-js";


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
          <Button>
            <Link href="/account" passHref>
              {session ? (
                <Avatar sx={{ height: 40, width: 40 }} srcSet={session.user?.user_metadata.avatar_url} />
              ) : (
                <Avatar sx={{ height: 40, width: 40 }} />
              )}
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
