export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  shortDescription: string;
  description: string;
  category: 'website' | 'ecommerce' | 'automation' | 'mobile' | 'app';
  image: string;
  images?: string[];
  technologies: string[];
  features: string[];
  results?: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  link: string;
  date: string;
  year: number;
}
