import { SearchResult } from "../../store/storeInterfaces";
import FadeIn from "./FadeIn";
import HighlightText from "./HighlightText";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen--">
      <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

interface SearchResultsInnerProps {
  searchResults: SearchResult[];
  isLoading: boolean;
  query: string;
  error: string;
}

const SearchResults = ({
  searchResults,
  isLoading,
  query,
  error,
}: SearchResultsInnerProps) => {
  if (error) {
    return (
      <p className="my-5 text-white bg-red-600 p-4 rounded-lg">
        Whoops, something went wrong, error: {error}
      </p>
    );
  }
  return (
    <>
      <div className="my-5"></div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {searchResults.length === 0 && !isLoading && <p>Empty List</p>}

          {searchResults.length !== 0 && (
            <FadeIn>
              <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((data: any) => (
                      <tr
                        key={data.id}
                        className={`bg-white border-b dark:bg-gray-900 dark:border-gray-700 --- transition-opacity duration-500 ${
                          isLoading ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <td className="px-6 py-4">
                          <HighlightText text={data.id} highlight={query} />
                        </td>
                        <td className="px-6 py-4">
                          <HighlightText text={data.title} highlight={query} />
                        </td>
                        <td className="px-6 py-4">
                          <HighlightText
                            text={data.category}
                            highlight={query}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          )}
        </>
      )}
    </>
  );
};

export default SearchResults;
