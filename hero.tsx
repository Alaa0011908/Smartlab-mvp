"use client";

import { Button } from "@/components/ui/button";
import { Network, Wifi, Server, ArrowLeft } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 text-primary">
          <Network className="w-32 h-32" />
        </div>
        <div className="absolute bottom-40 left-20 text-primary">
          <Wifi className="w-24 h-24" />
        </div>
        <div className="absolute top-1/2 right-1/3 text-primary">
          <Server className="w-20 h-20" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            منصة عربية متخصصة في CCNA
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            اكتشف فجواتك
            <span className="block text-primary">بالشبكات</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            تعلّم شبكات الحاسوب بطريقة ذكية. نظامنا المدعوم بالذكاء الاصطناعي يحدد نقاط ضعفك ويبني لك مساراً تعليمياً مخصصاً للنجاح في شهادة CCNA.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              ابدأ التقييم المجاني
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-medium rounded-xl border-2 border-primary/20 hover:border-primary/40 bg-transparent"
            >
              شاهد كيف يعمل
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">+٥٠٠٠</div>
              <div className="text-sm text-muted-foreground mt-1">متدرب نشط</div>
            </div>
            <div className="text-center border-r border-l border-border px-4">
              <div className="text-3xl md:text-4xl font-bold text-primary">٩٣٪</div>
              <div className="text-sm text-muted-foreground mt-1">نسبة النجاح</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">+٣٠٠</div>
              <div className="text-sm text-muted-foreground mt-1">سيناريو عملي</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
