import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Login = () => {
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  const onGoogleSignInSuccess = (res: CredentialResponse) => {
    const decodeding = jwt_decode(res.credential as string);
    console.log(decodeding);
  };

  return (
    <div className="flex h-full w-full items-center bg-gray-50">
      <div className="mx-auto my-0 w-full max-w-[24rem]">
        <div className="flex flex-col items-center border border-gray-300 bg-white p-4">
          <p className="mb-6 mt-8 text-2xl font-bold">codekoi</p>
          <div className="broder-gray-300 mb-4 flex w-full justify-center border-b pb-4">
            <GoogleLogin onSuccess={onGoogleSignInSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
