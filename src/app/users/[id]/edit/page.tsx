"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import usersData from "../../../data/users.json"

export default function EditProfile() {
  const router = useRouter();
  const { id } = useParams();
  const user = usersData.users.find((user) => user.id === id);

  const [name, setName] = useState<string>(user?.name || "");

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSave}>
        <p>
          <input
            type="text"
            name="id"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <button type="submit">
          保存
        </button>
      </form>
    </>
  )
}