import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className=" bg-slate-0 bottom-0 inset-x-0 text-gray-800 py-2.5   ">
      <div className="flex  justify-end items-center gap-x-3 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border-2 relative right-[25%]  border-gray-300 py-1 px-4 rounded-md bg-emerald-300"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border-2 relative right-[25%] border-gray-300 py-1 px-4 rounded-md bg-emerald-300"
          >
            Next
          </button>
        )}
        <p className="text-sm font-semibold  relative right-[-20%] ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
