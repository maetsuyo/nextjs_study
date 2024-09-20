"use client";

import Form from "./components/Login"
import LinkList from "./components/LinkList";

export default function Home() {
  return (
    <>
      <div>
        <Form/>
      </div>
      <div>
        <LinkList/>
      </div>
    </>
  );
}