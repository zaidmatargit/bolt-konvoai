export function TeamMemberCard({ member }) {
      return (
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">{member.name}</h3>
          <p className="text-sm text-muted-foreground">
            {member.role}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm">
              Projects: {member.active_projects}
            </span>
            <span className="text-sm">
              Capacity: {member.capacity}%
            </span>
          </div>
        </div>
      )
    }
