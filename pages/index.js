import { useState, useEffect } from 'react';
import Dropdown from '../components/Dropdown';
import Header from '../containers/layout/Headers';
import Footer from '../containers/layout/Footer';
import JobBoard from '../components/JobBoard';
import FilterItem from '../components/FilterItem';
import { useSearch } from '../contexts/searchFilter';

export default function IndexPage({ filters }) {
  const [jobs, setJobs] = useState([]);
  const { searchFilterTerm, setSearchFilterTerm } = useSearch();

  const handleSearchChange = (searchValue) => {
    setSearchFilterTerm({
      filter: {},
      search: {
        name: searchValue,
      },
    });
  };
  useEffect(() => {
    async function getJobs() {
      let response = await fetch('/api/job', {
        method: 'POST',
        body: JSON.stringify(searchFilterTerm),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let data = await response.json();
      setJobs(data);
    }
    getJobs();
  }, [searchFilterTerm]);

  return (
    <div>
      <Header />
      <div className="py-20 bg-gray-200 flex flex-col min-h-screen h-full">
        {/* search bar */}
        <div className="m-5 pt-0">
          <input
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search by company name"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
          />
        </div>

        <div className="lg:hidden flex justify-end items-center mr-5">
          <Dropdown
            title="Filters"
            options={Object.keys(filters).map((filter) => {
              return (
                <FilterItem filters={filters} filter={filter} key={filter} />
              );
            })}
          />
        </div>
        {/* display area */}
        <JobBoard jobs={jobs} filters={filters} />
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (_) => {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/filter`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { filters: data }, // will be passed to the page component as props
  };
};
