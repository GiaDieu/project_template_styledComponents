import React from "react";
import { dataObjectService } from "./data";
import {
  ServicesContainer,
  ServiceWrapper,
  ServiceCard,
  ServiceIcon,
  ServiceH1,
  ServiceH2,
  ServiceP,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServiceH1>{dataObjectService.title}</ServiceH1>
      <ServiceWrapper>
        {dataObjectService.info.map(({ img, h2, description }) => (
          <ServiceCard>
            <ServiceIcon src={img} />
            <ServiceH2>{h2}</ServiceH2>
            <ServiceP>{description}</ServiceP>
          </ServiceCard>
        ))}
      </ServiceWrapper>
    </ServicesContainer>
  );
};

export default Services;
