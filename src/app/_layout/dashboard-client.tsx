'use client'

import React, { useState } from "react";

import { Box, Toolbar, styled, useMediaQuery } from "@mui/material";

import { DashboardNavbar } from "./dashboard-navbar";
import { DashboardSidebar } from "./dashboard-sidebar";
import { Session } from "@supabase/supabase-js";

const drawerWidth = 280;

const Main = styled('main')<{ open?: boolean; lgUp?: boolean }>(({ theme, open, lgUp }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  overflow: 'hidden',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(lgUp ? {
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  } : {
    marginLeft: 0
  }),
}));


export const DashboardClient = ({ session, children }: { session: Session | null, children: React.ReactNode }) => {

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("md"), { defaultMatches: true, });

  return (
    <Box sx={{ display: "flex", height: "100%", overflowY: "clip" }} >
      <DashboardNavbar setSidebarOpen={() => setSidebarOpen(!isSidebarOpen)} session={session} />
      <DashboardSidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
      <Main open={isSidebarOpen} lgUp={lgUp}>
        <Toolbar />
        {children}
      </Main>
    </Box >
  )
}
