import Link from "next/link"
import MyLayout from "@/pages/component/layout"
import axios from "axios";
import { useRouter } from 'next/router'
export default function GetUsers({ data }) {
  const router = useRouter();
  return (
    <>
     
      <MyLayout title="Get Users" />
      
      <div class="p-24 sm:ml-64">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        All Users
              </h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
            <Link href={"/admin/dashboard/users/" + item.id}><div className="font-bold text-blue-600/100 bg-gray-200 px-16 m-10"
            >{item.name}</div></Link>
            </li>
        ))}
      </ul>
        </div>
       <Footer/> 
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('https://nestjsproject-production-364f.up.railway.app/admin/index');
      const data = await response.data;
    
  return { props: { data } }
  }