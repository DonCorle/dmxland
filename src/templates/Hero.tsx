import Link from "next/link";
import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => (
  <Background color="bg-gray-200">
    <Section yPadding="py-1">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Product</a>
        </li>
        <li>
          <Link href="/auth/register">
            <a>Sign Up</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-5 pb-32">
      <HeroOneButton
        title={
          <>
            {"Welcome to\n"}
            <span className="text-primary-950">DX Maintenence</span>
          </>
        }
        description="통합 시설관리 서비스"
        button={
          <Link href="/main/home">
            <a>
              <Button xl>시작해보기</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
