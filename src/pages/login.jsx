import React from 'react';
import LoginPage, { Submit, Title, Logo, Footer, Email, Password } from '@react-login-page/page10';
import LoginLogo from 'react-login-page/logo-rect';
import LoginImg from '@react-login-page/page10/bg.png';
import dog1 from '../assets/images/dog1.jpg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


const Demo = () => {
  
  const { setIsLoggedIn } = useAuth();
  const [email, setemail] = React.useState({});
  const [data, setData] = React.useState({});
  const [fullName,setFullName]=React.useState({});
  const [confpassword, setconfpassword] = React.useState({});
  const [password, setPassword] = React.useState({});
  const navigate = useNavigate();


  
  const handle = (even) => {
    even.preventDefault();
    // const formData = new FormData(even.target);
    // const data = Object.fromEntries(formData);
    // JSON.stringify(setData({ ...data }));
    console.log(email,password);
};

   function logn(){
    const requestOption={
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify({email,password})
    };
    const response= fetch('http://localhost:8000/getuserdata1',requestOption)
     .then(response=>response.json())
     .then(data=>{
      if (data && data.success) {
        // alert(data.message); // Display success message
        setData(data);
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
       
        // Redirect to Dogs page upon successful login
        navigate('/');
        console.log('Login successful:', data);
      } else {
        // Handle invalid login (e.g., display error message)
        alert('Invalid credentials');
        console.error('Login failed:', data.message);
      }
     })
     .catch(error => {
      alert('Login failed'); // Display error message
      console.error('Login failed:', error);
    });
    

   }

   function sgnup(){

    try{
    if(password==confpassword){
       const requestOption={
        method:'POST',
        headers:{'content-Type':'application/json'},
        body:JSON.stringify({email,password})
      };
      fetch('http://localhost:8000/userData',requestOption)
      .then(response=>response.json())
      .then(data=>{
        setData(data);
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
       
        navigate('/');
      });
      
      alert("THANKYOU TO JOIN THE ADOPET");

    }
    else{
      alert("please enter the same password in the confirm password field");
    }
    }
    catch(err)
    {
      console.log(err);
    }
   }

 return (
    <form onSubmit={handle}>
      <LoginPage style={{ height: 990, '--login-inner-height': '580px', backgroundImage: `url(${dog1})` }}>
        <Logo>
          <LoginLogo />
        </Logo>

        <Title />
        <Email keyname="subtitle" visible={false} index={0}>
          welcome to ADOPET
        </Email>
      
        <Email visible={false} />  {/* hide default Email field */}
        <Email id="ok" keyname="fields" index={1} placeholder="xsyz@gmail.com" onChange={(e)=>setemail(e.target.value)}/>
        <Password index={2} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

        <Footer>Not a member? <a href="#">Sign up now</a></Footer>       
        <Submit onClick={logn}>SUBMIT</Submit>

        {/* <Email panel="signup" keyname="email" visible={false} />  */}
        <Email panel="signup"   type="email" placeholder="E-mail" keyname="e-mail"  visible={true} onChange={(e)=>setemail(e.target.value)}/>
        {/* <Username panel="signup" label="E-mail" type="email" placeholder="E-mail" keyname="e-mail" /> */}
        <Password panel="signup" placeholder="enter password" keyname="password" onChange={(e)=>setPassword(e.target.value)}/>
        <Password panel="signup" placeholder="Please confirm your password" keyname="confirm-password" onChange={(e)=>setconfpassword(e.target.value)} />
        <Submit keyname="signup-submit" panel="signup" onClick={sgnup}>submit </Submit>
        <Footer panel="signup">a member? <a href="#">Login now</a></Footer>
      </LoginPage>
       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </form>
  );
};

export default Demo;
