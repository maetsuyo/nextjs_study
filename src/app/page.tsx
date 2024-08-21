import Link from "next/link";
import { postAction } from "./postAction";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <h1 className="text-center text-3xl font-bold pt-5">LOGIN</h1>
        <form action={postAction} className="text-center pb-10">
          <p><input type="text" name="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-2.5" placeholder="id"/></p>
          <p><input type="text" name="pass" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-2.5" placeholder="password"/></p>
          <button type="submit" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-2">submit</button>
        </form>
      </div>
      <div>
        <p className="text-left text-3xl font-bold">LINK</p>
        <ul>
          <li>
            <Link href={"/users/1"}>user1</Link>
          </li>
          <li>
            <Link href={"/users/2"}>user2</Link>
          </li>
          <li>
            <Link href={"/users/3"}>user3</Link>
          </li>
        </ul>
      </div>
    </>
  );
}