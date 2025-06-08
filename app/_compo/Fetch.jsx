'use client';
function Fetch() {
async function handleClick(){
try{
    const res = await fetch('https://back-tester-cookie.onrender.com/verify',{credentials:'include'});
    const data = await res.json();
    console.log(data);

}    catch(err){
    console.log(err);
}
}
async function getCookie(){
    try {
      console.log("fetching started");
      const res = await fetch(
        "https://back-tester-cookie.onrender.com/cookie",
        { credentials: "include" }
      );
      const data = res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
}
    return (
      <div>
        <button onClick={handleClick} className="px-8 py-3 bg-red-500 ">
          click to send cookies
        </button>
        <button onClick={getCookie} className="px-8 py-3 bg-red-500 ">
          get cookie
        </button>
      </div>
    );
}

export default Fetch
