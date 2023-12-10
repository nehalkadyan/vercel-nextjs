import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
          const response =await fetch("/api/login", {
            body: JSON.stringify({username, password}),
            method: "POST",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
          });

          const jsonResponse = response.json();
          router.push("/");
          
        }catch(error){
          console.log("catching error", error)
        }
    }

    return(
        <div className="container">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-5">
                    <label htmlFor="username">username</label>
                    <input type="text" className="form-control" id = "username" placeholder="enter username" onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="form-group mt-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <button className="btn btn-primary mt-3">Login</button>
                </div>
            </form>
        </div>
    )
}