"use client"
import { useRouter } from "next/navigation";

interface Props {
    params : {userId: string};
}

export default function UserPage(props:Props) {
    const router = useRouter()
    return (
        <div>
            <h1 className="text-lg border-b pb-1 mb-1">
                User Page { props.params.userId}
            </h1>
            <button onClick={() => {router.push("../");}}>back</button>
        </div>
    );
}