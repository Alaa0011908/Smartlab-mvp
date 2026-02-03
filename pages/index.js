"use client";

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        {/* سيتم استبدال هذا المحتوى لاحقاً */}
        <h1 className="text-3xl font-bold text-center pt-20">مرحباً بك في Smart Lab</h1>
      </div>
      <Analytics />
    </ThemeProvider>
  );
    }
