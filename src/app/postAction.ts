import usersData from "./data/users.json";

export function postAction(formData:FormData) {
  const id = formData.get("id");
  const pass = formData.get("pass");
  const user = usersData.users.find(user => user.id === id && user.pass === pass);

  if (user) {
    return { success:true, id:user.id };
  } else {
    return { success:false };
  }
}