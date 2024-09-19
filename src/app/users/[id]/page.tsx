"use client"
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import usersData from "../../data/users.json";

export default function UserPage() {
  const [id, setId] = useState("")
  const [pass, setPass] = useState("")
  const [userInfo, SetUserInfo] = useState<{id: string, pass: string, name: string} | null>(null);
  const router = useRouter();
  const { urlId } = useParams();

  try {
    const res = fetch("http://localhost:3001/users");
    console.log(res);
    const users = res.json();
    const user = users.find((user : {id: string, pass: string}) => user.id === `user${urlId}`);
    if (confirm) {
      SetUserInfo({id: confirm.id, pass: confirm.pass, name: confirm.name});
    } else {
      console.log("取得失敗");
      SetUserInfo(null);
    }
  } catch (error) {
    console.error("エラー", error);
  }
  // const user = usersData.users.find((user) => user.id === `user${id}`);
  return (
    <>
      <h1>ユーザー詳細</h1>
      <p>id : {user.id}</p>
      <p>password : {user.pass}</p>
      <p>name : {user.name}</p>
      <button onClick={() => {router.push("../");}} className="text-white bg-red-500 rounded-3xl p-2 text-sm font-medium">back</button>
    </>
  );
}