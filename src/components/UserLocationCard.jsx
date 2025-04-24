import { useGeoStore } from "../store/useGeoStore";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { UserData } from "./UserData";

export default function UserLocationCard({ isLoading }) {
  const { geoInfo } = useGeoStore();
  return (
    <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden max-w-md">
      {isLoading ? (
        <LoadingSkeleton />
      ) : geoInfo ? (
        <UserData userData={geoInfo} />
      ) : (
        <div className="p-6 text-center text-error">
          No location data available
        </div>
      )}
    </div>
  );
}
