import React from 'react';
import ServiceFeature from './ServiceFeature';
import './styles/Services.css';

const Services = () => {
    return (
        <div className="services">
            <h4>Like Tracy, We don’t your step-back from your success
            Need Quality? have Time? Hire Us For</h4>

            <ServiceFeature featureImg={require('./images/pie-graph-icon.png')}
                featureTitle="Product Design"
                featureText="Li Europan lingues es membres del
                sam familie. Lor separat existentie es
                un myth por scientie" />
            <ServiceFeature featureImg={require('./images/graph-increase.png')}
                featureTitle="Development"
                featureText="At solmen va esser necessi far uniform grammatica, 
                pronunciation elu sommun paroles"/>
            <ServiceFeature featureImg={require('./images/flask-icon.png')}
                featureTitle="Testings"
                featureText="Omnicos directe al desirabilite de un
                nov lingua franca: On refusa
                continuar payar custosi traductores"/>
            <ServiceFeature featureImg={require('./images/rocket-icon.png')}
                featureTitle="Deployment"
                featureText="Li lingues differe solmen in li
                grammatica, li pronunciation e li plu
                commun vocabules"/>

        </div>
    );
};

export default Services;