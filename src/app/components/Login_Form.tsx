import { FormEvent } from "react";

interface LoginFormProps {
    id: string;
    pass: string;
    onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePass: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent) => void;
}

const LoginForm = ({id, pass, onChangeId, onChangePass, OnSubmit}: LoginFormProps) => {
  return (
    <form onSubmit={OnSubmit} className="text-center pb-10">
      <p>
        <input
          type="text"
          name="id"
          placeholder="id"
          value={id}
          onChange={onChangeId}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-2.5"
        />
      </p>
      <p>
        <input
          type="text"
          name="pass"
          placeholder="password"
          value={pass}
          onChange={onChangePass}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg p-2.5"
        />
      </p>
      <button
        type="submit"
        className="text-white bg-blue-700 font-medium rounded-lg text-sm px-2 py-2 mt-3">LOGIN
      </button>
    </form>
  );
};