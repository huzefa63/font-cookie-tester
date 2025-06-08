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
    return (
        <button onClick={handleClick} className="px-8 py-3 bg-red-500 ">click to send cookies</button>
    )
}

export default Fetch
