export function ProjectStatusCard({ project }) {
      return (
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">{project.name}</h3>
          <div className="mt-2 space-y-1">
            <div className="flex justify-between">
              <span className="text-sm">Progress</span>
              <span className="text-sm">{project.progress}%</span>
            </div>
            <div className="h-2 bg-accent rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        </div>
      )
    }
