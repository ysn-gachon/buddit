import { Card, CardContent } from '@/components/ui/card';
import { Route, MessageCircle, Users, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Route,
      title: "여행 루트 선제작",
      description: "외국인이 원하는 루트를 직접 짜고, 로컬이 가이드합니다",
      details: ["맞춤형 일정 계획", "관심사 기반 추천", "유연한 일정 조정"]
    },
    {
      icon: MessageCircle,
      title: "사전 채팅",
      description: "입국 전, 로컬과 대화하며 친밀감 & 신뢰를 형성합니다",
      details: ["사전 소통으로 신뢰 구축", "여행 전 궁금증 해결", "개인 맞춤 정보 제공"]
    },
    {
      icon: Users,
      title: "로컬 특화 콘텐츠",
      description: "대학생, 직장인, 예술가 등 다양한 로컬 가이드를 매칭합니다",
      details: ["전문 분야별 가이드", "연령대별 매칭", "관심사 기반 연결"]
    },
    {
      icon: Shield,
      title: "안전 & 보상 체계",
      description: "리뷰·보증금·평가 시스템을 통한 신뢰성을 확보합니다",
      details: ["양방향 평가 시스템", "보증금 안전 관리", "24시간 고객 지원"]
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">주요 기능</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Buddip이 제공하는 특별한 여행 경험의 핵심 기능들
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">모든 기능이 하나의 목표를 향해</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                "여행자와 로컬이 진정한 친구가 되는 경험"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}