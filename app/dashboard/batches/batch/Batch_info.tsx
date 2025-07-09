import { api_url } from '@/app/login/Login';
import React, { useEffect, useState } from 'react';
type Props = {
  batch_id: string;
  batch_name: string;
  set_batch_info: Function;
};
const Batch_info = ({ batch_id, batch_name, set_batch_info }: Props) => {
  const [batch, set_batch] = useState({
    start_date: '',
    end_date: '',
    students: [],
  });
  useEffect(() => {
    if (batch_id) {
      fetch(`${api_url}/batch/${batch_id}`).then(async (res) => {
        const data = await res.json();
        if (data?.success) {
          set_batch_info(data.batch);
          set_batch(data.batch);
        }
      });
    }
  }, [batch_id]);
  return (
    <div className="bg-green-200 rounded-2xl shadow p-6 border-green-300 border-4 mt-10">
      <h1 className="text-2xl font-bold mb-2">Batch: {batch_name}</h1>
      <p>Start Date: {batch.start_date}</p>
      <p>End Date: {batch.end_date}</p>
      <p>Total Students: {batch.students.length}</p>
    </div>
  );
};

export default Batch_info;
