'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { mockPosts } from '@/lib/mock-data';
import BlogCard from '@/components/blog/BlogCard';
import BlogSkeleton from '@/components/blog/BlogSkeleton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sage-50 to-paper py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
            Share Your Stories
          </h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            A beautiful platform for writers to share their thoughts, stories, and insights with the world.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-stone-300 focus:border-sage-500"
            />
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-stone-800 mb-2">Latest Articles</h2>
            <p className="text-stone-600">Discover stories, thinking, and expertise from writers on any topic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <BlogSkeleton key={index} />
              ))
            ) : currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <div key={post.id} className="animate-fade-in">
                  <BlogCard post={post} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-stone-500 text-lg">No articles found matching your search.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {!loading && filteredPosts.length > postsPerPage && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              
              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, index) => (
                  <Button
                    key={index + 1}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? "bg-sage-600 hover:bg-sage-700" : ""}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}