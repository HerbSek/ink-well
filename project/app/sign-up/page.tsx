'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { Save, Eye, Image as ImageIcon, Tag, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

export default function SignUp() {
  // ✅ useState for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Here you would usually send the data to your backend
    toast.success('Signed up successfully!');
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-sage-700">Sign Up</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 space-x-1">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email ..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg font-medium"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password ..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-lg font-medium"
                />
              </div>

              <Button
                className="w-full bg-sage-600 hover:bg-sage-700"
                onClick={handleSignUp}
              >
                Sign Up
              </Button>

              <p className="text-center text-sm text-stone-600">
                Already on <span className="text-sage-600 font-medium">Inkwell</span>?{' '}
                <Link
                  href="/login"
                  className="text-emerald-600 hover:underline font-medium"
                >
                  Sign In
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
