import { Card, CardContent } from '@/components/ui/card';
import { MapPin, MessageCircle, Users, DollarSign } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problem" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">문제 정의</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            외국인 관광객과 한국 로컬 모두가 겪고 있는 현실적인 문제들
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-destructive">외국인 관광객의 어려움</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2 text-destructive" />
                      진짜 로컬 경험을 찾기 어려움
                    </li>
                    <li className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2 text-destructive" />
                      즉각적인 생활·언어 도움 부족
                    </li>
                    <li className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2 text-destructive" />
                      현지인과의 자연스러운 교류 기회 부재
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-accent-foreground">로컬(일반인)의 고민</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-accent-foreground" />
                      시간·지식·취향을 공유하고 싶지만
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-accent-foreground" />
                      신뢰·매칭·보상 체계 부재
                    </li>
                    <li className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-accent-foreground" />
                      기회를 활용할 수 있는 플랫폼 없음
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-lg font-medium text-primary bg-primary/10 p-6 rounded-lg">
            "양쪽 모두 원하고 있지만, 연결해주는 신뢰할 수 있는 플랫폼이 없었습니다."
          </p>
        </div>
      </div>
    </section>
  );
}