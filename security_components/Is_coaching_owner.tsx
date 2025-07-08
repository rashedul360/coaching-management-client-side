'use client';
import { api_url } from '@/app/login/Login';
import Link from 'next/link';
import React, { useState, ReactNode, useEffect } from 'react';

const Is_coaching_owner = ({ children }: { children: ReactNode }) => {
  const [is_owner, set_is_owner] = useState(false);
  const [is_loading, set_is_loading] = useState(true);
  const [is_error, set_is_error] = useState(false);
  const [responded_data, set_responded_data] = useState({
    message: '',
    success: false,
  });
  useEffect(() => {
    fetch(`${api_url}/security/owner`, {
      method: 'POST',
      credentials: 'include',
    })
      .then(async (data) => {
        const response = await data.json();
        if (response?.success) {
          set_is_loading(false);
          set_is_owner(true);
        } else {
          set_is_error(true);
          set_is_loading(false);
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
  console.log(responded_data);
  return (
    <div>
      {is_error && !responded_data?.success && (
        <div className="flex items-center justify-center h-[100vh] text-center">
          <div>
            <h1 className="block text-2xl">{responded_data?.message}</h1>
            <Link href={'/portal'}>
              <button className="btn py-1  p-5 bg-green-600 text-white rounded">
                Go to Portal
              </button>
            </Link>
          </div>
        </div>
      )}
      {is_loading && (
        <div className="flex items-center justify-center w-full h-[100vh]">
          <h1 className="text-3xl">Security Checking...</h1>
        </div>
      )}
      {!is_error && !is_loading && is_owner && <h1>{children}</h1>}
      {!is_error && !is_loading && !is_owner && (
        <h1 className="text-black text-2xl text-center">Can't access</h1>
      )}
    </div>
  );
};

export default Is_coaching_owner;
