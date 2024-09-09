import { useRouter } from "next/navigation";
import { postAction } from "../postAction";

const form = () => {
    const router = useRouter()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const result = await postAction(formData);
      if (result.success) {
        router.push(`users/${result.id}/edit`);
      } else {
        alert("idまたはpasswordが間違っています。");
      }
    }
    return (
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
            className="text-whitebg-blue-700 font-medium rounded-lg text-sm px-2 py-2 mt-3">LOGIN
          </button>
        </form>
    );
}

export default form;