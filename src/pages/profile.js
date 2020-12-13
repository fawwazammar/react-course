/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { userService } from '../services';
import { getCookie, deleteCookie } from '../utils/cookie';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userDataLoading, setUserDataLoading] = useState(false);

  const logoutClicked = () => {
    deleteCookie('userData');
    deleteCookie('token');
    window.location.replace('/profile');
  };

  const userId = JSON.parse(getCookie('userData')).id;

  useEffect(() => {
    setUserDataLoading(true);
    userService
      .getUserById(userId)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, [userId]);

  return (
    <div>
      <h1> My Profile!</h1>
      {userDataLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <div>
            <p>{`name : ${name}`}</p>
            <p>{`email : ${email}`}</p>
          </div>
          <button
            className="logout"
            onClick={() => {
              logoutClicked();
            }}
          >
            logout
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
