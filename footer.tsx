"use client";

import { Network } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center">
                <Network className="w-6 h-6 text-foreground" />
              </div>
              <span className="font-bold text-xl">Smart Lab CCNA</span>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed">
              منصة عربية متخصصة في تعليم شهادة CCNA باستخدام الذكاء الاصطناعي. نساعدك على اكتشاف فجواتك وبناء مسار تعليمي مخصص للنجاح.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">المميزات</a></li>
              <li><a href="#" className="hover:text-background transition-colors">الأسعار</a></li>
              <li><a href="#" className="hover:text-background transition-colors">المدونة</a></li>
              <li><a href="#" className="hover:text-background transition-colors">الدعم</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">قانوني</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-background transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-background transition-colors">سياسة الاسترداد</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Smart Lab CCNA. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
