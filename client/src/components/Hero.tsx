import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Gyeongbokgung_palace_dancing_friends_4cbb1753.png';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Buddip
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-8 text-white/90">
            당신의 여행, 진짜 로컬과 함께하다.
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed">
            외국인 관광객과 한국 로컬을 연결하는 P2P 여행 플랫폼으로
            친구 같은 로컬 가이드와 함께하는 진정한 한국 경험을 만나보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="backdrop-blur-sm bg-primary/90 hover:bg-primary text-primary-foreground px-8 py-3 text-lg"
              data-testid="button-get-started"
            >
              시작하기
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 text-lg"
              data-testid="button-learn-more"
            >
              자세히 알아보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}