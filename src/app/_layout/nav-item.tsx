import Link from "next/link";
import { usePathname } from "next/navigation";

import { Box, Button, ListItem, Typography } from "@mui/material";

export const NavHead = (props: { title: string }) => {
  return (
    <Typography variant="subtitle2" sx={{ px: 3, mt: 2, mb: 1 }} gutterBottom>
      {props.title}
    </Typography>
  );
};

export const NavItem = (props: { href: string; icon: any; title: string; onClose: () => void }) => {
  const { href, icon, title, onClose, ...others } = props;
  const active = href === usePathname();

  return (
    <Link href={href} passHref>
      <ListItem disableGutters sx={{ display: "flex", width: "100%", mb: 0.5, py: 0, px: 2 }} {...others}>
        <Button
          component="div"
          startIcon={icon}
          disableRipple
          // onClick={onClose}
          sx={{
            backgroundColor: active ? "secondary" : {},
            borderRadius: 1,
            color: "white",
            fontWeight: active ? "fontWeightBold" : {},
            justifyContent: "flex-start",
            px: 2,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </ListItem>
    </Link>
  );
};

