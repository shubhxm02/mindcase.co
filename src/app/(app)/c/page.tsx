import { Box, Button, InputAdornment, TextField } from "@mui/material";

import { TextArea } from "@/app/(app)/c/_component/textArea";
import { Messages } from "@/app/(app)/c/_component/messages";

export default function Chat() {
  return (
    <Box sx={{ height: "100%", width: "100%", overflow: "hidden", backgroundColor: "secondary.main" }}>
      <Messages />
      <TextArea />
    </Box>
  )
}