'use client';
import Login from '@/app/login/Login';
import React, { useState, ReactNode, useEffect } from 'react';

const Is_coaching_owner = ({ children }: { children: ReactNode }) => {
  const [is_owner, set_is_owner] = useState(false);
  const [is_loading, set_is_loading] = useState(true);
  const [is_error, set_is_error] = useState(false);
  const [responded_data, set_responded_data] = useState({});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(async (data) => {
        set_is_loading(true);
        const response = await data.json();
        if (response) {
          set_is_loading(false);
          set_is_owner(true);
        }
        set_responded_data(response);
        console.log(response);
        set_is_error(false);
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
      {is_error && <h1>error</h1>}
      {is_loading && <h1>loading...</h1>}
      {!is_error && !is_loading && is_owner && <h1>{children}</h1>}
      {!is_error && !is_loading && !is_owner && (
        <h1 className="text-black text-2xl text-center">Can't access</h1>
      )}
    </div>
  );
};

export default Is_coaching_owner;
