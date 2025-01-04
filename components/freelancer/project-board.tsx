import { createClient } from '@/utils/supabase/server'
    import { ProjectCard } from './project-card'

    export async function ProjectBoard() {
      const supabase = createClient()
      const { data: projects } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false })

      return (
        <div className="space-y-4">
          {projects?.length ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="text-muted-foreground">
              No active projects found
            </div>
          )}
        </div>
      )
    }
