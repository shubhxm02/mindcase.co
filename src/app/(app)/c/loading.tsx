import { Box, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "background.default" }}>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <Box sx={{ p: 3, width: "100%", display: "flex", maxWidth: { xs: "100%", md: "48rem" } }}>
            <Typography sx={{ pt: 1, px: 2, wordBreak: "break-word" }} variant="body1">Loading...</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}