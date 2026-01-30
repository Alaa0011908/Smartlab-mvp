"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "أحمد الخطيب",
    role: "مهندس شبكات - دمشق",
    content: "بفضل Smart Lab حصلت على شهادة CCNA من المحاولة الأولى. التقييم الذكي ساعدني أركز على نقاط ضعفي بدل ما أضيع وقتي.",
    initials: "أخ",
  },
  {
    name: "سارة المحمد",
    role: "طالبة IT - حلب",
    content: "المنصة غيرت طريقة دراستي كلياً. السيناريوهات العملية خلتني أفهم المفاهيم بشكل عملي مو بس نظري.",
    initials: "سم",
  },
  {
    name: "محمود الحسن",
    role: "مدير تقنية المعلومات - اللاذقية",
    content: "أنصح كل شخص يريد يدخل مجال الشبكات يبدأ من هنا. المحتوى العربي عالي الجودة والدعم ممتاز.",
    initials: "مح",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            قصص نجاح
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            ماذا يقول متدربونا؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            انضم لآلاف المتدربين الذين حققوا أهدافهم معنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
