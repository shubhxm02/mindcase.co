'use client'

import { Box } from '@mui/material'
import { useState, useEffect } from 'react';

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { Database } from '@/utils/database.types'
import Image from 'next/image';

export default function AuthForm() {

  const supabase = createClientComponentClient<Database>()

  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  useEffect(() => {
    setCurrentUrl(new URL(window.location.href).origin);
  }, []);

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
          width: { xs: "100%", md: "375px" },
          height: { xs: "100%", md: "auto" },
          backgroundColor: "primary.main",
        }}
      >
        <Image src={"/mindcase.png"} alt="logo" height={"80"} width={"80"} />
        <Box sx={{ width: "100%", pt: 4 }}>
          <Auth
            supabaseClient={supabase}
            view="sign_in"
            magicLink
            theme="dark"
            appearance={{ theme: ThemeSupa }}
            providers={['google']}
            redirectTo={`${currentUrl}/auth/callback`}
          />
        </Box>
      </Box>
    </Box >
  )
}