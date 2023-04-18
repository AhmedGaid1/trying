import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const profile1 = [
  {
    image: "",
    fname: "Ahmed",
    lname: "Gaid",
    email: "ahmedGaid2023@gmail.com",
    phone: "002011111111111",
    dateOfBirth: "1/2/2003",
  },
];

const Profile = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2> Hello! </h2>{" "}
        {profile1.map((profile, index) => (
          <TestimonialCard key={index} profile={profile} />
        ))}{" "}
      </div>{" "}
    </section>
  );
};

export default Profile;
