"use server";
import usersData from "./data/users.json";

export async function postAction(formData:FormData) {
    const id = formData.get("id");
    const pass = formData.get("pass");
    const user = usersData.users.find(user => user.id === id && user.pass === pass);

    if (user) {
        console.log("ログイン成功");
        console.log("名前は", user.name, "です。");
        return true;
    } else {
        console.log("ログイン失敗");
        return false;
    }
}
