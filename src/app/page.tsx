"use client";

import Login from "./components/Login";
import LinkList from "./components/LinkList";

export default function Home() {
  return (
    <>
      <div>
        <Login/>
      </div>
      <div>
        <LinkList/>
      </div>
    </>
  );
}