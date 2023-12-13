import React, { useState } from 'react';
import { getManagerID } from './axiosformanager';
 
const YourComponent = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
 
  const fetchUserByID = async () => {
    try {
      const user = await getManagerID(userId);
      setUserData(user);
      setError(null);
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      setUserData(null);
      setError('Error fetching user. Please try again.');
    }
  };
 
  return (
    <div>
      <label>Admin ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={fetchUserByID}>Fetch User</button>
 
      {userData && (
        <div>
          <h2>User Data</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
 
      {error && <p>{error}</p>}
    </div>
  );
};
 
export default YourComponent;