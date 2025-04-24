export function LoadingSkeleton() {
  return (
    <div className="p-6 space-y-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-6 bg-base-300 rounded w-32"></div>
        <div className="h-5 bg-base-300 rounded w-10"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-base-300 rounded w-20"></div>
            <div className="h-5 bg-base-300 rounded w-full"></div>
          </div>
        ))}
      </div>

      <div className="h-px bg-base-300 my-4"></div>

      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-4 bg-base-300 rounded w-24"></div>
          <div className="h-5 bg-base-300 rounded w-full"></div>
        </div>
      ))}
    </div>
  );
}
