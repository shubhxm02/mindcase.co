import { ChatBubbleOutline, OpenInNew, Add } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, Toolbar, Typography, useMediaQuery } from "@mui/material";

import { NavHead, NavItem } from "./nav-item";

const conversations = [
  {
    href: "/c/111",
    icon: <ChatBubbleOutline fontSize="small" />,
    title: "ChatBubbleOutline 1",
  },
];

const drawerWidth = 280;

export const DashboardSidebar = ({ open, onClose }: { open: boolean, onClose: () => void }) => {

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("md"), { defaultMatches: true, });

  const content = (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%", overflow: 'clip' }}>
        {/* <Divider /> */}
        {/* Converstaions start */}
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, py: 2, overflowY: "auto" }}>
          {/* New chat */}
          <NavItem key={'newChat'} icon={<Add fontSize="small" />} href={'/c'} title={'New Chat'} onClose={onClose} />
          {/* Conversations List */}
          <NavHead key="Recents" title="Recents" />
          {conversations.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} onClose={onClose} />
          ))}
        </Box>
        {/* Conversations end */}
        <Divider />
        {/* Bottom Nav */}
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
          color: "white",
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
