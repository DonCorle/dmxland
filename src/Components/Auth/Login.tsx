import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { fetcher } from '../../lib/api';
import { setToken } from '../../lib/auth';

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({
    identifier: '',
    password: '',
  });

  // const { user, loading } = useUser();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            identifier: data.identifier,
            password: data.password,
          }),
        }
      );
      console.log(responseData);
      setToken(responseData);
      router.push('/main/home');
    } catch (error) {
      alert('계정 정보를 다시 확인하세요!'); // eslint-disable-line no-alert
      e.target.reset();
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex w-full">
      <div className="w-full bg-white border-2 rounded p-8 m-4 md:max-w-sm md:mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
            Login
          </span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mb-4 md:flex md:flex-wrap md:justify-between"
        >
          <div className="flex flex-col mb-4 md:w-full">
            <label className="font-bold text-lg mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border-2 py-2 px-3"
              type="text"
              name="identifier"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="flex flex-col mb-6 md:w-full">
            <label className="font-bold text-lg mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 py-2 px-3"
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <button
            className="block bg-teal-400 text-lg rounded p-4 mx-auto"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <div className="text-sm text-primary-600 font-semibold">
          <Link href="/auth/register">
            <a>회원가입</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
