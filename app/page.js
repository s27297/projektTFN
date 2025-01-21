"use client"
import Image from "next/image";
import Login from "@/app/pagesForRedirecting/forms/Login";
import Components from "@/app/pagesForRedirecting/Components";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {useContext} from "react";

export default function Home() {
    const {page,token}=useContext(GlobalContext);
  return (
   <div >
     <Components></Components>
    </div>
  );
}
