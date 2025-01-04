export function UserCard({ user }) {
      return (
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">{user.email}</h3>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm">
              Role: {user.role}
            </span>
            <span className="text-sm">
              Status: {user.status}
            </span>
          </div>
        </div>
      )
    }
