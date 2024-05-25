import React from 'react'
import PageLayoutComponent from "components/Layout/PageLayout";
import ServicesHeaderComponent from 'components/Servicespage/HeaderComponent';
import DetailedServicesComponent from 'components/Servicespage/Services';

const ServicesPage = () => {
  return (
    <PageLayoutComponent contactBackground={"#FCF8FA"}>
      <div className="ServicesPage">
        <ServicesHeaderComponent />
        <DetailedServicesComponent/>
      </div>
    </PageLayoutComponent>
  );
}

export default ServicesPage