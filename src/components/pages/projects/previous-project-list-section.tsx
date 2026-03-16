import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Types
interface TeamMember {
  name: string;
  avatar?: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: 'fintech' | 'camtour';
  tags: string[];
  status: string;
  team: TeamMember[];
  image?: string;
}

// Mock Data based on the image
const projects: Project[] = [
  {
    id: '1',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '2',
    title: 'CAMTour Chatbot',
    subtitle: '',
    type: 'camtour',
    tags: ['CV Club'],
    status: 'On going',
    team: [
      { name: 'N. Tina', avatar: '/avatars/user3.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
      { name: '3 others', avatar: undefined },
    ],
  },
  {
    id: '3',
    title: 'CAMTour Chatbot',
    subtitle: '',
    type: 'camtour',
    tags: ['CV Club'],
    status: 'On going',
    team: [
      { name: 'N. Tina', avatar: '/avatars/user3.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
      { name: '3 others', avatar: undefined },
    ],
  },
  {
    id: '4',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '5',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '6',
    title: 'CAMTour Chatbot',
    subtitle: '',
    type: 'camtour',
    tags: ['CV Club'],
    status: 'On going',
    team: [
      { name: 'N. Tina', avatar: '/avatars/user3.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
      { name: '3 others', avatar: undefined },
    ],
  },
  {
    id: '7',
    title: 'CAMTour Chatbot',
    subtitle: '',
    type: 'camtour',
    tags: ['CV Club'],
    status: 'On going',
    team: [
      { name: 'N. Tina', avatar: '/avatars/user3.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
      { name: '3 others', avatar: undefined },
    ],
  },
  {
    id: '8',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '9',
    title: 'CAMTour Chatbot',
    subtitle: '',
    type: 'camtour',
    tags: ['CV Club'],
    status: 'On going',
    team: [
      { name: 'N. Tina', avatar: '/avatars/user3.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
      { name: '3 others', avatar: undefined },
    ],
  },
  {
    id: '10',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '11',
    title: 'CAMTour Chatbot',
    subtitle: '',
    type: 'camtour',
    tags: ['CV Club'],
    status: 'On going',
    team: [
      { name: 'N. Tina', avatar: '/avatars/user3.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
      { name: '3 others', avatar: undefined },
    ],
  },
  {
    id: '12',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '13',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '14',
    title: 'CAMTour Chatbot',
    subtitle: '',
    type: 'camtour',
    tags: ['CV Club'],
    status: 'On going',
    team: [
      { name: 'N. Tina', avatar: '/avatars/user3.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
      { name: '3 others', avatar: undefined },
    ],
  },
  {
    id: '15',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '16',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '17',
    title: 'CAMTour Chatbot',
    subtitle: '',
    type: 'camtour',
    tags: ['CV Club'],
    status: 'On going',
    team: [
      { name: 'N. Tina', avatar: '/avatars/user3.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
      { name: '3 others', avatar: undefined },
    ],
  },
  {
    id: '18',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '19',
    title: 'FINTECH',
    subtitle: 'Project Management',
    type: 'fintech',
    tags: ['Business Club'],
    status: 'On going',
    team: [
      { name: 'N. Vanna', avatar: '/avatars/user1.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
    ],
  },
  {
    id: '20',
    title: 'CAMTour Chatbot',
    subtitle: '',
    type: 'camtour',
    tags: ['CV Club'],
    status: 'On going',
    team: [
      { name: 'N. Tina', avatar: '/avatars/user3.jpg' },
      { name: 'S. Rachana', avatar: '/avatars/user2.jpg' },
      { name: '3 others', avatar: undefined },
    ],
  },
];

// Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const isFintech = project.type === 'fintech';
  
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <CardContent className="p-0">
        {/* Card Image/Header */}
        <div 
          className={`h-40 relative overflow-hidden ${
            isFintech 
              ? 'bg-gradient-to-br from-teal-600 to-teal-800' 
              : 'bg-gradient-to-br from-blue-500 to-blue-700'
          }`}
        >
          {isFintech ? (
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
                <p className="text-teal-100 text-sm">{project.subtitle}</p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-4">
              {/* Placeholder for isometric illustration */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-20 h-20 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <p className="font-semibold text-sm">{project.title}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-1">
            {project.title} {project.subtitle && <span className="font-normal text-gray-600">- {project.subtitle}</span>}
          </h4>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {tag}
              </Badge>
            ))}
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
              {project.status}
            </Badge>
          </div>

          {/* Team Members */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {project.team.map((member, index) => (
                <Avatar 
                  key={index} 
                  className="w-7 h-7 border-2 border-white"
                >
                  {member.avatar ? (
                    <AvatarImage src={member.avatar} alt={member.name} />
                  ) : (
                    <AvatarFallback className="text-xs bg-gray-200">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
              ))}
            </div>
            <span className="text-xs text-gray-500">
              {project.team.map(m => m.name).join(', ')}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Mobile Carousel Component
const ProjectCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps'
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project) => (
            <div key={project.id} className="flex-[0_0_85%] min-w-0 mr-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Carousel Controls */}
      <div className="flex justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

// Main Component
const ProjectListSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Previous projects</h2>
      </div>

      {/* Mobile Carousel */}
      <ProjectCarousel />

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* See All Projects Button */}
      <div className="text-center mt-12 pb-6">
          <Button className="bg-[#0f3a5d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#164771] transition shadow-lg hover:shadow-xl">
            Find More Projects
          </Button>
        </div>
    </section>
  );
};

export default ProjectListSection;