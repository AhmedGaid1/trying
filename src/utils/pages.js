const pages = new Map();
pages.set("home", { name: "Home", path: "/", anchorable: true });
pages.set("profile", { name: "Profile", path: "./Profile.js", anchorable: true });
pages.set("logout", { name: "Log out", path: "/logout", anchorable: true });
pages.set("login", { name: "Login", path: "/login", anchorable: true });
pages.set("about", { name: "About", path: "/about", anchorable: false });
pages.set("menu", { name: "Menu", path: "/menu", anchorable: false });
pages.set("bookings", {
  name: "Reservations",
  path: "/bookings",
  anchorable: false,
});
pages.set("confirmedBooking", {
  name: "Confirmed Booking",
  path: "/confirmed-booking",
  anchorable: false,
});
pages.set("orderOnline", {
  name: "Order Online",
  path: "/order-online",
  anchorable: false,
});

export default pages;
