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
        {dataObjectService.info.map((ele, index) => (
          <ServiceCard key={index}>
            <ServiceIcon src={ele.img} />
            <ServiceH2>{ele.h2}</ServiceH2>
            <ServiceP>{ele.description}</ServiceP>
          </ServiceCard>
        ))}
      </ServiceWrapper>
    </ServicesContainer>
  );
};

export default Services;
