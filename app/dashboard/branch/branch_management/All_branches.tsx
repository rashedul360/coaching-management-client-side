import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaCodeBranch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { api_url } from '@/app/login/Login';
type Branch = {
  branch_id: string;
  branch_name: string;
  batch_id: string;
  address: string;
  branch_phone_number: string;
  branch_email: string;
};
const BranchCard = ({}) => {
  const [is_loading, set_is_loading] = useState(true);
  const [is_error, set_is_error] = useState(false);
  const [branches_data, set_branches_data] = useState({
    branches: [],
  });
  useEffect(() => {
    fetch(`${api_url}/branches`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(async (data) => {
        const res = await data.json();
        if (res) {
          set_branches_data(res);
          set_is_loading(false);
        }
      })
      .catch((err) => {
        set_is_error(true);
        set_is_loading(false);
        set_is_error(err);
      });
  }, []);
  let content;
  if (is_loading) content = <h1 className="text-1xl">Loading....</h1>;
  if (is_error && !is_loading)
    content = <h1 className="text-1xl">Error occured</h1>;
  if (!is_loading && !is_error && branches_data?.branches?.length > 0)
    content = (
      <div className="grid  gap-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
        {branches_data?.branches?.length > 0 &&
          branches_data?.branches?.map((branch: Branch) => (
            <div
              className="mt-10 max-w-sm w-full bg-white shadow-md rounded-xl p-5 space-y-3 border border-gray-200"
              key={branch.branch_id}
            >
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FaCodeBranch className="text-blue-500" /> {branch.branch_name}
              </h2>
              <p className="text-sm text-gray-600">
                Branch Code:{' '}
                <span className="font-medium">{branch.branch_id}</span>
              </p>
              <div className="text-sm text-gray-700 flex items-center gap-2">
                <MdLocationOn className="text-red-500" />
                {branch.address}
              </div>
              <div className="text-sm text-gray-700 flex items-center gap-2">
                <MdPhone className="text-green-500" />
                {branch.branch_phone_number}
              </div>
              <div className="text-sm text-gray-700 flex items-center gap-2">
                <MdEmail className="text-yellow-500" />
                {branch.branch_email}
              </div>
            </div>
          ))}
      </div>
    );

  return <>{content}</>;
};

export default BranchCard;
