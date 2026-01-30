"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Route, MonitorPlay } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "تقييم بالذكاء الاصطناعي",
    description: "نظام ذكي يحلل مستواك الحالي ويكتشف نقاط الضعف في معرفتك بالشبكات بدقة عالية.",
    highlight: "تحليل شامل لـ ٢٠+ موضوع",
  },
  {
    icon: Route,
    title: "مسار تعليمي مخصص",
    description: "خطة دراسية مصممة خصيصاً لك بناءً على نتائج تقييمك وأهدافك الزمنية.",
    highlight: "توفير حتى ٤٠٪ من وقتك",
  },
  {
    icon: MonitorPlay,
    title: "سيناريوهات عملية",
    description: "تدرب على مواقف حقيقية من بيئات العمل الفعلية مع محاكاة تفاعلية للشبكات.",
    highlight: "+٣٠٠ سيناريو واقعي",
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            المميزات
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            لماذا Smart Lab CCNA؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            نقدم لك أدوات متقدمة تساعدك على التعلم بكفاءة أعلى والاستعداد للامتحان بثقة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-border/50 bg-background hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {feature.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
