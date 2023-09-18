import Head from "next/head";

import { Box, Container, Grid, Typography } from "@mui/material";

import { AccountProfile, AccountSignout, AccountProfileDetails, AccountActivation } from "./content";

export default async function Account() {
  return (
    <>
      <Head>
        <title>Account | RS Dashboard</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Account
          </Typography>
          <Grid container spacing={3}>
            <Grid item container spacing={3} lg={4} md={6} xs={12}>
              <Grid item xs={12}>
                <AccountProfile />
              </Grid>
              <Grid item xs>
                <AccountActivation />
              </Grid>
            </Grid>
            <Grid item container spacing={3} lg={8} md={6} xs={12}>
              <Grid item xs={12}>
                <AccountProfileDetails />
              </Grid>
              <Grid item xs>
                <AccountSignout />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

