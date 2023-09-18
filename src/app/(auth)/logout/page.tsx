'use client'

import { useRouter } from "next/navigation";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/utils/database.types"

export default function Logout() {

  const router = useRouter();

  const supabase = createClientComponentClient<Database>();

  supabase.auth.signOut().then(() => {
    console.log("signed out successfully");
  }).catch((error) => {
    console.log("error signing out", error);
  }).finally(() => {
    router.refresh();
    router.push("/");
  });

  return <>Loading...</>

}