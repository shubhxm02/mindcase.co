'use client'

import { Database } from "@/utils/database.types";
import { Send } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export const TextArea = () => {

  const supabase = createClientComponentClient<Database>();

  const [text, setText] = useState<string>("");

  const router = useRouter();

  const sendMessage = async () => {
    const { data, error } = await supabase.from("Messages").insert({ query: text });
    if (error) {
      console.log(error);
    } else {
      setText("");
      console.log(data);
      router.refresh();
    }
  }

  return (
    <Box sx={{ position: "absolute", bottom: "0", backgroundColor: "secondary.main", color: "white", width: "100%" }}>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }} >
        <Box sx={{ width: "100%", backgroundColor: "secondary.main", maxWidth: { xs: "100%", md: "48rem" }, p: 2 }}>
          <TextField
            id="user-input"
            focused
            fullWidth
            multiline
            maxRows={4}
            sx={{ backgroundColor: "background.default" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={sendMessage}>
                    <Send fontSize="small" style={{ color: "white" }} />
                  </Button>
                </InputAdornment>
              ),
              style: { color: "white" },
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
      </Box>
    </Box>
  )
}