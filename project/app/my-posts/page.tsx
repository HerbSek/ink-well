'use client';

import { useState } from 'react';
import { Edit, Trash2, Eye, Calendar } from 'lucide-react';
import { mockPosts } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { toast } from 'sonner';

export default function MyPostsPage() {
  const [posts, setPosts] = useState(mockPosts);

  const handleDelete = (postId: string) => {
    setPosts(posts.filter(post => post.id !== postId));
    toast.success('Post deleted successfully');
  };

  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-stone-800 mb-2">My Posts</h1>
            <p className="text-stone-600">Manage your published articles and drafts.</p>
          </div>
          <Link href="/write">
            <Button className="bg-sage-600 hover:bg-sage-700">
              Write New Post
            </Button>
          </Link>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="bg-white border-stone-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-sage-100 text-sage-700 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-stone-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm text-stone-500 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Published {new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <span>•</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <Link href={`/post/${post.slug}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <Card className="bg-white border-stone-200">
            <CardContent className="p-12 text-center">
              <div className="text-stone-400 mb-4">
                <Edit className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">No posts yet</h3>
              <p className="text-stone-600 mb-6">Start writing your first post to share your thoughts with the world.</p>
              <Link href="/write">
                <Button className="bg-sage-600 hover:bg-sage-700">
                  Write Your First Post
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}