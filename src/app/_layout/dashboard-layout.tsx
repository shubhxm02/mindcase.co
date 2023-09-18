import React from "react";
import { Box } from "@mui/material";

// import { getSession } from "@/utils/supabase-server";

import { DashboardClient } from "./dashboard-client";

export default function DashboardLayout({ children }: { children: React.ReactNode }): React.JSX.Element {

  const session = null;
  // const session = await getSession();

  return (
    <>
      <DashboardClient session={session}>
        {children}
      </DashboardClient>
    </>
  );
};
