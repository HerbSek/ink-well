export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  bannerImage: string;
  thumbnail: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  tags: string[];
  readingTime: number;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  publishedAt: string;
  replies?: Comment[];
}

export const mockPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-art-of-minimalist-design',
    title: 'The Art of Minimalist Design: Less is More',
    excerpt: 'Discover how minimalist design principles can transform your creative work and bring clarity to complex ideas.',
    content: `# The Art of Minimalist Design: Less is More

Minimalism in design isn't just about using less elements—it's about making every element count. This philosophy has revolutionized how we approach both digital and physical design spaces.

## The Power of White Space

White space, or negative space, is perhaps the most powerful tool in a minimalist designer's arsenal. It allows the eye to rest and draws attention to what truly matters.

> "The ability to simplify means to eliminate the unnecessary so that the necessary may speak." - Hans Hofmann

## Core Principles

1. **Clarity over Complexity**: Every element should serve a purpose
2. **Quality over Quantity**: Better to have fewer, well-crafted elements
3. **Functionality First**: Form follows function, always

## Practical Applications

When applying minimalist principles to your work:

- Remove decorative elements that don't serve the user
- Use consistent spacing and typography
- Embrace plenty of white space
- Choose a limited color palette

The result is designs that are not only beautiful but also highly functional and user-friendly.`,
    bannerImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Sarah is a UX designer and minimalist enthusiast with over 8 years of experience creating clean, user-focused interfaces.',
    },
    publishedAt: '2024-01-15',
    tags: ['Design', 'Minimalism', 'UX'],
    readingTime: 5,
  },
  {
    id: '2',
    slug: 'building-better-user-experiences',
    title: 'Building Better User Experiences Through Research',
    excerpt: 'Learn how user research can dramatically improve your product design and create meaningful connections with your audience.',
    content: `# Building Better User Experiences Through Research

User research is the foundation of great design. Without understanding your users, you're essentially designing in the dark.

## Why Research Matters

Research helps us:
- Understand user needs and pain points
- Validate design decisions
- Reduce development costs
- Increase user satisfaction

## Methods That Work

### Qualitative Research
- User interviews
- Usability testing
- Field studies

### Quantitative Research
- Analytics
- A/B testing
- Surveys

The key is combining both approaches for a complete picture.`,
    bannerImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: {
      name: 'Marcus Johnson',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Marcus is a product researcher who has helped dozens of startups understand their users and build better products.',
    },
    publishedAt: '2024-01-12',
    tags: ['UX Research', 'Product Design', 'User Testing'],
    readingTime: 7,
  },
  {
    id: '3',
    slug: 'future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore the emerging technologies and methodologies that will shape web development in the coming years.',
    content: `# The Future of Web Development: Trends to Watch

The web development landscape is constantly evolving. Here are the key trends that will define the next phase of web development.

## Edge Computing

Moving computation closer to users is becoming increasingly important for performance and user experience.

## AI Integration

From code generation to personalized user experiences, AI is becoming an integral part of web development.

## Web Assembly

WASM is opening up new possibilities for running high-performance applications in the browser.`,
    bannerImage: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnail: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Alex is a full-stack developer and tech writer who specializes in emerging web technologies.',
    },
    publishedAt: '2024-01-10',
    tags: ['Web Development', 'Technology', 'Future Trends'],
    readingTime: 6,
  },
  {
    id: '4',
    slug: 'sustainable-design-practices',
    title: 'Sustainable Design Practices for a Better Tomorrow',
    excerpt: 'How designers can contribute to environmental sustainability through thoughtful design choices and practices.',
    content: `# Sustainable Design Practices for a Better Tomorrow

As designers, we have a responsibility to consider the environmental impact of our work. Here's how we can design more sustainably.

## Digital Carbon Footprint

Every website, app, and digital product has a carbon footprint. By optimizing for performance, we can reduce energy consumption.

## Sustainable Materials

When working with physical products, choosing sustainable materials makes a significant difference.

## Longevity Over Trends

Designing for longevity rather than following short-term trends reduces waste and creates lasting value.`,
    bannerImage: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnail: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Emma is an environmental designer focused on creating sustainable solutions for brands and organizations.',
    },
    publishedAt: '2024-01-08',
    tags: ['Sustainability', 'Design', 'Environment'],
    readingTime: 4,
  },
];

export const mockComments: Comment[] = [
  {
    id: '1',
    author: 'John Doe',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'This is a fantastic article! I especially loved the section about white space. It really changed how I think about design.',
    publishedAt: '2024-01-16',
    replies: [
      {
        id: '2',
        author: 'Sarah Chen',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        content: 'Thank you so much, John! White space is definitely one of those concepts that seems simple but has profound impact.',
        publishedAt: '2024-01-16',
      },
    ],
  },
  {
    id: '3',
    author: 'Lisa Wang',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'I\'ve been struggling with minimalist design in my projects. This article gives me a clear framework to work with. Thanks!',
    publishedAt: '2024-01-17',
  },
];