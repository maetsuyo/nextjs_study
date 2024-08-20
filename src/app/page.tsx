import Image from "next/image";
import { postAction } from "./postAction";

export default function Home() {
  return (
    <form action={postAction}>
      <input type="text" name="id"/>
      <input type="text" name="pass"/>
      <button type="submit">送信</button>
    </form>
  );
}