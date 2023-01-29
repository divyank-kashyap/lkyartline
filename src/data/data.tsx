import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chaitanya Garg.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a India based <strong className="text-stone-100">Artist/ Content Creater</strong>, currently pursuing my
         <strong className="text-stone-100"> Bachelors of Fine Arts</strong> and recording peoples happy reactions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me chilling in <strong className="text-stone-100">Mall Road, Shimla </strong>,
        love to explore <strong className="text-stone-100"> Beauty </strong> in life.{' '}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hey it's me Chaitanya. I am just learning skills and trying to improve in life.`,
  aboutItems: [
    {label: 'Location', text: 'Shimla, India', Icon: MapIcon},
    {label: 'Age', text: '19', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Sketching, Singing, Photography', Icon: SparklesIcon},
    {label: 'Study', text: 'HPU University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Unemployed', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Hindi',
        level: 10,
      },
    ],
  },
  {
    name: 'Skills',
    skills: [
      {
        name: 'Drawing',
        level: 9,
      },
      {
        name: 'Sketching',
        level: 7,
      },
      {
        name: 'Painting',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2021',
    location: 'JNV Shimla',
    title: '12th Class',
    content: <p>Have finished my 10th and 12th from JNV Shimla. I have done Commerce in 12th Class.
    </p>,
  },
  {
    date: 'Sep/21/2021 - Present',
    location: 'HPU University',
    title: 'Bachelors of Fine Arts',
    content: <p>Just pursuing my BFA from HPU University and improving my skills.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'Instagram',
    title: 'Content Creater',
    content: (
      <p>
        I love to make Sketches of People and record their reactions.
      </p>
    ),
  },
  {
    date: '2023',
    location: 'Online/ Offline Orders',
    title: 'Sketch Orders',
    content: (
      <p>
        I also take orders Online / Offline from people.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Divyank ',
      text: 'Bhai I tried my best.. Or bhai ye rahi teri site.. Abhi bhi kaam baaki ha',
      image: 'https://yt3.googleusercontent.com/ytc/AL5GRJWV1oBEaIV0qaUHUJl7gSuzuG_Kptj2T4GJVY2Tzw=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      name: 'Jass Manak',
      text: 'Big Fan of Chatur Chet.. Boss de number aa ;)',
      image: 'https://play-lh.googleusercontent.com/9rGKVdpVf1zaNKvK0wyPnFRkAidUEnHUOuuxezubqyIhRsjqnrz2Il6XhgsvbMrJrVs',
    },
    {
      name: 'Babu Ram Dev',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://wd-image.webdunia.com/image-conversion/process-aws.php?url=https://nonprod-media.webdunia.com/public_html/_media/hi/img/article/2020-01/24/full/1579872675-9051.jpg&w=&h=&outtype=webp',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You guys can reach me : ',
  items: [
    {
      type: ContactType.Email,
      text: 'lkygarg123@gmail.com',
      href: 'mailto:lkygarg123@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Shimla, India',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@lky__artline',
      href: 'https://www.instagram.com/lky__artline/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lucky-garg-28903325b/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/lky__artline/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
