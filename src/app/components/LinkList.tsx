import Link from "next/link";

const LinkList = () => {
  const pageLink  = (name:string, link:string) => {
    return (
      <li className="mb-2">
        <Link
          href={link}
          className="block py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          {name}
        </Link>
      </li>
    );
  };

  return (
    <div className="p-5 bg-white shadow-md rounded-lg">
      <p className="text-left text-3xl font-bold mb-4 text-gray-800">LINK</p>
        <ul className="space-y-2">
          {pageLink("ユーザー01", "users/01")}
          {pageLink("ユーザー02", "users/02")}
          {pageLink("ユーザー03", "users/03")}
        </ul>
    </div>
  );
};

export default LinkList;