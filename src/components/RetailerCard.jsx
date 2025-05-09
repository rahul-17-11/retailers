import { useGeoStore } from "../store/useGeoStore";
import { ImWhatsapp } from "react-icons/im";

export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

// Format the distance to be more readable
function formatDistance(distance) {
  if (distance < 1) {
    return `${Math.round(distance * 1000)} m`;
  }
  return `${distance.toFixed(1)} km`;
}

export function RetailerCard({ retailer }) {
  const { location } = useGeoStore();

  // Calculate distance if location is available
  let distance = null;
  if (location && location.latitude && location.longitude) {
    distance = calculateDistance(
      location.latitude,
      location.longitude,
      retailer.latitude,
      retailer.longitude
    );
  }

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg font-bold">{retailer.name}</h2>
          <div className="badge badge-secondary">{retailer.category}</div>
        </div>

        <div className="my-2 space-y-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">{retailer.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-sm">+{retailer.phoneNumber}</span>
          </div>

          {/* Display distance information if available */}
          {distance !== null && (
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <span className="text-sm font-medium">
                {formatDistance(distance)} away
              </span>
            </div>
          )}
        </div>

        <div className="card-actions justify-end mt-2">
          <a
            href={`https://maps.google.com/?q=${retailer.latitude},${retailer.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline btn-accent"
          >
            Directions
          </a>
          <a
            href={retailer.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary rounded-full"
          >
            <ImWhatsapp className="size-full p-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
