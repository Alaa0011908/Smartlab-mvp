"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "مجاني",
    price: "٠",
    period: "للأبد",
    description: "ابدأ رحلتك في عالم الشبكات",
    features: [
      "تقييم أولي لمستواك",
      "٥ سيناريوهات تدريبية",
      "محتوى تعليمي أساسي",
      "دعم عبر المجتمع",
    ],
    cta: "ابدأ مجاناً",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "٩.٩٩",
    period: "/ شهرياً",
    description: "كل ما تحتاجه للنجاح في CCNA",
    features: [
      "تقييم شامل بالذكاء الاصطناعي",
      "+٣٠٠ سيناريو عملي",
      "مسار تعليمي مخصص لك",
      "محاكي شبكات تفاعلي",
      "دعم فني أولوية ٢٤/٧",
      "شهادة إتمام معتمدة",
    ],
    cta: "اشترك الآن",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            الأسعار
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            خطط بسيطة وشفافة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            اختر الخطة المناسبة لك وابدأ التعلم اليوم
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.highlighted 
                  ? "border-primary shadow-xl scale-[1.02]" 
                  : "border-border/50 bg-background"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  الأكثر شعبية
                </div>
              )}
              
              <CardHeader className={`pb-0 ${plan.highlighted ? "pt-14" : "pt-8"}`}>
                <div className="text-lg font-semibold text-foreground mb-2">{plan.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? "bg-accent/20" : "bg-primary/10"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? "text-accent" : "text-primary"}`} />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-6 text-lg font-semibold rounded-xl ${
                    plan.highlighted 
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground" 
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <p className="text-center text-muted-foreground mt-8 text-sm">
          ضمان استرداد الأموال خلال ١٤ يوماً • بدون التزام طويل الأمد
        </p>
      </div>
    </section>
  );
}
