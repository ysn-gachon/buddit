import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, DollarSign, Star } from 'lucide-react';
import solutionImage from '@assets/generated_images/Korean_market_food_sharing_2f95ac94.png';

export default function Solution() {
  return (
    <section id="solution" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">솔루션</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Buddip은 외국인 관광객과 한국 로컬 일반인을 연결하는 P2P 여행 플랫폼입니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">외국인 관광객</h3>
                    <p className="text-muted-foreground mb-3">
                      약 $100으로 1:1 맞춤 로컬 투어 & 생활 지원
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 개인 맞춤형 여행 루트</li>
                      <li>• 실시간 언어 지원</li>
                      <li>• 진정한 문화 교류 경험</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">로컬 가이드(일반인)</h3>
                    <p className="text-muted-foreground mb-3">
                      자신의 전공·취향·전문성을 살려 여행 기획
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 시간을 활용한 부수입 창출</li>
                      <li>• 자신만의 전문성 활용</li>
                      <li>• 국제적 네트워킹 기회</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Star className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">경험 가치</h3>
                    <p className="text-muted-foreground mb-3">
                      맛집, 전시, 공연, 동네 산책 등 "진짜 한국"을 경험
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 숨겨진 로컬 명소 발견</li>
                      <li>• 현지인만 아는 특별한 경험</li>
                      <li>• 지속적인 우정 관계 형성</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="pt-4">
              <Button size="lg" className="w-full md:w-auto" data-testid="button-join-beta">
                베타 테스터 신청하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="lg:order-first">
            <img 
              src={solutionImage} 
              alt="한국 전통시장에서 음식을 나누는 로컬과 관광객" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}