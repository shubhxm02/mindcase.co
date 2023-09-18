import React from "react";
import { Box } from "@mui/material";

// import { getSession } from "@/utils/supabase-server";

import { DashboardClient } from "./dashboard-client";

const DashboardLayoutRoot = (props: { children: React.ReactNode }): React.JSX.Element => {
  const { children } = props;
  return (
    <Box sx={{ display: "flex", flex: "1 1 auto", width: "100%", pt: "64px", pl: { md: "280px" } }}>
      {children}
    </Box>
  );
}

const DashboardLayoutClient = async ({ children }: { children: React.ReactNode }) => {
  // const session = await getSession();
  const session = null;
  return (
    <DashboardClient children={children} session={session} />
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <>
      {/* <DashboardSidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} /> */}
      {/* <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} /> */}
      <DashboardLayoutClient children={children} />
      {/* <DashboardLayoutRoot> */}
      {/* <Box sx={{ display: "flex", flex: "1 1 auto", flexDirection: "column", width: "100%" }}>{children}</Box> */}
      {/* </DashboardLayoutRoot> */}
    </>
  );
};
