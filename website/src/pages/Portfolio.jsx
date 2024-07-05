import PriceModelsComponent from 'components/Homepage/PriceModels';
import PageLayoutComponent from 'components/Layout/PageLayout'
import PortfolioPageHeaderComponent from 'components/PortfolioPage/Header';
import ProductDesignPortfolioComponent from 'components/PortfolioPage/ProductDesign';
import WebDevelopmentPortfolioComponent from 'components/PortfolioPage/WebDevelopment';
import React from 'react'
import { useInitScrollTop } from 'util/customHooks';

const PortfolioPage = () => {
  useInitScrollTop();
  return (
    <PageLayoutComponent>
        <div className="PortfolioPage Homepage">
            <PortfolioPageHeaderComponent/>
            <ProductDesignPortfolioComponent/>
            <WebDevelopmentPortfolioComponent/>
            {/* <PriceModelsComponent/> */}
        </div>
    </PageLayoutComponent>
  );
}

export default PortfolioPage