import JobItem from './JobItem';
import FilterItem from './FilterItem';
import { useSearch } from '../contexts/searchFilter';

export default function JobBoard({ jobs, filters }) {
  const { setSearchFilterTerm } = useSearch();
  const resetSearchFilter = () => {
    setSearchFilterTerm({
      filter: {},
      search: {},
    });
  };
  return (
    <div className="flex m-5 lg:space-x-4">
      <div className="hidden lg:flex flex-col w-1/4 space-y-4">
        {Object.keys(filters).map((filter) => {
          return <FilterItem filters={filters} filter={filter} key={filter} />;
        })}
      </div>
      <div className="flex flex-col  w-full lg:w-3/4 min-h-screen h-full">
        <div className="bg-white min-h-screen h-auto flex flex-col w-full">
          {/* job stats and sorters*/}
          <div className="flex mb-2 items-center justify-between p-5 text-sm tracking-tight">
            <div>
              <strong>
                {jobs.reduce((acc, job) => acc + job.items.length, 0)}
              </strong>{' '}
              job postings &nbsp;{' '}
              <button
                className="text-blue-500 cursor-pointer focus:outline-none"
                onClick={resetSearchFilter}
              >
                Reset Filter
              </button>
            </div>
            <div className="hidden lg:flex space-x-4">
              <h4 className="font-semibold text-gray-500">Sort</h4>
              <p>Location</p>
              <p>Experience</p>
              <p>Role</p>
            </div>
          </div>
          {/* jobs listing */}
          <ul className="p-4 flex flex-col space-y-5">
            {jobs.map((job) => (
              <JobItem job={job} key={job.name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
