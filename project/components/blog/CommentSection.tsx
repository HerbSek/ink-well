'use client';

import { useState } from 'react';
import { MessageCircle, Reply, Send } from 'lucide-react';
import { Comment } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CommentSectionProps {
  comments: Comment[];
}

interface CommentItemProps {
  comment: Comment;
  isReply?: boolean;
}

function CommentItem({ comment, isReply = false }: CommentItemProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (replyText.trim()) {
      console.log('Reply:', replyText);
      setReplyText('');
      setShowReplyForm(false);
    }
  };

  return (
    <div className={`${isReply ? 'ml-8 border-l-2 border-sage-200 pl-4' : ''}`}>
      <div className="flex space-x-3 mb-4">
        <Avatar className="w-8 h-8">
          <AvatarImage src={comment.avatar} alt={comment.author} />
          <AvatarFallback className="text-xs">
            {comment.author.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="bg-stone-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-medium text-stone-800">{comment.author}</span>
              <span className="text-sm text-stone-500">
                {new Date(comment.publishedAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">{comment.content}</p>
          </div>
          
          <div className="flex items-center mt-2 space-x-4">
            {!isReply && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowReplyForm(!showReplyForm)}
                className="text-stone-500 hover:text-sage-700"
              >
                <Reply className="w-4 h-4 mr-1" />
                Reply
              </Button>
            )}
          </div>
          
          {showReplyForm && (
            <div className="mt-3 space-y-3">
              <Textarea
                placeholder="Write a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="resize-none"
                rows={3}
              />
              <div className="flex space-x-2">
                <Button size="sm" onClick={handleReply} className="bg-sage-600 hover:bg-sage-700">
                  <Send className="w-4 h-4 mr-1" />
                  Reply
                </Button>
                <Button size="sm" variant="outline" onClick={() => setShowReplyForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-4">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentSection({ comments }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = () => {
    if (newComment.trim()) {
      console.log('New comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <Card className="bg-white border-stone-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span>Comments ({comments.length})</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="resize-none"
            rows={4}
          />
          <Button onClick={handleSubmit} className="bg-sage-600 hover:bg-sage-700">
            <Send className="w-4 h-4 mr-2" />
            Post Comment
          </Button>
        </div>
        
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}