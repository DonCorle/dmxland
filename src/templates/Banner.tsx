import Link from "next/link";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Banner = () => (
  <Section>
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      animateOnce={true}
      delay={3}
    >
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
    </AnimationOnScroll>
  </Section>
);

export { Banner };
