'use client'

import { Database } from "@/utils/database.types";
import { Send } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const TextArea = ({ conv_id }: { conv_id: string }) => {

  const supabase = createClientComponentClient<Database>();

  const [text, setText] = useState<string>("");

  const router = useRouter();

  const sendMessage = async () => {

    const createConv = async () => {
      await supabase
        .from("Conversations")
        .insert({ title: "New Chat" })
      const { data } = await supabase
        .from("Conversations")
        .select("id")
        .order("created_at", { ascending: false })
        .limit(1);
      const conv_id = data ? data[0].id : null;
      console.log(conv_id);
      return conv_id;
    }

    const conv = (conv_id === "") ? await createConv() : conv_id;

    const { data, error } = await supabase
      .from("Messages")
      .insert({
        query: text,
        conversation_id: conv,
      });
    if (error) {
      console.log(error);
    } else {
      setText("");
      console.log(data);
      if (conv_id === "")
        router.replace('/c/' + conv);
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