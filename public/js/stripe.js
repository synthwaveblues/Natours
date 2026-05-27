/* eslint-disable */
export const bookTour = async tourId => {
  window.location.assign(`/api/v1/bookings/checkout-session/${tourId}`);
};
