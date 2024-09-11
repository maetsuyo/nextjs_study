"use client";

import Form from "./components/Form"
import LinkList from "./components/LinkList";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <Form/>
      </div>
      <div>
        <LinkList/>
      </div>
    </>
  );
}