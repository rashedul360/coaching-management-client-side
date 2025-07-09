'use client';
import Login, { api_url } from '@/app/login/Login';

import React, { useState, ReactNode, useEffect } from 'react';

const Is_logged_in = ({ children }: { children: ReactNode }) => {
  const [is_logged_in, set_is_logged_in] = useState(false);
  const [is_loading, set_is_loading] = useState(true);
  const [is_error, set_is_error] = useState(false);
  const [responded_data, set_responded_data] = useState({
    message: '',
    error: false,
  });
  useEffect(() => {
    fetch(`${api_url}/security `, {
      credentials: 'include',
      method: 'POST',
    })
      .then(async (data) => {
        const response = await data.json();
        if (response?.success) {
          set_is_loading(false);
          set_is_logged_in(true);
        }
        if (!response?.success) {
          set_is_loading(false);
          set_is_logged_in(false);
        }
        set_responded_data(response);
      })
      .catch((err) => {
        if (err) {
          set_is_error(true);
          set_is_loading(false);
        }
      });
  }, []);
  return (
    <div>
      {is_error ||
        (responded_data?.error && (
          <h1 className=" text-center p-3 bg-red-500">
            {responded_data?.message}
          </h1>
        ))}
      {is_loading && (
        <div className="flex items-center justify-center w-full h-[100vh]">
          <h1 className="text-3xl">Security Checking...</h1>
        </div>
      )}
      {!is_error && !is_loading && is_logged_in && <h1>{children}</h1>}
      {!is_error && !is_loading && !is_logged_in && <Login />}
    </div>
  );
};

export default Is_logged_in;
