"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Network, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Network className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">Smart Lab</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              المميزات
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              قصص نجاح
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              الأسعار
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-foreground">
              تسجيل الدخول
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6">
              ابدأ مجاناً
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                المميزات
              </a>
              <a 
                href="#testimonials" 
                className="text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                قصص نجاح
              </a>
              <a 
                href="#pricing" 
                className="text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                الأسعار
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <Button variant="outline" className="w-full bg-transparent">
                  تسجيل الدخول
                </Button>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  ابدأ مجاناً
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
