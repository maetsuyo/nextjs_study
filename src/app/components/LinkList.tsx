import Link from "next/link";

const LinkList = () => {
  const pageLink  = (name:string, link:string) => {
    return (
      <li>
        <Link href={link}>{name}</Link>
      </li>
    );
  };

  return (
    <>
      <p className="text-left text-3xl font-bold">LINK</p>
        <ul>
          {pageLink("ユーザー01", "users/01")}
          {pageLink("ユーザー02", "users/02")}
          {pageLink("ユーザー03", "users/03")}
        </ul>
    </>
  );
};

export default LinkList;