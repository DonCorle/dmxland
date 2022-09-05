import Cookies from 'js-cookie';
import Link from 'next/link';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import 'animate.css/animate.min.css';

function Banner() {
  return (
    <Section>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        delay={3}
      >
        {Cookies.get('isLogin') === 'true' ? (
          <CTABanner
            title="DX Maintenence에서 모든 인프라 환경을 제어해보세요."
            subtitle="무료로 체험해보세요"
            button={
              <Link href="/main/home">
                <a>
                  <Button>Sign In</Button>
                </a>
              </Link>
            }
          />
        ) : (
          <CTABanner
            title="DX Maintenence에서 모든 인프라 환경을 제어해보세요."
            subtitle="무료로 체험해보세요"
            button={
              <Link href="/auth/login">
                <a>
                  <Button>Sign In</Button>
                </a>
              </Link>
            }
          />
        )}
      </AnimationOnScroll>
    </Section>
  );
}

export { Banner };
