import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">Buddip</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                외국인 관광객과 한국 로컬을 연결하는 P2P 여행 플랫폼. <br />
                진정한 문화 교류와 우정을 만들어갑니다.
              </p>
              <p className="text-sm text-muted-foreground">
                "당신의 여행, 진짜 로컬과 함께하다."
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#problem" className="hover:text-primary transition-colors">문제 정의</a></li>
                <li><a href="#insights" className="hover:text-primary transition-colors">현장 조사</a></li>
                <li><a href="#solution" className="hover:text-primary transition-colors">솔루션</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">주요 기능</a></li>
                <li><a href="#roadmap" className="hover:text-primary transition-colors">실행 계획</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>이메일: team@buddip.co.kr</li>
                <li>전화: +82-2-1234-5678</li>
                <li>주소: 서울특별시 강남구</li>
                <li>사업자등록번호: 123-45-67890</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Buddip. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground mr-2">Made with</span>
              <Heart className="h-4 w-4 text-destructive" />
              <span className="text-sm text-muted-foreground ml-2">for travelers worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}