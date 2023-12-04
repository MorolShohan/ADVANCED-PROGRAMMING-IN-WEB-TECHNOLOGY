import Link from "next/link"



export default function Home() {
  return (
  
      <div>
        <h1>This is next js project home page</h1>  <br></br>
        <Link href="/about">
          
            <h3>go to about page</h3>
          
        </Link>

        <br></br>

        <Link href="/profile">
          
            <h3>go to profile page</h3>
          
        </Link>


      </div>
    
  );
}



