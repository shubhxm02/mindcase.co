import { createServerSupabaseClient, getSession } from "@/utils/supabase-server"
import { Avatar, Box, Typography } from "@mui/material"
import { Session } from "@supabase/supabase-js";

const MessageBox = ({ text, res, session }: { text: string, res: boolean, session: Session | null }) => {

  return (
    <Box sx={res ? { backgroundColor: "background.default" } : { backgroundColor: "secondary.main" }}>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box sx={{ p: 3, width: "100%", display: "flex", maxWidth: { xs: "100%", md: "48rem" } }}>
          {res ? (
            <Avatar sx={{ height: 40, width: 40 }} srcSet={"/mindcase.png"} />
          ) : (
            <Avatar sx={{ height: 40, width: 40 }} srcSet={session?.user?.user_metadata.avatar_url} />
          )}
          <Typography sx={{ pt: 1, px: 2, wordBreak: "break-word" }} variant="body1">{text}</Typography>
        </Box>
      </Box>
    </Box>
  )

}

export const Messages = async ({ conv_id }: { conv_id: string }) => {

  const supabase = createServerSupabaseClient();

  const fetcher = async () => {
    const { data, error } = await supabase
      .from("Messages")
      .select("*").eq("conversation_id", conv_id)
      .order("created_at", { ascending: true });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      return data;
    }
  }

  const data = await fetcher();

  const session = await getSession();

  return (
    <>
      <Box sx={{
        color: 'white',
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        overflowY: "scroll",
        overflowX: "clip"
      }}>
        {data ? data.map((message: any) => (
          <>
            <MessageBox text={message.query} res={false} session={session} />
            <MessageBox text={message.response} res={true} session={session} />
          </>
        )) : null}
        <Box sx={{ p: 10, backgroundColor: "secondary.main" }} />
      </Box>
    </>
  )
}