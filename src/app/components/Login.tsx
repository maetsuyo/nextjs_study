import { FormEvent, useState } from "react";

const form = () => {
  const [id, setId] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [userInfo, setUserInfo] = useState<{id: string, pass: string, name: string} | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/users");
      console.log(res);
      const users = await res.json();
      const confirm = users.find((user : {id: string, pass: string}) => user.id === id && user.pass === pass);
      if (confirm) {
        setUserInfo({id: confirm.id, pass: confirm.pass, name: confirm.name});
      } else {
        console.log("取得失敗");
        setUserInfo(null);
      }
    } catch (error) {
      console.error("エラー", error);
    }
  }
  return (
    <>
      <div className="bg-gray-100">
        <h1 className="text-center text-3xl font-bold pt-5 mb-3">LOGIN</h1>
        <LoginForm
          id={id}
          pass={pass}
          onChangeId={(e) => setId(e.target.value)}
          onChangePass={(e) => setPass(e.target.value)}
          onSubmit={handleSubmit}
        />
      </div>

      {userInfo && (
        <div className="mt-5 p-5 bg-green-100 border border-green-500 text-green-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">ログイン成功</h2>
            <p className="text-lg">
              <span className="font-bold">ID:</span> {userInfo.id}
            </p>
            <p className="text-lg">
              <span className="font-bold">PASS:</span> {userInfo.pass}
            </p>
            <p className="text-lg">
              <span className="font-bold">NAME:</span> {userInfo.name}
            </p>
        </div>
      )}
    </>
  );
}

export default form;