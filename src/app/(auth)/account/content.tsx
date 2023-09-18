'use client'

import { Database } from "@/utils/database.types";
import { Avatar, Box, Button, Card, CardHeader, CardActions, CardContent, Divider, Grid, TextField, Typography } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { UserMetadata } from "@supabase/supabase-js";
import Link from "next/link";
import { useState, useEffect } from "react";

const supabase = createClientComponentClient<Database>();


export const AccountProfile = (props: any) => {
  const [user, setUser] = useState<UserMetadata>({});

  useEffect(() => {
    async function fetchData() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) setUser(user?.user_metadata);
      console.log('user', user)
    }
    fetchData();
    console.log('fetchData', user)
  }, []);

  console.log('final', user)

  return (
    <Card {...props}>
      <CardContent>
        <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
          <Avatar src={user.avatar_url} sx={{ height: 64, mb: 2, width: 64 }} />
          <Typography color="primary" gutterBottom variant="h5">
            {user.full_name}
          </Typography>
          {!user.access && <Typography color="error.main">Not an authorised user.</Typography>}
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};


export const AccountActivation = () => {
  const [code, setCode] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const metadata = user.user_metadata;
        setCode(metadata.code);
        setPrev(metadata.code);
      }
    }
    fetchData();
  }, []);

  async function updateCode() {
    await supabase.auth.updateUser({
      data: {
        code: code,
      },
    }).then(({ data }) => {
      console.log('updated', data)
      setPrev(code);
    }).catch((error) => {
      console.log('error', error)
    });
  }

  return (
    <Card>
      <CardContent sx={{ alignItems: "center" }}>
        <TextField fullWidth label="Access Code" value={code} name="AccessCode" required variant="outlined" onChange={(e) => setCode(e.target.value)} />
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" disabled={prev == code} fullWidth variant="text" onClick={() => updateCode()}>
          Update Access Code
        </Button>
      </CardActions>
    </Card>
  );
};


export const AccountProfileDetails = () => {
  const [values, setValues] = useState<UserMetadata>({ email: '', phone: '', full_name: '' });
  const [original, setOriginal] = useState<UserMetadata>({ email: '', phone: '', full_name: '' });

  useEffect(() => {
    async function fetchData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const metadata = user.user_metadata;
        setValues(metadata);
        setOriginal(metadata);
        console.log('metadata', metadata)
      }
    }
    fetchData();
  }, []);

  async function updateUser() {
    await supabase.auth.updateUser({
      data: values,
    }).then(({ data }) => {
      console.log('updated', data)
      setOriginal(values);
    }).catch((error) => {
      console.log('error', error)
    });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Card>
      <CardHeader subheader="Edit your profile details here" title="Profile" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField fullWidth label="Full name" name="full_name" value={values.full_name} onChange={handleChange} required variant="outlined" />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField fullWidth label="Phone Number" name="phone" value={values.phone} onChange={handleChange} type="number" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email Address" name="email" value={values.email} type="email" variant="outlined" />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <Button color="primary" disabled={values == original} onClick={() => updateUser()} variant="contained">
          Save details
        </Button>
      </Box>
    </Card>
  );
};


export const AccountSignout = () => {
  return (
    <Card>
      <CardActions>
        <Link href="/logout" className="w-full">
          <Button color="error" fullWidth variant="text">
            Logout
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
