"use client"
import { useRouter, useParams } from "next/navigation";
import usersData from "../../data/users.json";
import Loading from "@/app/loading";

export default function UserPage() {
    const router = useRouter();
    const { id } = useParams();
    const user = usersData.users.find((user) => user.id === `user${id}`);
    return (
        <div>
            <h1>ユーザー詳細</h1>
            <p>id : {user.id}</p>
            <p>password : {user.pass}</p>
            <p>name : {user.name}</p>
            <button onClick={() => {router.push("../");}} className="text-white bg-red-500 rounded-3xl p-2 text-sm font-medium">back</button>
        </div>
    );
}