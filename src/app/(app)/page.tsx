import Image from "next/image";

import { Box, Button, Container, Typography } from "@mui/material";

const Theme = () => (
  <Box sx={{ mt: 8 }}>
    <Typography variant="h1">Heading 1</Typography>
    <Typography variant="h2">Heading 2</Typography>
    <Typography variant="h3">Heading 3</Typography>
    <Typography variant="h4">Heading 4</Typography>
    <Typography variant="h5">Heading 5</Typography>
    <Typography variant="h6">Heading 6</Typography>
    <Typography variant="subtitle1">Subtitle 1</Typography>
    <Typography variant="subtitle2">Subtitle 2</Typography>
    <Typography variant="body1">Body 1</Typography>
    <Typography variant="body2">Body 2</Typography>
    <Button variant="contained">Button 1</Button>
  </Box>
);

export default function Home() {
  return (
    <Box component="main">
      <Container maxWidth="lg">
        <Typography variant="h4">Mindcase</Typography>
        <Theme />
        <Theme />
      </Container>
    </Box>
  );
};
