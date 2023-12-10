import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import MyImg from "@/public/image.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function ImageOptimization() {

  const [user, setUser] = useState({});
  const router = useRouter()

  useEffect(() => {
    fetch("/api/getuser").then(async(res) => {
      const jsonResponse = await res.json();
      if(!jsonResponse.loggedin){
       router.push("/login")
      }else{
        setUser(jsonResponse);
      }
    })
}, []);

const logout = async() => {
  const response = await fetch("/api/logout");
  router.push("/login")
}

  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:ital,wght@0,300;0,400;0,500;0,800;0,900;1,600;1,700&family=Roboto:ital,wght@1,100&display=swap" rel="stylesheet"/>
      </Head>
      <div>
        <h1>Image Optimization</h1>
        {/* <img src="/image.jpg" height={200} width={200} /> */}
        <Image src={MyImg} height={200} width={200} alt="myimg" />
        <div>
          <ul>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.city}</li>
          </ul>

          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
}

// export default function Home({products}) {
//   return (
//     <div>
//       <h1>Products List</h1>
//       <ul>
//         {products.map(item => <Link href={`/${item.id}`}><li key={item.id}>{item.title}</li></Link>)}
//       </ul>
//     </div>
//   )
// }

// export async function getStaticProps(){
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   return{
//     props: {
//       products: data
//     }
//   }
// }
