import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Buddip</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#problem" className="text-foreground hover:text-primary transition-colors" data-testid="link-problem">
              문제 정의
            </a>
            <a href="#insights" className="text-foreground hover:text-primary transition-colors" data-testid="link-insights">
              현장 조사
            </a>
            <a href="#solution" className="text-foreground hover:text-primary transition-colors" data-testid="link-solution">
              솔루션
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors" data-testid="link-features">
              주요 기능
            </a>
            <a href="#roadmap" className="text-foreground hover:text-primary transition-colors" data-testid="link-roadmap">
              실행 계획
            </a>
            <ThemeToggle />
            <Button data-testid="button-contact">
              문의하기
            </Button>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="#problem" className="block py-2 text-foreground hover:text-primary transition-colors" data-testid="mobile-link-problem">
                문제 정의
              </a>
              <a href="#insights" className="block py-2 text-foreground hover:text-primary transition-colors" data-testid="mobile-link-insights">
                현장 조사
              </a>
              <a href="#solution" className="block py-2 text-foreground hover:text-primary transition-colors" data-testid="mobile-link-solution">
                솔루션
              </a>
              <a href="#features" className="block py-2 text-foreground hover:text-primary transition-colors" data-testid="mobile-link-features">
                주요 기능
              </a>
              <a href="#roadmap" className="block py-2 text-foreground hover:text-primary transition-colors" data-testid="mobile-link-roadmap">
                실행 계획
              </a>
              <Button className="mt-2" data-testid="mobile-button-contact">
                문의하기
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}