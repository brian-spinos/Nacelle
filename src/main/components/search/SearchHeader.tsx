interface SearchHeaderProps {
  placeholder: string;
  query: string;
  handleSearchByQuery: (value: string) => void;
  clearQuery: () => void;
}

const SearchHeader = ({
  placeholder,
  query,
  handleSearchByQuery,
  clearQuery,
}: SearchHeaderProps) => {
  return (
    <>
      <div className="flex flex-col space-x-2-- max-w-lg w-full bg-white rounded-lg shadow-md p-4">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex space-x-2 max-w-lg w-full p-4"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => {
                handleSearchByQuery(e.target.value);
              }}
              placeholder={placeholder}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={() => {
                handleSearchByQuery(query);
              }}
              type="button"
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>

            <button
              onClick={() => {
                clearQuery();
              }}
              type="button"
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Clear
            </button>
          </form>
        </div>
        <div>
          <div className="text-gray-300">
            * Type "ERROR" without the quotes to see how I handle errors
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
