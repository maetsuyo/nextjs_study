"use client"
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function UserPage() {
  const [userInfo, setUserInfo] = useState<{id: string, pass: string, name: string} | null>(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3021/users");
        const users = await res.json();
        const confirm = users.find((user : {id: string}) => user.id === `user${id}`);
        if (confirm) {
          setUserInfo({id: confirm.id, pass: confirm.pass, name: confirm.name});
        } else {
          console.log("取得失敗");
          setUserInfo(null);
        }
      } catch (error) {
        console.error("エラー", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">ユーザー詳細</h1>
        {userInfo ? (
          <div className="text-lg mx-3">
            <p><strong>id</strong> : {userInfo.id}</p>
            <p><strong>password</strong> : {userInfo.pass}</p>
            <p><strong>name</strong> : {userInfo.name}</p>
          </div>
        ) : (
          <p className="text-red-500 text-center">ユーザーが見つかりません</p>
        )}
        <button
          onClick={() => {router.push("../");}}
          className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors"
        >
          back
        </button>
      </div>
    </div>
  );
}