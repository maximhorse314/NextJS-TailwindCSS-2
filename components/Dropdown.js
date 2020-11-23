export default function Dropdown({
  title = 'Options',
  options = [],
  optionHandle = () => {},
}) {
  const [isActive, setActive] = React.useState(false);

  const handleDropdownClick = () => setActive(!isActive);

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={handleDropdownClick}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm  text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-500 active:text-gray-200 transition ease-in-out duration-150"
          >
            {title} &nbsp;{' '}
            {isActive ? <span>&darr;</span> : <span>&rarr;</span>}
          </button>
        </span>
      </div>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg  h-64 overflow-y-auto ${
          isActive ? 'block' : 'hidden'
        }`}
      >
        {options.map((option, i) => {
          return (
            <div className="bg-white shadow-xs" key={i}>
              <div className="py-1">
                <div
                  className="block px-4 py-2 text-gray-700"
                  onClick={optionHandle}
                >
                  {typeof option === 'function' ? option() : option}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
