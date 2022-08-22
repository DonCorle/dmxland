import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import FloatBtn from './FloatBtn';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Price } from './Price';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-800">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Price />
    <Banner />
    <Footer />
    <FloatBtn />
  </div>
);

export { Base };
