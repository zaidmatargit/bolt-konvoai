import { createClient } from '@/utils/supabase/server'
    import { ProjectStatusCard } from './project-status-card'

    export async function ProjectStatus() {
      const supabase = createClient()
      const { data: projects } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      return (
        <div className="space-y-4">
          {projects?.map((project) => (
            <ProjectStatusCard key={project.id} project={project} />
          ))}
        </div>
      )
    }
