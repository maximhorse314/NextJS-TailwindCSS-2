export default function Footer() {
  return (
    <div className="bg-white flex items-start px-6 pb-10 pt-2 flex-wrap -mt-20">
      <div className="w-full lg:w-1/3 flex-col mb-2">
        <h3 className="font-semibold text-sm">About us</h3>
        <p className="text-xs">
          We are a team of nurses, doctors, technologists and executives
          dedicated to help nurses find jobs that they love.
        </p>
        <br />
        <p className="text-xs">
          {' '}
          All copyright reserved &copy; 2020 - Health Explore
        </p>
      </div>
      <div className="w-full lg:w-1/3 flex-col mb-2">
        <h3 className="font-semibold text-sm">Sitemap</h3>
        <p className="text-xs">Nurses</p>
        <p className="text-xs">Employers</p>
        <p className="text-xs">Social networking</p>
        <p className="text-xs">Jobs</p>
      </div>
      <div className="w-full lg:w-1/3 flex-col mb-2">
        <h3 className="font-semibold text-sm">Privacy</h3>
        <p className="text-xs">Terms of use</p>
        <p className="text-xs">Privacy policy</p>
        <p className="text-xs">Cookie policy</p>
      </div>
    </div>
  );
}
