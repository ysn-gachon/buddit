import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Clock } from 'lucide-react';

export default function Roadmap() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "2차 고객 인터뷰",
      description: "게스트하우스 & 호스텔 외국인 대상 심층 조사",
      status: "completed",
      timeline: "2024년 9월"
    },
    {
      phase: "Phase 2", 
      title: "로컬 가이드 프리토타입",
      description: "대학생·직장인 기반 MVP 매칭 테스트",
      status: "in-progress",
      timeline: "2024년 10월"
    },
    {
      phase: "Phase 3",
      title: "린 캔버스 작성",
      description: "로컬 가이드 편 비즈니스 모델 검증",
      status: "upcoming",
      timeline: "2024년 11월"
    },
    {
      phase: "Phase 4",
      title: "고객 생애주기 로드맵",
      description: "인지 → 가입 → 첫 이용 → 반복 사용 → 추천/리뷰",
      status: "upcoming",
      timeline: "2024년 12월"
    },
    {
      phase: "Phase 5",
      title: "기업 랜딩페이지 런칭",
      description: "스토리 + 인터뷰 영상 + 프리토타입 UI",
      status: "upcoming",
      timeline: "2025년 1월"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-accent-foreground" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">완료</Badge>;
      case 'in-progress':
        return <Badge className="bg-accent text-accent-foreground">진행중</Badge>;
      default:
        return <Badge variant="outline">예정</Badge>;
    }
  };

  return (
    <section id="roadmap" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">실행 계획</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Buddip의 단계별 성장 로드맵과 구체적인 실행 계획
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {roadmapItems.map((item, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {getStatusIcon(item.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="text-xs">
                            {item.phase}
                          </Badge>
                          {getStatusBadge(item.status)}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {item.timeline}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">다음 단계</h3>
              <p className="text-lg leading-relaxed">
                현재 로컬 가이드 프리토타입 단계에서 <br />
                실제 사용자 피드백을 수집하고 있습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}