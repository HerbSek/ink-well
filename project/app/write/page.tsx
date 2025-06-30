'use client';

import { useState } from 'react';
import { Save, Eye, Image as ImageIcon, Tag, Type } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [bannerImage, setBannerImage] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSave = () => {
    if (!title.trim()) {
      toast.error('Please add a title to your post');
      return;
    }
    if (!content.trim()) {
      toast.error('Please add some content to your post');
      return;
    }
    
    toast.success('Draft saved successfully!');
  };

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      toast.error('Please complete your post before publishing');
      return;
    }
    
    toast.success('Post published successfully! 🎉');
  };

  const renderPreview = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-6 mb-4 text-stone-800">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mt-5 mb-3 text-stone-800">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-4 mb-2 text-stone-800">{line.slice(4)}</h3>;
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-sage-300 pl-4 py-2 my-4 text-stone-600 italic bg-sage-50 rounded-r">
            {line.slice(2)}
          </blockquote>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="mb-4 text-stone-700 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-800 mb-2">Write a New Post</h1>
          <p className="text-stone-600">Share your thoughts and stories with the world.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white border-stone-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Type className="w-5 h-5" />
                  <span>Post Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter your post title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-lg font-medium"
                  />
                </div>

                <div>
                  <Label htmlFor="banner">Banner Image URL</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="banner"
                      placeholder="https://example.com/image.jpg"
                      value={bannerImage}
                      onChange={(e) => setBannerImage(e.target.value)}
                    />
                    <Button variant="outline" size="icon">
                      <ImageIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex space-x-2 mb-2">
                    <Input
                      id="tags"
                      placeholder="Add a tag..."
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                    />
                    <Button onClick={handleAddTag} variant="outline" size="icon">
                      <Tag className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-sage-100 text-sage-700 hover:bg-sage-200 cursor-pointer"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        {tag} ×
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Content</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsPreview(!isPreview)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {isPreview ? 'Edit' : 'Preview'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isPreview ? (
                  <div className="min-h-[400px] prose prose-lg max-w-none">
                    {title && <h1 className="text-3xl font-bold mb-6 text-stone-800">{title}</h1>}
                    {content ? renderPreview(content) : (
                      <p className="text-stone-400 italic">No content to preview yet.</p>
                    )}
                  </div>
                ) : (
                  <Textarea
                    placeholder="Write your post content here... 

You can use Markdown formatting:
# Heading 1
## Heading 2
### Heading 3
> Blockquote
- List item
1. Numbered list

Start writing your story..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[400px] resize-none font-serif text-base leading-relaxed"
                  />
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white border-stone-200">
              <CardHeader>
                <CardTitle>Publish</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={handleSave} variant="outline" className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                <Button onClick={handlePublish} className="w-full bg-sage-600 hover:bg-sage-700">
                  Publish Post
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-sage-50 border-sage-200">
              <CardHeader>
                <CardTitle className="text-sage-800">Writing Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-sage-700 space-y-2">
                <p>• Use clear, descriptive titles</p>
                <p>• Add relevant tags for discoverability</p>
                <p>• Include a compelling banner image</p>
                <p>• Break up text with headings and lists</p>
                <p>• Preview your post before publishing</p>
              </CardContent>
            </Card>

            <Card className="bg-stone-50 border-stone-200">
              <CardHeader>
                <CardTitle className="text-stone-800">Markdown Guide</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-stone-600 space-y-1 font-mono">
                <p># Large Heading</p>
                <p>## Medium Heading</p>
                <p>### Small Heading</p>
                <p>&gt; Quote</p>
                <p>- Bullet point</p>
                <p>1. Numbered list</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}