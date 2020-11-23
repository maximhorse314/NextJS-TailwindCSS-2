import { useState } from 'react';
export default function ItemDetail({ item }) {
  const [showDetail, setShowDetail] = useState(false);
  let weekAgo = Math.ceil(
    (+new Date() - +new Date(item.created)) / (24 * 60 * 60 * 1000 * 7)
  );

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDetail(!showDetail);
  };
  return (
    <li className="flex flex-col border-t p-3 text-sm" onClick={handleClick}>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h4 className="font-bold">{item.job_title}</h4>
          <p>
            {[
              item.job_type,
              item.salary_range
                .map((s) => `$${Math.round(s)}`)
                .join(' - ')
                .concat(' an hour'),
              item.city,
            ].join(' | ')}
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            {weekAgo} week{weekAgo > 1 ? 's' : ''} ago{' '}
          </p>
        </div>
      </div>
      {showDetail && (
        <div className="flex py-4 w-full bg-gray-200 px-2 md:px-4 rounded shadow mt-2">
          <div className="flex flex-col w-2/3 items-start py-1">
            <div className="flex flex-row mb-4 w-full items-start flex-wrap">
              <h4 className="font-semibold w-full md:w-1/2">Department</h4>
              <p className="w-full md:w-1/2 tracking-tighter">
                {item.department.join(', ')}
              </p>
            </div>
            <div className="flex flex-row mb-4 w-full items-start flex-wrap">
              <h4 className="font-semibold w-full md:w-1/2">Hours/Shifts</h4>
              <p className="w-full md:w-1/2 tracking-tighter">
                {item.hours?.[0] || 0} hours / {item.work_schedule}
              </p>
            </div>
            <div className="flex flex-row mb-4 w-full items-start flex-wrap">
              <h4 className="font-semibold w-full md:w-1/2">Summary</h4>
              <p className="w-full md:w-1/2 tracking-tighter">
                {item.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center w-1/3 space-y-2">
            <button className="border bg-blue-600 text-white rounded-lg px-4 py-2 text-xs md:text-sm">
              Job Details
            </button>
            <button className="border border-blue-600 text-blue-600 rounded-lg px-4 py-2">
              Save Job
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
