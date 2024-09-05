"use client";

import Link from "next/link";
import { postAction } from "./postAction";

export default function Home() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await postAction(formData);

    if (result) {
      alert("ログイン成功");
      window.location.reload();
    } else {
      alert("idまたはpasswordが間違っています。");
    }
  }
  return (
    <>
      <div className="bg-gray-100">
        <h1 className="text-center text-3xl font-bold pt-5 mb-3">LOGIN</h1>
        <form onSubmit={handleSubmit} className="text-center pb-10">
          <p><input type="text" name="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-2.5" placeholder="id"/></p>
          <p><input type="text" name="pass" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-2.5" placeholder="password"/></p>
          <button type="submit" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-2 mt-3">LOGIN</button>
        </form>
      </div>
      <div>
        <p className="text-left text-3xl font-bold">LINK</p>
        <ul>
          <li>
            <Link href={"/users/01"}>user1</Link>
          </li>
          <li>
            <Link href={"/users/02"}>user2</Link>
          </li>
          <li>
            <Link href={"/users/03"}>user3</Link>
          </li>
        </ul>
      </div>
    </>
  );
}