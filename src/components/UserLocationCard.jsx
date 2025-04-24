import { LoadingSkeleton } from "./LoadingSkeleton";
import { UserData } from "./UserData";

export default function UserLocationCard({ userData, isLoading }) {
  return (
    <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden max-w-md">
      {isLoading ? (
        <LoadingSkeleton />
      ) : userData ? (
        <UserData userData={userData} />
      ) : (
        <div className="p-6 text-center text-error">
          No location data available
        </div>
      )}
    </div>
  );
}
