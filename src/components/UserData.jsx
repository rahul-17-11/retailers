export function UserData({ userData }) {
  return (
    <div className="card-body p-6 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="card-title text-xl font-bold text-primary">
          User Location
        </h2>
        <div className="badge badge-accent">{userData.countryCode}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-secondary font-medium">IP Address:</p>
          <p className="font-mono">{userData.query}</p>
        </div>
        <div>
          <p className="text-secondary font-medium">Location:</p>
          <p>
            {userData.city}, {userData.regionName}
          </p>
        </div>
        <div>
          <p className="text-secondary font-medium">Country:</p>
          <p>{userData.country}</p>
        </div>
        <div>
          <p className="text-secondary font-medium">Timezone:</p>
          <p>{userData.timezone}</p>
        </div>
        <div>
          <p className="text-secondary font-medium">Coordinates:</p>
          <p>
            {userData.lat}, {userData.lon}
          </p>
        </div>
        <div>
          <p className="text-secondary font-medium">ZIP:</p>
          <p>{userData.zip}</p>
        </div>
      </div>

      <div className="divider my-2"></div>

      <div className="space-y-2">
        <div>
          <p className="text-secondary font-medium">ISP:</p>
          <p className="text-sm">{userData.isp}</p>
        </div>
        <div>
          <p className="text-secondary font-medium">Organization:</p>
          <p className="text-sm">{userData.org}</p>
        </div>
        <div>
          <p className="text-secondary font-medium">AS:</p>
          <p className="text-sm">{userData.as}</p>
        </div>
      </div>
    </div>
  );
}
