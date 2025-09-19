import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Globe, Leaf, ArrowRight } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">우리의 비전</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Buddip은 단순한 여행 플랫폼을 넘어, 더 큰 가치를 만들어갑니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="hover-elevate text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">진정한 연결</h3>
              <p className="text-muted-foreground leading-relaxed">
                지역 로컬과 글로벌 여행자가 진정한 친구가 되는 경험을 만듭니다
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate text-center">
            <CardContent className="p-6">
              <div className="bg-accent/10 p-4 rounded-lg w-fit mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">문화 교류</h3>
              <p className="text-muted-foreground leading-relaxed">
                언어와 문화의 장벽을 허물고 서로를 이해하는 기회를 제공합니다
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate text-center">
            <CardContent className="p-6">
              <div className="bg-secondary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                <Leaf className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">지속가능한 관광</h3>
              <p className="text-muted-foreground leading-relaxed">
                지역 경제에 기여하는 지속가능한 로컬 관광 생태계를 구축합니다
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <blockquote className="text-2xl md:text-3xl font-medium text-primary mb-6 leading-relaxed">
                "여행이 더 이상 소비가 아니라, <br />연결이 되는 순간. Buddip."
              </blockquote>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                우리는 여행을 통해 사람과 사람이 만나고, <br />
                서로의 문화를 나누며, 평생의 우정을 만들어가는 <br />
                새로운 여행 문화를 만들어가고 있습니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" data-testid="button-join-mission">
                  미션에 함께하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" data-testid="button-contact-team">
                  팀과 연결하기
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}