import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const VerticalFeatures = () => (
  <Section
    title="DX Maintenence로 여러분의 자산을 통합 관리해보세요"
    description="DX Maintenence의 차별화된 서비스를 경험해보세요"
  >
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
    <AnimationOnScroll
      animateIn="animate__fadeInDown"
      animateOnce={true}
      delay={2}
    >
      <VerticalFeatureRow
        title="자산 관리"
        description="여러분의 자산을 등록하고 편하게 관리해보세요"
        image="/assets/images/asset_manage.svg"
        imageAlt="Second feature alt text"
        reverse
      />
    </AnimationOnScroll>
    <AnimationOnScroll
      animateIn="animate__fadeInDown"
      animateOnce={true}
      delay={2}
    >
      <VerticalFeatureRow
        title="체크리스트 관리"
        description="다양한 체크리스트를 등록하여 간편하게 업무 처리를 해보세요"
        image="/assets/images/work_procedure.png"
        imageAlt="Third feature alt text"
      />
    </AnimationOnScroll>
  </Section>
);

export { VerticalFeatures };
