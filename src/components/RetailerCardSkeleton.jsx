export function RetailerCardSkeleton() {
  return (
    <div className="card bg-base-100 shadow-lg animate-pulse">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div className="h-6 bg-base-300 rounded w-32"></div>
          <div className="h-5 bg-base-300 rounded w-20"></div>
        </div>

        <div className="my-4 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-base-300 rounded-full"></div>
            <div className="h-4 bg-base-300 rounded w-48"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-base-300 rounded-full"></div>
            <div className="h-4 bg-base-300 rounded w-36"></div>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <div className="h-8 bg-base-300 rounded w-20"></div>
          <div className="h-8 bg-base-300 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
}
