import React,{useState}from 'react'

function Form() {
    const [name,setName]=useState('jay');
    const[email,setEmail]=useState('jay@gmail.com');
    const [branch,setBranch]=useState('CSE');
    const [usn,setUsn]=useState('4mk19cs018');
    const [sem,setSem]=useState('');
    const [phno,setPhno]=useState('');

    const handleSubmit=(e)=> {
        e.preventDefalut();
        const data = {
             name:name,
             email:email,
             branch:branch,
             usn:usn,
             sem:sem,
             phno:phno


        };
        console.log("inside");
        console.log(data);
        
    }


  return (
    <div><form onSubmit={handleSubmit}>
        <input type="text" value={name} 
        placeholder="Student name" onChange={(e)=> setName(e.target.value)}/><br></br>

        <input type="email" value={email} 
        placeholder="Student Email Id" onChange={(e)=> setEmail(e.target.value)}/><br></br>

        <input type="text" value={branch} 
        placeholder=" Student Branch" onChange={(e)=> setBranch(e.target.value)}/><br></br>
        
         <input type="text" value={usn} 
        placeholder="Student Usn" onChange={(e)=> setUsn(e.target.value)}/><br></br>

        <input type="text" value={sem} 
        placeholder="Student Sem" onChange={(e)=> setSem(e.target.value)}/><br></br>
        
        
        <input type="text" value={sem} 
        placeholder="Student Phno" onChange={(e)=> setPhno(e.target.value)}/><br></br>
        

    <input type="button" value="Submit" />
    </form>
    </div>
  )
}

export default Form