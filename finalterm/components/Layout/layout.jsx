import NavBar from "../Navbar/navbar";

export default function Layout({children})
{
    return(
        <>
        <NavBar/>
        <main className = "layout">{children}</main>
       
        
        </>
    )
}