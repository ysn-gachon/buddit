import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, MessageSquare, DollarSign, Heart } from 'lucide-react';
import insightsImage from '@assets/generated_images/Casual_Myeongdong_tourist_interview_e2ed4aec.png';

export default function Insights() {
  return (
    <section id="insights" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">현장 조사</h2>
          <p className="text-lg text-muted-foreground mb-6">
            명동 거리에서 실제 외국인 관광객들과 진행한 인터뷰 결과
          </p>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            2025.9.15 • 7팀 • 미국·체코·일본·러시아 관광객
          </Badge>
        </div>

        <div className="mb-12">
          <img 
            src={insightsImage} 
            alt="명동 거리 인터뷰 현장" 
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="hover-elevate">
            <CardContent className="p-6 text-center">
              <div className="bg-destructive/10 p-3 rounded-lg w-fit mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">언어 장벽</h3>
              <p className="text-3xl font-bold text-destructive mb-2">5/7팀</p>
              <p className="text-sm text-muted-foreground">
                "언어가 가장 큰 불편 요소"
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6 text-center">
              <div className="bg-accent/10 p-3 rounded-lg w-fit mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">비용 부담</h3>
              <p className="text-3xl font-bold text-accent-foreground mb-2">3/7팀</p>
              <p className="text-sm text-muted-foreground">
                가이드 투어 비용이 부담스러움
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6 text-center">
              <div className="bg-secondary/10 p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">자율성 부족</h3>
              <p className="text-3xl font-bold text-secondary-foreground mb-2">6/7팀</p>
              <p className="text-sm text-muted-foreground">
                일방적인 가이드 투어 불만
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">로컬 친구</h3>
              <p className="text-3xl font-bold text-primary mb-2">7/7팀</p>
              <p className="text-sm text-muted-foreground">
                "한국 현지인 친구를 사귀고 싶다"
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">핵심 인사이트</h3>
              <p className="text-lg leading-relaxed">
                비싸고 일방적인 가이드 투어 대신, <br />
                <strong className="text-primary">"친구 같은 로컬"</strong>을 원한다는 수요가 확인되었습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}