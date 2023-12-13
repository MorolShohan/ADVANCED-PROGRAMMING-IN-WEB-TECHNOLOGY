import { useRouter } from "next/router"


export default function Users(){
const router = useRouter();
const {id} =router.query;


    return (
        <>
        <h1> Users {id}</h1>
        </>
    )
}