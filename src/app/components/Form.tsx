import { useRouter } from "next/navigation";
import { postAction } from "../postAction";

const form = () => {
    const router = useRouter()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const result = await postAction(formData);
      if (result) { 
        alert("ログイン成功！");
        router.push("./login")
      } else {
        alert("idまたはpasswordが間違っています。");
      }
    }
    return (
        <form onSubmit={handleSubmit} className="text-center pb-10">
          <p><input type="text" name="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-2.5" placeholder="id"/></p>
          <p><input type="text" name="pass" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-2.5" placeholder="password"/></p>
          <button type="submit" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-2 mt-3">LOGIN</button>
        </form>
    );
}

export default form;