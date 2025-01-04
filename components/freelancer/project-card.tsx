export function ProjectCard({ project }) {
      return (
        <div className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <h3 className="font-semibold">{project.name}</h3>
          <p className="text-sm text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm">
              Deadline: {new Date(project.deadline).toLocaleDateString()}
            </span>
            <span className="text-sm">
              Status: {project.status}
            </span>
          </div>
        </div>
      )
    }
