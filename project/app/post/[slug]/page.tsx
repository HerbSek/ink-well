import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { mockPosts, mockComments } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import CommentSection from '@/components/blog/CommentSection';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// ✅ Required for static export with dynamic route
export async function generateStaticParams() {
  return mockPosts.map(post => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = mockPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-stone-800">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-stone-800">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-5 mb-2 text-stone-800">{line.slice(4)}</h3>;
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-sage-300 pl-4 py-2 my-4 text-stone-600 italic bg-sage-50 rounded-r">
            {line.slice(2)}
          </blockquote>
        );
      }
      if (line.match(/^\d+\./)) {
        return <li key={index} className="ml-4 mb-1 text-stone-700">{line.replace(/^\d+\.\s*/, '')}</li>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 mb-1 text-stone-700 list-disc">{line.slice(2)}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="mb-4 text-stone-700 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-paper">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 text-stone-600 hover:text-sage-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="relative aspect-[21/9] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.bannerImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-sage-100 text-sage-700 hover:bg-sage-200">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-stone-800 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-stone-200">
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-stone-800">{post.author.name}</p>
                <div className="flex items-center space-x-4 text-sm text-stone-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-lg leading-relaxed">
            {renderContent(post.content)}
          </div>
        </div>

        <Card className="mb-8 bg-sage-50 border-sage-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback className="text-lg">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-stone-800">{post.author.name}</h3>
                <p className="text-stone-600 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <CommentSection comments={mockComments} />
      </article>
    </div>
  );
}
