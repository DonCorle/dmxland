import { AnimationOnScroll } from 'react-animation-on-scroll';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import 'animate.css/animate.min.css';

const Price = () => (
  <Section title="Price" description="가격 정책">
    <AnimationOnScroll
      animateIn="animate__fadeInDown"
      animateOnce={true}
      delay={2}
    >
      <VerticalFeatureRow
        title="작업 지시"
        description="DX Maintenence를 통해 간편하게 작업을 하달하고 처리해보세요"
        image="/assets/images/work_order.jpeg"
        imageAlt="First feature alt text"
      />
    </AnimationOnScroll>
  </Section>
);

export { Price };
