import React from 'react';
let features = [
  {
    id: 1,
    title: 'Comprehensive Student Management',
    content:
      'Track every detail from enrollment to graduation. Maintain complete student profiles, academic history, attendance records, and payment status.',
  },
  {
    id: 2,
    title: 'Comprehensive Student Management',
    content:
      'Track every detail from enrollment to graduation. Maintain complete student profiles, academic history, attendance records, and payment status.',
  },
  {
    id: 3,
    title: 'Comprehensive Student Management',
    content:
      'Track every detail from enrollment to graduation. Maintain complete student profiles, academic history, attendance records, and payment status.',
  },
  {
    id: 4,
    title: 'Comprehensive Student Management',
    content:
      'Track every detail from enrollment to graduation. Maintain complete student profiles, academic history, attendance records, and payment status.',
  },
  {
    id: 5,
    title: 'Comprehensive Student Management',
    content:
      'Track every detail from enrollment to graduation. Maintain complete student profiles, academic history, attendance records, and payment status.',
  },
  {
    id: 6,
    title: 'Comprehensive Student Management',
    content:
      'Track every detail from enrollment to graduation. Maintain complete student profiles, academic history, attendance records, and payment status.',
  },
];
const Features = () => {
  return (
    <div className="p-4">
      <div className="text-center">
        <h2 className="text-4xl mb-4">Powerful Features</h2>
        <p className="text-1xl ">
          Everything you need to manage and grow your coaching center, all in
          one place
        </p>
      </div>
      {/* flex for features */}
      <div className="flex flex-wrap -mx-2 p-4">
        {features?.map((feature) => (
          <div
            key={feature.id}
            className="w-full lg:w-1/3 px-2 mb-4 rounded-3xl"
          >
            <div className="text-white p-6 rounded shadow border">
              <div>
                <svg
                  className="w-10 p-3 bg-green-500 text-white rounded"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user-graduate"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl">{feature.title}</h3>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
