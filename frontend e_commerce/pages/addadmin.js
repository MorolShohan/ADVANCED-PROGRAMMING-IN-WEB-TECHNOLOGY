import { useState } from 'react';
import axios from 'axios';

export default function AddAdmin () {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };


  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!fullName || !email || !password || !confirmPassword || !phone || !file || !address) {
      console.log(fullName, email, password, confirmPassword, phone, file, address);
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (!isValidEmail(email)) {
        setError('Invalid email address');
        }
        // else if (!validateFile(file)) {
        //   setError('Invalid file format');
        //   }
    else {
     
    try {
      postData()
      setError("user created successfully");
    } catch (e) {
      setError(e);
    }
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setPhone('');
      setFile(null);
      setError('');
      setAddress('');
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
    };

    // const validateFile = (value) => {
    //   const file = value[0];
    //   const allowedtypes = ["image/jpg", "image/png"];

    //   if (!allowedtypes.includes(file.type)){
    //       return false;
    //   }
    //   }
      
    

  async function postData() {
   try {
     const formData = new FormData();
     formData.append('name', fullName);
     formData.append('email', email);
     formData.append('password', password);
     formData.append('phone', phone);
     formData.append('address', address);
     formData.append('image', document.querySelector('#myfile').files[0]);
    console.log(formData);
     const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/admin/signup/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
    }
     });
    
     const data = response.data;
     console.log(data);
     } catch (error) {
     console.error(error);
     }
    }

  return (
    <>
     
      <h1>Add Admin</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" name="fullName" value={fullName} onChange={handleChangeFullName} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handleChangePassword} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChangeConfirmPassword} />
        </div>
        <div>
          <label>Phone</label>
          <input type="number" name="phone" value={phone} onChange={handleChangePhone} />

        </div>
        <div>
          <label>address</label>
          <input type="text" name="address" value={address} onChange={handleChangeAddress} />

        </div>
        
        <div>
          <label>Upload File</label>
          <input type="file" name="myfile" id="myfile" onChange={handleChangeFile} />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
      </>
  );
};

