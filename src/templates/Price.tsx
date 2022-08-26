import { AnimationOnScroll } from 'react-animation-on-scroll';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import 'animate.css/animate.min.css';

const Price = () => (
  <Section title="Price" description="가격 정책">
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      animateOnce={true}
      delay={2}
    >
      <VerticalFeatureRow
        title="$100"
        description="Essential"
        image="/assets/images/money-bag.png"
        imageAlt="First feature alt text"
      />
    </AnimationOnScroll>
  </Section>
);

export { Price };
