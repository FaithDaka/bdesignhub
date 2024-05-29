import React from 'react'
import PageLayoutComponent from "components/Layout/PageLayout";
import ServicesHeaderComponent from 'components/Servicespage/HeaderComponent';
import DetailedServicesComponent from 'components/Servicespage/Services';
import { useInitScrollTop } from 'util/customHooks';
import TheProcessServiceComponent from 'components/Servicespage/TheProcess';

const ServicesPage = () => {
  useInitScrollTop();
  return (
    <PageLayoutComponent contactBackground={"#FCF8FA"}>
      <div className="ServicesPage">
        <ServicesHeaderComponent />
        <DetailedServicesComponent/>
        <TheProcessServiceComponent/>
      </div>
    </PageLayoutComponent>
  );
}

export default ServicesPage