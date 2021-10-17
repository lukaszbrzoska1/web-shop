import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J9biQIWn2fh81oNkGsANhbrGgh1TWMsawg5xKlrGQdVYdnxDalN0P3Q7ceEMjcXtpm9R3inQiB6p9Zen9C5aihM00jaF4jYOq';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="Web-Shop Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Yout total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      locale="auto"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
