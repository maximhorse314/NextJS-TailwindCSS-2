import { useState } from 'react';
import { useSearch } from '../contexts/searchFilter';
export default function FilterItem({ filters, filter }) {
  const [showModal, setShowModal] = useState(false);
  const nf = new Intl.NumberFormat();
  const { searchFilterTerm, setSearchFilterTerm } = useSearch();
  const handleFilterChange = (filterType, filterValue) => {
    setSearchFilterTerm({
      filter: {
        [filterType]: filterValue,
      },
      search: {
        name: searchFilterTerm.search.name,
      },
    });
  };
  return (
    <div className="bg-white h-auto p-5 tracking-tight text-sm">
      <h3 className="capitalize font-bold mb-2">{filter.replace('_', ' ')}</h3>
      {filters[filter].slice(0, 10).map((item) => {
        let getFilter = searchFilterTerm.filter[filter];
        return (
          <div
            key={item.key}
            className={`flex space-x-2 mb-2 cursor-pointer ${
              item.key === getFilter ? 'text-blue-500' : ''
            }`}
            onClick={() => handleFilterChange(filter, item.key)}
          >
            <h4>{item.key}</h4>
            <p className="text-gray-600">{nf.format(item.doc_count)}</p>
          </div>
        );
      })}
      {filters[filter].length > 10 && (
        <button
          className="text-blue-500 cursor-pointer focus:outline-none"
          onClick={() => setShowModal(true)}
        >
          Show Modal &rarr;
        </button>
      )}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold uppercase">{filter}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-wrap">
                  {filters[filter].map((item) => {
                    let getFilter = searchFilterTerm.filter[filter];
                    return (
                      <span
                        key={item.key}
                        className={`mb-4 mr-4 cursor-pointer ${
                          item.key === getFilter ? 'text-blue-500' : ''
                        }`}
                        onClick={() => handleFilterChange(filter, item.key)}
                      >
                        {item.key}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
