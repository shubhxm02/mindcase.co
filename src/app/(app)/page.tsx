import Image from "next/image";

import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

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
      <Container maxWidth="lg" sx={{ display: 'flex', width: 'full', justifyContent: 'center' }}>
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', color: 'white', maxWidth: '500px' }}>
          <Image className="py-4" src="/mindcase.png" alt="Mindcase" width={120} height={120} />
          <Typography variant="h3" sx={{ color: "white" }}>Redefining</Typography>
          <Typography variant="h2" sx={{ color: "primary.light" }}>Legal Industry</Typography>
          <Typography variant="h4" sx={{ my: 4 }} paragraph={true}>Experience the power of AI with deep legal expertise and intelligent workflows.</Typography>
          <Link href={"/c"} passHref><Button variant="contained" sx={{ width: 'auto', my: 2 }}>Start chatting now!</Button></Link>
        </Box>
      </Container >
    </Box >
  );
};
