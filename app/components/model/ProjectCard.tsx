'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  image: StaticImageData;
  name: string;
  description: string;
  skills: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, description, skills, link }) => {
  return (
    <Link href={link} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <div className="transform transition-transform duration-300 hover:scale-105 max-w-xs rounded overflow-hidden shadow-lg hover:shadow-2xl bg-primary-color h-[30rem]">
          <div className="relative w-full h-48"> {/* Fixed height for the image */}
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="px-6 py-4 flex flex-col justify-between h-48"> {/* Fixed height for the content */}
            <div>
              <div className="font-bold text-xl mb-2 text-secondary-color">{name}</div>
              <p className="text-secondary-color text-base">{description}</p> {/* Description without truncation */}
            </div>
            <div className="mt-2">
              {skills.length > 0 && (
                <span className="inline-block text-secondary-color text-sm font-semibold">
                  {skills.map((skill, index) => (
                    <span key={index}>
                      {index > 0 && ' ⋅ '}
                      {skill}
                    </span>
                  ))}
                </span>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
