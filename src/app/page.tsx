// import Link from "next/link";
// import { createPost } from "@/app/actions";
// import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";
// import { Button } from "@/ui/button";

import Main from "./Main/page";
import  { Toaster } from 'react-hot-toast';


export default async function Home() {

  return (
  <main className="">
    <Main/>
    <Toaster/>
  </main>
  )
}
