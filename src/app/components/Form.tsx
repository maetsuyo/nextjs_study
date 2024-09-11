import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const form = () => {
  const [id, setId] = useState("")
  const [pass, setPass] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("送信成功");
  }
  return (
    <>
      <h1 className="text-center text-3xl font-bold pt-5 mb-3">LOGIN</h1>
        <form onSubmit={handleSubmit} className="text-center pb-10">
          <p>
            <input
              type="text"
              name="id"
              placeholder="id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-2.5"
            />
          </p>
          <p>
            <input
              type="text"
              name="pass"
              placeholder="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-2.5"
            />
          </p>
          <button
            type="submit"
            className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-2 mt-3">LOGIN
          </button>
        </form>
    </>
  );
}

export default form;