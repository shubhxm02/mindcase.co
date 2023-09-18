import { Chat, OpenInNew } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, Toolbar, Typography, useMediaQuery } from "@mui/material";

import { NavHead, NavItem } from "./nav-item";

const conversations = [
  {
    href: "/c/111",
    icon: <Chat fontSize="small" />,
    title: "Chat 1",
  },
];

const drawerWidth = 280;

export const DashboardSidebar = ({ open, onClose }: { open: boolean, onClose: () => void }) => {

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("md"), { defaultMatches: true, });

  const content = (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* <Divider /> */}
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, mb: 4 }}>
          <Box>
            <NavHead key="CHATS" title="CHATS" />
            {conversations.map((item) => (
              <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} onClose={onClose} />
            ))}
          </Box>
        </Box>
        <Divider />
        <Box sx={{ px: 2, py: 3 }}>
          <Typography variant="subtitle1">Need help?</Typography>
          <Typography color={"neutral.400"} variant="body2">
            Check our docs
          </Typography>
          <a target={"_blank"} rel="noreferrer" href={"https://www.mindcase.co"}>
            <Button color="secondary" endIcon={<OpenInNew />} fullWidth sx={{ mt: 2 }} variant="contained">
              View our Product Page
            </Button>
          </a>
        </Box>
      </Box>
    </>
  );

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          flexShrink: 0,
          backgroundColor: "primary.main",
          color: "#FFFFFF",
          width: drawerWidth,
          border: "none",
        },
      }}
      variant={lgUp ? "persistent" : "temporary"}
    >
      <Toolbar />
      {content}
    </Drawer>
  );
};
