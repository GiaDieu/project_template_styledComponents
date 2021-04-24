import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  height: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 3.125rem; // 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.25rem;
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  max-height: 340px;
  padding: 1.875rem; //30pc
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const ServiceIcon = styled.img`
  width: 10rem;
  height: 10rem;
  border-bottom: 10px;
`;

export const ServiceH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServiceH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServiceP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
