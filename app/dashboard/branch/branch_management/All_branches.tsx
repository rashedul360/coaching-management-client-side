import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaCodeBranch } from 'react-icons/fa';

type BranchCardProps = {
  branch_name: string;
  branch_code: string;
  location: string;
  district: string;
  contact_number: string;
  email: string;
};

const BranchCard = ({}) => {
  return (
    <div className="grid  gap-5 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2">
      <div className="mt-10 max-w-sm w-full bg-white shadow-md rounded-xl p-5 space-y-3 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaCodeBranch className="text-blue-500" /> branch_name
        </h2>
        <p className="text-sm text-gray-600">
          Branch Code: <span className="font-medium">branch_code</span>
        </p>
        <div className="text-sm text-gray-700 flex items-center gap-2">
          <MdLocationOn className="text-red-500" />
          location, district
        </div>
        <div className="text-sm text-gray-700 flex items-center gap-2">
          <MdPhone className="text-green-500" />
          contact_number
        </div>
        <div className="text-sm text-gray-700 flex items-center gap-2">
          <MdEmail className="text-yellow-500" />
          email
        </div>
      </div>
      <div className="mt-10 max-w-sm w-full bg-white shadow-md rounded-xl p-5 space-y-3 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaCodeBranch className="text-blue-500" /> branch_name
        </h2>
        <p className="text-sm text-gray-600">
          Branch Code: <span className="font-medium">branch_code</span>
        </p>
        <div className="text-sm text-gray-700 flex items-center gap-2">
          <MdLocationOn className="text-red-500" />
          location, district
        </div>
        <div className="text-sm text-gray-700 flex items-center gap-2">
          <MdPhone className="text-green-500" />
          contact_number
        </div>
        <div className="text-sm text-gray-700 flex items-center gap-2">
          <MdEmail className="text-yellow-500" />
          email
        </div>
      </div>
      <div className="mt-10 max-w-sm w-full bg-white shadow-md rounded-xl p-5 space-y-3 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaCodeBranch className="text-blue-500" /> branch_name
        </h2>
        <p className="text-sm text-gray-600">
          Branch Code: <span className="font-medium">branch_code</span>
        </p>
        <div className="text-sm text-gray-700 flex items-center gap-2">
          <MdLocationOn className="text-red-500" />
          location, district
        </div>
        <div className="text-sm text-gray-700 flex items-center gap-2">
          <MdPhone className="text-green-500" />
          contact_number
        </div>
        <div className="text-sm text-gray-700 flex items-center gap-2">
          <MdEmail className="text-yellow-500" />
          email
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
