import { data } from "@/data";
import { withSession } from "@/session";

const handler =  async function(req, res){
  const {username, password} = req.body;

  const user = data.find(item => item.username === username);

  if(user && user.password === password){
    req.session.set("user", user);
    await req.session.save()
    res.status(200).json({message: "user Authenticated"})
  }else{
    res.status(403).json({message: "404 Forbidden"});
  }
}

export default withSession(handler);