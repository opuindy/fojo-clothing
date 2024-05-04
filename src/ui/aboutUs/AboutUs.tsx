import Ceo from "./Ceo";
import logo from "./../../assets/logo/fojoWord.png";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="globalPadding sectionMargn flex w-full "
      style={{
        backgroundImage: `url(${logo})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        // animation: " zoomOut 7500ms linear infinite",
      }}
    >
      <div className="m-auto w-full max-w-custom text-left md:text-center">
        <h2 className="subtitleFont text-left md:text-center">
          About Kojo Clothing
        </h2>
        <p className="paragraphFont  mt-4 md:mt-16">
          About Kojo Clothing is a tailoring and custom clothing brand in Ibadan
          Nigeria. What sets our shop apart? We&rsquo;re locally-owned and are
          committed to exceptional customer experiences. Clients are never
          numbers on an investor update; they&rsquo;re part of our community,
          and often become friends.
        </p>
        <Ceo />
      </div>
    </section>
  );
};

export default AboutUs;
