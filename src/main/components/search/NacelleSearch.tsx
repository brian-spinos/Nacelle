import { useDispatch, useSelector } from "react-redux";
import Util from "../../utils/Util";
import { clearQuery, setQuery, fetchData } from "../../store/searchSlice";
import { useCallback, useEffect } from "react";
import { SeachState } from "../../store/storeInterfaces";
import { AppDispatch } from "../../store/store";
import SearchResults from "./SearchResults";
import SearchHeader from "./SearchHeader";

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const NacelleSearch = ({ onSearch, placeholder }: SearchProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    query,
    results: searchResults,
    isLoading,
    error,
  } = useSelector((state: { search: SeachState }) => state.search);

  /**
   * Clear search when component loads
   */
  useEffect(() => {
    dispatch(clearQuery());
  }, []);

  /**
   * We need to use useCallback in order to avoid calling the function multiple times
   */
  const SearchDebounced = useCallback(
    Util.debounce((value: string) => {
      dispatch(fetchData(value));
    }, 300),
    []
  );

  const handleSearchByQuery = (value: string) => {
    dispatch(setQuery(value));
    SearchDebounced(value);
  };

  return (
    <div className="w-full mx-10 flex flex-col justify-center items-center py-6">
      <SearchHeader
        placeholder={placeholder ?? "Find something"}
        query={query}
        handleSearchByQuery={handleSearchByQuery}
        clearQuery={() => dispatch(clearQuery())}
      />

      <SearchResults
        searchResults={searchResults}
        isLoading={isLoading}
        query={query}
        error={error}
      />
    </div>
  );
};

export default NacelleSearch;
