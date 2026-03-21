import ProjectList from '@/components/common/project-list';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types/project';

// Main Component
export default function PreviousProjectListSection(
  { projects }: { projects: Project[] },
) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Previous projects</h2>
      </div>

      {/* Project list */}
      <ProjectList projects={projects}/>

      {/* See All Projects Button */}
      <div className="text-center mt-12 pb-6">
          <Button className="bg-[#0f3a5d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#164771] transition shadow-lg hover:shadow-xl">
            Find More Projects
          </Button>
        </div>
    </section>
  );
};