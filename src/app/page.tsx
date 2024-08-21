import Image from "next/image";
import Link from "next/link";
import { postAction } from "./postAction";

export default function Home() {
  return (
    <div>
      <form action={postAction}>
        <input type="text" name="id"/>
        <input type="text" name="pass"/>
        <button type="submit">送信</button>
      </form>
    </div>
    <div>
      <ul>
        <li>
          <Link href="/users/1">user1</Link>
        </li>
        <li>
          <Link href="/users2/">user2</Link>
        </li>
        <li>
          <Link href="/users/3">user3</Link>
        </li>
      </ul>
    </div>
  );
}