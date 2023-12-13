import Link from "next/link";
import Header from "./components/header";
import { useState } from "react";

export default function Home() {
const [number, setNumber] = useState(10);
//const number = 15;

return (
    <>
<Header title="Home" name="" age=""/>
     <h1> Home</h1>
     <h5>hellow</h5>

<Link href="aboutus">About US</Link>

<p>this a number {number}</p>
    </>
  )
}
