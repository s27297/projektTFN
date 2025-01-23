"use client"
import Image from "next/image";
import Login from "@/app/pagesForRedirecting/forms/Login";
import Components from "@/app/pagesForRedirecting/Components";
import {GlobalContext} from "@/app/providers/GlobalProvider";
import {useContext} from "react";

export default function Home() {
    const {page,token,darkMode}=useContext(GlobalContext);
    // console.log(darkMode)
  return (
      <div>
      {darkMode &&<div
       className={"darkmode"}
   >
     <Components ></Components>
    </div>}
          {!darkMode &&<div>
              <Components ></Components>
          </div>}
          </div>
  );
}
