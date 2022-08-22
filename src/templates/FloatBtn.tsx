/* eslint-disable */

import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

const scrollTo = (x: number, y: number) => {
  window.scrollTo({ top: y, left: x, behavior: "smooth" });
};

const FloatBtn = () => (
  <div className="antialiased text-blue-800">
    <div onClick={() => scrollTo(0, 0)}>
      <FloatingBtn>
        <FaChevronUp style={{ fontSize: "25px", color: "white" }} />
      </FloatingBtn>
    </div>
  </div>
);

const FloatingBtn = styled.div`
  position: fixed; //포인트!
  line-height: 63px;
  bottom: 40px; //위치
  right: 40px; //위치
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #287294;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default FloatBtn;
