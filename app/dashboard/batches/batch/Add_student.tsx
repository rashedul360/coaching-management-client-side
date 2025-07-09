'use client';
import { api_url } from '@/app/login/Login';
import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
type Props = {
  batch_info: any;
};
export default function Add_student({ batch_info }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, set_phone] = useState('');
  const [email, set_email] = useState('');
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`${api_url}/student/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        coaching_center_id: batch_info.coaching_center_id,
        branch_id: batch_info.branch_id,
        batch_id: batch_info.batch_id,
        phone_number: phone,
        email,
      }),
    }).then();
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 bg-green-400  hover:bg-green-500  transition text-white px-4 py-2 rounded-lg shadow"
      >
        <BiPlusCircle size={20} />
        Add User
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50 transition">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-bold mb-4">Add new Student</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
              <input
                type="text"
                placeholder="phone"
                onChange={(e) => set_phone(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => set_email(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
