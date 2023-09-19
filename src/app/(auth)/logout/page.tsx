'use client'

import Image from "next/image";

import { Box, Button, Typography } from "@mui/material";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/utils/database.types"

export default function Logout() {

  const supabase = createClientComponentClient<Database>();

  supabase.auth.signOut().then(() => {
    console.log("signed out successfully");
  }).catch((error) => {
    console.log("error signing out", error);
  })

  return (
    <Box
      sx={{
        // backgroundImage: `url(/images/collage.jpg)`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "secondary.main",
        backgroundBlendMode: "multiply",
      }}
    >
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", md: "375px" },
          height: { xs: "100%", md: "auto" },
          backgroundColor: "primary.main",
        }}
      >
        <Image src={"/mindcase.png"} alt="logo" height={"80"} width={"80"} />
        <Typography variant="h5" sx={{ width: "100%", py: 4, color: 'white', textAlign: 'center' }}>
          Hate to see you go :/
        </Typography>
        <Button href="/" sx={{ backgroundColor: 'secondary.main', color: "white" }}>Go back to Home Page</Button>
      </Box>
    </Box >
  )

}