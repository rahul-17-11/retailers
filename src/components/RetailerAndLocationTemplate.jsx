import { useState, useEffect } from "react";
import { RetailerCard } from "./RetailerCard";
import { RetailerCardSkeleton } from "./RetailerCardSkeleton";
import Searchbar from "./Searchbar";
import SelectCategory from "./SelectCategory";
import { useGeoStore } from "../store/useGeoStore";
import { useDebouce } from "../hooks/useDebounce";
import UserLocationCard from "./UserLocationCard";

export default function RetailerAndLocationTemplate() {
  const [retailers, setRetailers] = useState([]);
  const [isRetailersLoading, setIsRetailersLoading] = useState(true);

  const {
    searchRetailers,
    category,
    inputVal,
    filteredRetailer,
    filterBySearch,
    handleInput,
  } = useGeoStore();

  const debouncedSearch = useDebouce(inputVal, 400);

  const handleSort = () => {
    useGeoStore.getState().sortRetailerByDistance(retailers);
    setRetailers(useGeoStore.getState().sortedRetailer);
  };

  useEffect(() => {
    setIsRetailersLoading(true);

    let finalRetailers = [];

    if (debouncedSearch.trim()) {
      filterBySearch({ inputVal: debouncedSearch });
      finalRetailers = useGeoStore.getState().searchedRetailer;
    } else if (category) {
      finalRetailers = filteredRetailer;
    } else {
      finalRetailers = searchRetailers;
    }

    setRetailers(finalRetailers);

    const timeout = setTimeout(() => {
      setIsRetailersLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [debouncedSearch, category, searchRetailers]);

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary">Retailers</h1>

        <div className="flex flex-col w-full md:flex-row justify-center items-center gap-4 mb-4">
          <Searchbar inputVal={inputVal} handleInput={handleInput} />
          <SelectCategory />
          <button
            className="btn btn-sm btn-outline btn-accent"
            onClick={handleSort}
          >
            Sort By Closest
          </button>
        </div>

        {/* Retailer Cards Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isRetailersLoading
              ? [...Array(3)].map((_, index) => (
                  <RetailerCardSkeleton key={index} />
                ))
              : retailers.map((retailer) => (
                  <RetailerCard key={retailer.id} retailer={retailer} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
