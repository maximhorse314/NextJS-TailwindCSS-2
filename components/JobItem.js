import { useState } from 'react';
import ItemDetail from './ItemDetail';
export default function JobItem({ job }) {
  const [showItem, setShowItem] = useState(false);
  return (
    <li
      className="flex flex-col items-center w-full space-y-2 cursor-pointer"
      key={job.name}
      onClick={() => setShowItem(!showItem)}
    >
      <div className="flex items-center space-x-4 w-full">
        <div className="w-8 h-8 bg-blue-700 text-white rounded flex items-center justify-center flex-shrink-0 text-xs uppercase">
          {job.name.substring(0, 2)}
        </div>
        <p className="text-gray-700">
          {job.items?.length || 0} jobs for {job.name}
        </p>
      </div>

      {showItem && (
        <ul className="flex flex-col w-full">
          {job.items.map((item, i) => (
            <ItemDetail item={item} key={i} />
          ))}
        </ul>
      )}
    </li>
  );
}
