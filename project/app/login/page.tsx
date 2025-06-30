'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <br />
              <CardTitle className="flex items-center space-x-2">
                <span className="text-sage-700">Sign In</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
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

              <Button className="w-full bg-sage-600 hover:bg-sage-700">
                Sign In
              </Button>

              <p className="text-center text-sm text-stone-600">
                New to <span className="text-sage-600 font-medium">Inkwell</span>?{' '}
                <Link
                  href="/sign-up"
                  className="text-emerald-600 hover:underline font-medium"
                >
                  Create an account
                </Link>
              </p>
              <br />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
