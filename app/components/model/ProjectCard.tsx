'use clinet';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  skills: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, description, skills, link }) => {
  return (
    <Link href={link}>
      <div
        className="transform transition-transform duration-300 hover:scale-105"
        rel="noopener noreferrer"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <Image className="w-full" src={image} alt={name} width={400} height={225} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
