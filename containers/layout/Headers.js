import Link from 'next/link';
import Dropdown from '../../components/Dropdown';
export default function Header() {
  return (
    <header className="flex items-center shadow text-gray-700 fixed bg-white w-full h-16 z-20 px-6 justify-between uppercase font-bold text-xs tracking-tight">
      <Link href="/">
        <a className="">
          <span className="sr-only">Health Explore</span>
          <h4 className="text-blue-600">Health Explore</h4>
        </a>
      </Link>

      <div className="hidden lg:flex space-x-10">
        <h4>Profile</h4>
        <h4>Jobs</h4>
        <h4>Professional Network</h4>
        <h4>Lounge</h4>
        <h4>Salary</h4>
      </div>

      <div className="flex space-x-4 items-center">
        <button className="hidden lg:flex text-blue-600 border border-blue-700 hover:border-blue-600 hover:text-blue-500 rounded-md px-2 py-1">
          Create Job
        </button>

        <span className="inline-block relative">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm border-2">
            JO
          </div>
          <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-600 border border-white text-xs flex items-center justify-center text-white font-thin">
            2
          </span>
        </span>

        <h4>Logout</h4>
        <span className="lg:hidden">
          <Dropdown
            title="Options"
            options={[
              () => (
                <span className="border border-blue-500 text-blue-500 px-2 py-1 flex w-full rounded items-center justify-center">
                  Create Job
                </span>
              ),
              'Profile',
              'Jobs',
              'Professional Network',
              'Lounge',
              'Salary',
            ]}
            optionHandle={(e) => console.log(e.target)}
          />
        </span>
      </div>
    </header>
  );
}
