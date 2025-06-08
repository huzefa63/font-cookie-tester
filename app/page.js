import Image from "next/image";
import Fetch from "./_compo/Fetch";

export default async  function Home() {
  try{
    const res = await fetch('https://back-tester-cookie.onrender.com/cookie',{credentials:'include'});
    const data = res.json();
    console.log(data);
  }catch(err){
    console.log(err);
  }
  return (
    <div className="">
      <h1>hello welcome here</h1>
      <Fetch />
    </div>
  );
}
