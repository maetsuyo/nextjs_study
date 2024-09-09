"use client";

import Link from "next/link";
import Form from "./components/form";

export default function Home() {
  const pageLink = (name:string, link:string) => {
    return (
      <li>
        <Link href={link}>{name}</Link>
      </li>
    )
  }
  return (
    <>
      <div className="bg-gray-100">
        <h1 className="text-center text-3xl font-bold pt-5 mb-3">LOGIN</h1>
        <Form/>
      </div>
      <div>
        <p className="text-left text-3xl font-bold">LINK</p>
        <ul>
          {pageLink("ユーザー01", "users/01")}
          {pageLink("ユーザー02", "users/02")}
          {pageLink("ユーザー03", "users/03")}
        </ul>
      </div>
    </>
  );
}