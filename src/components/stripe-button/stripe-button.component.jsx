import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 75;
    const publishableKey = "pk_test_51GsDiDKUK3HV2CAGSFYvHCQUG1mwMa4T3WeISj1rCeMBsKIIHk8fu41AkqtyRD3Tgbxj3k541XEHCdYobEnrgf5K00o07QC01K";

 const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'Crown Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description = {`Your Total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'PayNow'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;