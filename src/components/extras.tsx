import HeartGrafti from '../assets/hert-grafti.svg';
import AboutUsThree from '../assets/about-us-3.png';
import TopRightSvg from '../assets/top-right.svg';

export const Section2 = () => {
    return (
        <div
            className="py-12 md:py-16 w-full max-w-[1200px] mx-auto  flex items-center justify-center"
            id="section-2"
        >
            <div className="flex flex-col md:flex-row justify-start gap-8 px-[20px] ">
                {/* Image Section */}
                <div className="md:w-1/3 flex justify-center w-fit">
                    <img
                        src="https://via.placeholder.com/400" // Replace with your image URL
                        alt="Health Protection"
                        className="w-fit max-w-[300px] object-cover"
                    />
                </div>

                <div className="flex flex-col md:w-1/2 gap-4">
                    {/* First Heading and Description */}
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Complete Health Protection
                    </p>
                    <p className="text-base md:text-lg leading-7">
                        Whether it's a regular health check-up or managing a critical illness, CarePass simplifies and enhances your health journey.
                    </p>

                    {/* Second Heading and Description */}
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Preventive & Primary Care
                    </p>
                    <p className="text-base md:text-lg leading-7">
                        Take control of your wellness with extensive preventive measures and primary care services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export const HomePageSection1 = () => {
  return (
    <div
      className="py-12 md:py-16 flex items-center justify-center px-[20px]"
      style={{
        background: "#FCF9FF",
      }}
    >
      <div className="flex justify-center flex-col md:w-1/2 gap-4">
        <h1 className="text-2xl font-bold mb-4 text-deepPurple">
          Still Settling for Ordinary Health Plans?
        </h1>
        <p className="text-lg mb-4">
          Say hello to{" "}
          <span className="font-semibold text-deepPurple">CarePass</span>—a
          health plan that goes beyond just emergency protection. With CarePass,
          you stay proactive with preventive care, ensuring long-term
          well-being, while also enjoying significant savings.
        </p>
        <p className="text-lg font-medium">
          It’s more than just a safety net—it’s a smarter way to manage your
          health, every day.
        </p>
      </div>
    </div>
  );
};

  export const HomePageSection2 = () => {
    return (
      <div
        className="py-12 md:py-16 flex items-center justify-center px-[20px]"
        style={{
          background: "#FFF",
        }}
      >
        <div className="flex justify-center flex-col md:w-1/2 gap-4">
          <p className="text-lg mb-4">
          <span className="font-semibold text-deepPurple">Complete Health Protection</span>— Whether it’s a regular health check-up or managing a critical illness, CarePass simplifies and enhances your health journey.
          </p>
          <p className="text-lg font-medium">
          <span className="font-semibold text-deepPurple">Preventive & Primary Care</span>— Take control of your wellness with extensive preventive measures and primary care services.
          </p>
        </div>
      </div>
    );
  };

  export const HomePageSection3 = () => {
    return (
      <div
        className="py-12 md:py-16 flex items-center justify-center px-[20px]"
        style={{
          background: "#FCF9FF",
        }}
      >
        <div className="flex justify-center flex-col md:w-1/2 gap-4">
          <h1 className="text-2xl font-bold mb-4 text-deepPurple">
            Simplifying Health & Wellness Like Never Before
          </h1>
          <p className="text-lg mb-4">
            <span className="font-semibold text-deepPurple">CarePass</span> offers an all-in-one digital health solution to ensure you’re prepared for preventive care and unexpected health challenges. Gain financial ease and peace of mind—all in one plan.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <span className="font-semibold text-deepPurple">
                Comprehensive Health Management
              </span>
            </li>
            <li>
              <span className="font-semibold text-deepPurple">
                Financial Security
              </span>{" "}
              with coverage up to ₹25,00,000
            </li>
            <li>
              <span className="font-semibold text-deepPurple">
                Preventive Health Focus
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export const HomePageSection4 = () => {
    return (
      <div
        className="py-12 md:py-16 flex items-center justify-center px-[20px]"
        style={{
          background: "#FFF",
        }}
      >
        <div className="flex justify-center flex-col md:w-1/2 gap-4">
          <h1 className="text-2xl font-bold mb-4 text-deepPurple">
            Comprehensive Care Across India
          </h1>
          <p className="text-lg mb-4">
            <span className="font-semibold text-deepPurple">CarePass</span> offers extensive healthcare support across India, ensuring that no matter where you are, you have access to top-notch medical services.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <span className="font-semibold text-deepPurple">25,000+ Doctors</span> for in-clinic consultations
            </li>
            <li>
              <span className="font-semibold text-deepPurple">8,000+ Doctors</span> for online teleconsultation
            </li>
            <li>
              <span className="font-semibold text-deepPurple">5,500+ Gyms</span> for fitness and wellness
            </li>
            <li>
              <span className="font-semibold text-deepPurple">8,000+ Diagnostic Centers</span> for home sample collection
            </li>
            <li>
              <span className="font-semibold text-deepPurple">5,000+ Dentists</span> for comprehensive dental care
            </li>
            <li>
              <span className="font-semibold text-deepPurple">35,000+ Pharmacies</span> for easy access to medication
            </li>
            <li>
              <span className="font-semibold text-deepPurple">300+ Vision Care Stores</span> for eye health services
            </li>
            <li>
              Coverage across <span className="font-semibold text-deepPurple">400+ cities</span>
            </li>
          </ul>
          <p className="text-lg mt-4">
            CarePass is supported by an extensive network across{" "}
            <span className="font-semibold text-deepPurple">
              30,000+ pin codes
            </span>{" "}
            in India.
          </p>
        </div>
      </div>
    );
  };
  
  

export const AboutSection4 = () => {
    return (
        <div className=" py-12 md:py-16 flex items-center justify-center px-[20px]">
            <div className="flex flex-col md:flex-row w-full max-w-[1200px] gap-8">
                {/* Text Section */}
                <div className="flex justify-center flex-col md:w-1/2 gap-4">
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                    Join Us Today
                    </p>

                    <p className="text-base md:text-lg leading-7">
                    Take control of your health with a plan that’s built to last.
                    </p>

                    <p className="text-base md:text-md leading-7">
                    Explore our plans from our products section and start your journey towards a healthier future.
                    </p>

                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={AboutUsThree}
                        alt="Health & Wellness"
                        className="w-full max-w-[300px]"
                    />
                </div>
            </div>
        </div>
    );
};

export const AboutSection3 = () => {
    return (
        <div
            className="px-6 py-10 flex items-center justify-center bg-white"
            id="section-4"
        style={{
            background: '#FCF9FF',
        }}
        >
            <div className="flex flex-col md:flex-row max-w-[1200px] gap-8">
                <div className="md:w-1/3 flex justify-center">
                    <img
                        src={HeartGrafti}
                        alt="Care Across India"
                        className="w-full object-fit max-w-[300px]"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col md:w-1/2 gap-4">
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Why Choose CarePass?
                    </p>

                    <p className="text-base md:text-md leading-7">
                        <span className="text-deepPurple">Comprehensive Coverage: </span> From preventive care to critical illness protection, we've got you covered.
                    </p>

                    <p className="text-base md:text-md leading-7">
                        <span className="text-deepPurple">Financial Peace of Mind: </span> Unmatched coverage at affordable premiums with tax-saving benefits.
                    </p>

                    <p className="text-base md:text-md leading-7">
                        <span className="text-deepPurple">User-Friendly Experience: </span> Our Wellness Corner App simplifies health management with digital wallets, health records, and easy access to medical services.
                    </p>

                    <p className="text-base md:text-md leading-7">
                        <span className="text-deepPurple">24/7 Support: </span> Expert support whenever you need it, ensuring you're never alone in your health journey.
                    </p>

                    <p className="text-base md:text-md leading-7 mt-4">
                    At CarePass, we’re not just offering health insurance; we’re providing a complete healthcare solution that's tailored to your unique needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export const Section6 = () => {
    return (
        <div
            className=" py-10 md:py-16 flex items-center justify-center bg-white"
            id="section-6"
        >
            <div className="flex flex-col md:flex-row  item-start w-full max-w-[1200px] gap-8 px-[20px]">
                {/* Text Section */}
                <div className="flex flex-col md:w-2/3 gap-4">
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Why Choose CarePass?
                    </p>

                    {/* Bullet points list */}
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-sm md:text-base">
                        <li>Complete Family Coverage: Plans for your spouse, children, and parents.</li>
                        <li>Personalized Health Plans: Tailored to your individual health needs.</li>
                        <li>Lowest Premiums: Exceptional value with Gold and Platinum plans at the most competitive rates.</li>
                        <li>Simple Health Management: Manage appointments, wallets, and health records through one app.</li>
                        <li>Exclusive Savings: Unlock tax benefits under Section 80D and secure financial protection.</li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="md:w-1/3 flex justify-center">
                    <img
                        src="https://via.placeholder.com/400" // Replace with your image URL
                        alt="Why Choose CarePass"
                        className="w-full max-w-[300px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export const Section7 = () => {
    return (
        <div
            className="py-12 md:py-16 w-full  mx-auto w-full flex items-center justify-center"
            id="section-7"
            style={{
                background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
            }}
        >
            <div className="flex flex-col md:flex-row justify-center gap-8 px-[20px] w-full max-w-[1200px]">
                {/* Image Section */}
                <div className="md:w-1/3 flex justify-center w-full md:w-fit">
                    <img
                        src="https://via.placeholder.com/400" // Replace with your image URL
                        alt="Wellness App"
                        className="w-full md:w-[300px] object-cover rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col md:w-2/3 gap-6">
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Wellness App Benefits
                    </p>

                    <p className="text-base md:text-lg leading-7">
                        Enjoy a variety of health and wellness features with our app, available anytime, anywhere.
                    </p>

                    {/* Bullet points list */}
                    <ul className="list-disc pl-6 mt-4 space-y-2 text-sm md:text-base">
                        <li>24/7 access to mental health professionals</li>
                        <li>AI-powered personalized diet plans</li>
                        <li>Access to digital health records and assessments</li>
                        <li>In-person & online doctor consultations</li>
                        <li>Discounted medicines and gym memberships</li>
                        <li>Live expert support available 24/7</li>
                    </ul>

                    <p className="mt-6 text-sm underline text-deepPurple font-semibold">
                        Download the Wellness Corner app to get started.
                    </p>
                </div>
            </div>
        </div>
    );
};

export const WhyChooseCarePass = () => {
    const benefits = [
      {
        title: "Complete Family Coverage",
        description: "Plans for your spouse, children, and parents.",
      },
      {
        title: "Personalized Health Plans",
        description: "Tailored to your individual health needs.",
      },
      {
        title: "Lowest Premiums",
        description: "Exceptional value with Gold and Platinum plans at the most competitive rates.",
      },
      {
        title: "Simple Health Management",
        description: "Manage appointments, wallets, and health records through one app.",
      },
      {
        title: "Exclusive Savings",
        description: "Unlock tax benefits under Section 80D and secure financial protection.",
      },
    ];
  
    return (
      <div className="py-12 px-4 md:px-12">
        <h1 className="text-3xl font-bold text-center text-deepPurple mb-8">
          Why Choose CarePass?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold text-deepPurple mb-4">
                {benefit.title}
              </h2>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export const WellnessAppBenefits = () => {
    return (
      <div className="py-12 px-4 md:px-12 text-center">
        <h1 className="text-3xl font-bold text-deepPurple mb-8">
          Wellness App Benefits
        </h1>
        <div className="mx-auto max-w-xl text-left">
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>
              <span className="font-semibold text-deepPurple">24/7 access</span> to mental health professionals
            </li>
            <li>
              AI-powered personalized diet plans
            </li>
            <li>
              Access to digital health records and assessments
            </li>
            <li>
              In-person & online doctor consultations
            </li>
            <li>
              Discounted medicines and gym memberships
            </li>
            <li>
              Live expert support available 24/7 through chat, phone, or email
            </li>
          </ul>
          <p className="mt-6 text-lg text-gray-800">
            Download the <span className="font-semibold text-deepPurple">Wellness Corner App</span> to get started.
          </p>
        </div>
      </div>
    );
};

  export const HealthControlCTA = () => {
    return (
      <div className="py-12 px-6 md:px-12 text-center"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-deepPurple">
          Ready to Take Control of Your Health?
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Don’t settle for less—choose <span className="font-semibold text-deepPurple">CarePass</span> and experience comprehensive healthcare that covers you and your family in every situation. From preventive care to critical illness coverage, CarePass has it all, ensuring you stay ahead while saving big.
        </p>
        <p className="text-lg md:text-xl mb-8">
          Take the first step towards smarter health management today!
        </p>
        <a
          href="/"
          className="bg-white text-deepPurple font-semibold text-lg px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Explore Our Products Now!
        </a>
      </div>
    );
  };

  export const HealthcareEcosystem = () => {
    const data = [
      {
        title: "Teleconsultations",
        details: "8,000+ doctors, specialists & super-specialists",
      },
      {
        title: "In-Clinic Consultations",
        details: "25,000+ doctors across 650+ cities",
      },
      {
        title: "Dental Care",
        details: "5,000+ dentists, 2,500+ clinics in 330+ cities",
      },
      {
        title: "Vision Care",
        details: "300+ stores pan-India, courier service in 19,000+ pin codes",
      },
      {
        title: "Pharmacy Network",
        details: "35,000+ physical pharmacies, 90%+ fulfillment across 650+ cities",
      },
      {
        title: "Diagnostic Centers",
        details: "8,000+ partners pan-India, 650+ cities",
      },
      {
        title: "Home Sample Collection",
        details: "400+ cities, 10,000+ pin codes",
      },
      {
        title: "Gym & Fitness",
        details: "5,500+ gyms across 40+ cities",
      },
      {
        title: "E-Pharmacy",
        details: "5,72,287+ SKUs, doorstep delivery across 59 cities, 30,000+ pin codes",
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Get Access to India's Biggest Healthcare Ecosystem
        </h1>
        <p className="text-xl text-center text-gray-700 font-semibold mb-8">
          50,000+ Experts, 1,00,000+ Locations
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4 mx-auto max-w-3xl">
        {data.map((item, index) => (
          <li key={index} className="text-left">
            <span className="font-semibold text-deepPurple">{item.title}:</span>{" "}
            {item.details}
          </li>
        ))}
      </ul>
      </div>
    );
  };

  export const WellnessApp = () => {
    const points = [
      {
        title: "Personalized Wellness Plans",
        description:
          "Get AI-powered customized diet plans and access to expert dieticians for a healthier you.",
      },
      {
        title: "Seamless Doctor Consultations",
        description:
          "Enjoy in-person and online consultations with doctors for convenient healthcare management.",
      },
      {
        title: "Fitness Made Easy",
        description:
          "Access discounted gym memberships to kickstart your fitness journey.",
      },
      {
        title: "Knowledge at Your Fingertips",
        description:
          "Explore our knowledge hubs, webinars, and more to stay updated on the latest health and wellness trends.",
      },
      {
        title: "Exclusive Discounts",
        description:
          "Avail exclusive discounts on pharmacy, diagnostics, and health checks to save on your healthcare expenses.",
      },
      {
        title: "Digital Health Management",
        description:
          "Store and manage your digital health records, track your progress with personalized health assessments, and stay on top of your health with our intuitive trackers.",
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          About Our Wellness App
        </h1>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4 mx-auto max-w-3xl">
          {points.map((point, index) => (
            <li key={index} className="text-left">
              <span className="font-semibold text-deepPurple">{point.title}:</span>{" "}
              {point.description}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export const BenefitsBreakdownGold = ({ onBuyNow }) => {
    const benefits = [
      {
        category: "Preventive Care",
        items: [
          { name: "Preventive Health Check", value: "₹8,000" },
          { name: "Doctor Consultation", value: "₹12,400" },
          { name: "App Access", value: "₹2,000" },
        ],
      },
      {
        category: "Medicines & Diagnostics",
        items: [
          { name: "Doctor-Prescribed Medicines", value: "₹6,000" },
          { name: "Doctor-Prescribed Diagnostic", value: "₹7,000" },
        ],
      },
      {
        category: "Wellness",
        items: [
          { name: "Dental Care", value: "₹4,200" },
          { name: "Vision Care", value: "₹2,800" },
        ],
      },
      {
        category: "Critical Care",
        items: [{ name: "Critical Illness", value: "₹2,50,000" }],
      },
      {
        category: "Financial Benefits",
        items: [{ name: "Tax Benefits Under 80D", value: "₹10,000" }],
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Breakdown of Benefits
        </h1>
        <div className="text-center text-lg text-gray-800 mb-8">
          <p className="font-semibold">You Pay: ₹10,000</p>
          <p className="font-semibold">Get Benefits Worth: ₹3,00,000+</p>
        </div>
        <div className="space-y-8 max-w-xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-lg text-gray-800 mt-8 max-w-xl mx-auto space-y-2">
          <p>
            <span className="font-bold">Age Limit:</span> 18 to 60 years
          </p>
          <p>
            <span className="font-bold">Validity:</span> 1 year
          </p>
          <p>
            <span className="font-bold">Coverage:</span> Self, spouse, and two
            children
          </p>
        </div>
        <div className="text-center mt-8">
          <button onClick={onBuyNow} className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const BenefitsBreakdownPlatinum = ({ onBuyNow }) => {
    const benefits = [
      {
        category: "Healthcare Services",
        items: [
            { name: "Preventive Health Check", value: "₹8,000" },
            { name: "Doctor Consultation", value: "₹12,400" },
            { name: "App Access", value: "₹2,000" },
            { name: "Doctor-Prescribed Medicines", value: "₹6,000" },
            { name: "Doctor-Prescribed Diagnostic", value: "₹7,000" },
            { name: "Dental Care", value: "₹4,200" },
            { name: "Vision Care", value: "₹2,800" },
            { name: "Critical Illness", value: "₹2,50,000" },
        ],
      },
      {
        category: "Health Insurance Benefits",
        items: [
            { name: "Super Top-Up for Hospitalization", value: "₹15,00,000/ ₹25,00,000" },
            { name: "Health Insurance", value: "₹3,00,000/ ₹5,00,000" },
            { name: "Tax Benefits Under 80D", value: "₹15,000" },
        ],
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Breakdown of Benefits
        </h1>
        <div className="text-center text-lg text-gray-800 mb-8">
          <p className="font-semibold">You Pay: ₹10,000</p>
          <p className="font-semibold">Get Benefits Worth: ₹3,00,000+</p>
        </div>
        <div className="space-y-8 max-w-xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-lg text-gray-800 mt-8 max-w-xl mx-auto space-y-2">
          <p>
            <span className="font-bold">Age Limit:</span> 18 to 60 years
          </p>
          <p>
            <span className="font-bold">Validity:</span> 1 year
          </p>
          <p>
            <span className="font-bold">Coverage:</span> Self, spouse, and two
            children
          </p>
        </div>
        <div className="text-center mt-8">
          <button onClick={onBuyNow} className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const BenefitsBreakdownSilver = ({ onBuyNow }) => {
    const benefits = [
      {
        category: "Medical Consultations",
        items: [
            { name: "Doctor Consultations (In-clinic & Online)", value: "₹10,000" },
        ],
      },
      {
        category: "Medicines & Diagnostics",
        items: [
            { name: "Doctor-Prescribed Medicines", value: "₹6,000" },
            { name: "Doctor-Prescribed Diagnostics", value: "₹7,000" },
        ],
      },
      {
        category: "Wellness",
        items: [
            { name: "Dental Care", value: "₹4,200" },
            { name: "Vision Care", value: "₹2,800" },
        ],
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Breakdown of Benefits
        </h1>
        <div className="text-center text-lg text-gray-800 mb-8">
          <p className="font-semibold">You Pay: ₹5,000</p>
          <p className="font-semibold">Get Benefits Worth: ₹30,000+</p>
        </div>
        <div className="space-y-8 max-w-xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-lg text-gray-800 mt-8 max-w-xl mx-auto space-y-2">
          <p>
            <span className="font-bold">Age Limit:</span> 18 to 60 years
          </p>
          <p>
            <span className="font-bold">Validity:</span> 1 year
          </p>
          <p>
            <span className="font-bold">Coverage:</span> Self, spouse, and two
            children
          </p>
        </div>
        <div className="text-center mt-8">
          <button onClick={onBuyNow} className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const BenefitsBreakdownTaxSaver = ({ onBuyNow }) => {
    const benefits = [
      {
        category: "Preventive Health Checks",
        items: [
            { name: "Comprehensive screenings & Early disease detection and prevention", value: "₹8,000" },
        ],
      },
      {
        category: "Unlimited Tele-consultation",
        items: [
            { name: "Convenient access to medical experts, endlessly!", value: "₹2,400" },
            { name: "Doctor-Prescribed Diagnostics", value: "₹7,000" },
        ],
      },
      {
        category: "Application Access",
        items: [
            { name: "Exclusive health and wellness tools", value: "₹2,000" },
        ],
      },
      {
        category: "Tax Benefit under 80D",
        items: [
            { name: "Deduction under Section 80D, Validity: 1 year, renewable", value: "₹5,000" },
        ],
      },
      {
        category: "Discounts on Pharmacy (up to 18%)",
        items: [
            { name: "Savings on medication and health products, and more", value: "-" },
        ],
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Breakdown of Benefits
        </h1>
        <div className="text-center text-lg text-gray-800 mb-8">
          <p className="font-semibold">You Pay: ₹5,000</p>
          <p className="font-semibold">Get Benefits Worth: ₹17,400</p>
          <p className="font-semibold">Savings: ₹12,400 (74% off)</p>
        </div>
        <div className="space-y-8 max-w-xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-lg text-gray-800 mt-8 max-w-xl mx-auto space-y-2">
          <p>
            <span className="font-bold">Age Limit:</span> 18 to 60 years
          </p>
          <p>
            <span className="font-bold">Validity:</span> 1 year
          </p>
        </div>
        <div className="text-center mt-8">
          <button onClick={onBuyNow} className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const HowItWorksGold = ({ onBuyNow }) => {
    const steps = [
      {
        title: "Buy Now",
        description: "Purchase CarePass Gold",
      },
      {
        title: "Get ₹15,000 Wallet",
        description: "Receive digital wallet amount",
      },
      {
        title: "Critical Illness Coverage",
        description: "Activate ₹2,50,000 coverage",
      },
      {
        title: "Avail Services",
        description: "Access preventive health checks and primary care services",
      },
      {
        title: "Tax Benefits",
        description: "Claim deductions under Section 80D",
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          How it Works
        </h1>
        <div className="space-y-8 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="text-lg text-gray-700 mr-4">Step {index + 1}:</div>
              <div className="text-lg text-gray-700">
                <strong>{step.title}</strong>: {step.description}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={onBuyNow}
            className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const HowItWorksPlatinum = ({ onBuyNow }) => {
    const steps = [
      {
        title: "Buy Now",
        description: "Purchase CarePass Platinum Plan for ₹15,000",
      },
      {
        title: "Get ₹15,000 Wallet",
        description:
          "Receive a digital wallet for preventive health checks and primary care services",
      },
      {
        title: "Critical Illness Coverage",
        description:
          "Activate coverage up to ₹2,50,000 for major medical expenses",
      },
      {
        title: "Extended Coverage",
        description:
          "Access base health insurance and super top-up coverage up to ₹25,00,000",
      },
      {
        title: "Tax Benefits",
        description: "Claim deductions under Section 80D, saving up to ₹15,000",
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          How it Works
        </h1>
        <div className="space-y-8 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="text-lg text-gray-700 mr-4">Step {index + 1}:</div>
              <div className="text-lg text-gray-700">
                <strong>{step.title}</strong>: {step.description}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={onBuyNow}
            className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const CarePassBenefitsSilver = () => {
    const benefits = [
        {
          category: "Exclusive Benefits",
          items: [
            "Family Protection: All-in-one coverage for you, your spouse, and children",
            "Consultation Flexibility: Book, reschedule, and customize appointments effortlessly",
            "Digital Convenience: Intuitive app and secure data storage",
            "Exclusive Discounts: Significant savings on health services and products",
          ],
        },
        {
          category: "Expert Care Team",
          items: [
            "Personalized Support: Passionate professionals dedicated to your well-being",
            "Round-the-Clock Assistance: Seamless connectivity via phone, email, and chat",
          ],
        },
        {
          category: "Endless Wellness Possibilities",
          items: [
            "Health and Wellness Network: Access a vast range of services and products through our app",
          ],
        },
      ];
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Unlock a Healthier Tomorrow with CarePass
        </h1>
  
        <div className="space-y-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-8">
            <p className="text-xl font-semibold text-deepPurple">
            Become a Part of the CarePass Family Today!
            </p>
        </div>
      </div>
    );
  };

  export const CarePassBenefitsTaxSaver = () => {
    const benefits = [
        {
          category: "Unique Advantages",
          items: [
            "Family Protection: Comprehensive coverage for loved ones",
            "Flexibility: Book, reschedule, and customize consultations",
            "Tax Savings: Maximize benefits under Section 80D",
            "Digital Convenience: User-friendly app and secure storage",
            "Unbeatable Discounts: Save big on health services and products",
          ],
        },
        {
          category: "Expert Support",
          items: [
            "Dedicated Team: Personalized care from passionate professionals",
            "24/7 Help & Support: Seamless connectivity via phone, email, and chat",
          ],
        },
        {
          category: "Limitless Wellness",
          items: [
            "Wellness App: Access a vast network of health services and products",
          ],
        },
      ];
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
            Unlock a healthier tomorrow with exclusive benefits
        </h1>
  
        <div className="space-y-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-deepPurple mb-4">
                {benefit.category}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-8">
            <p className="text-xl font-semibold text-deepPurple">
            Join the CarePass Family Today!
            </p>
        </div>
      </div>
    );
  };

  export const CarePassSilverSteps = () => {
    const steps = [
      { title: "Buy Now", description: "Purchase CarePass Silver" },
      { title: "Get ₹10,000 Wallet", description: "Receive wallet amount for healthcare services" },
      { title: "Unlimited Teleconsultation", description: "Avail 24/7 online consultations" },
      { title: "Comprehensive Coverage", description: "Access in-clinic consultations, diagnostic tests, pharmacy purchases, dental services, and vision care" },
      { title: "Tax Benefits", description: "Claim deductions under Section 80D" },
      { title: "Exclusive Discounts", description: "Enjoy savings on pharmacy purchases and diagnostic tests" },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
              style={{
            background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
        }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Simple Steps to Comprehensive Care
        </h1>
  
        <div className="max-w-4xl mx-auto">
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            {steps.map((step, index) => (
              <li key={index}>
                <strong className="font-semibold text-deepPurple">{step.title}:</strong> {step.description}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-gray-800 mb-4">Join the Thousands of Satisfied Clients</p>
          <p className="text-xl text-gray-600">Transform your healthcare experience with CarePass Silver.</p>
          <div className="mt-6">
            <p className="text-xl font-semibold text-deepPurple">
              Get Started Now
            </p>
          </div>
        </div>
      </div>
    );
  };

  export const WhyChooseCarePassTaxSaver = () => {
    const features = [
      {
        title: "E-Wallet",
        description: "₹5,000 for Preventive Health Check (PHC) for self and registered family members",
      },
      {
        title: "Unlimited Tele-consultation",
        description: "Doctor consultations via chat, audio, and video for registered members",
      },
      {
        title: "Tax Benefit",
        description: "Avail deduction under Section 80D",
      },
      {
        title: "Customizable Health Packages",
        description: "Choose from various service providers and doctors",
      },
      {
        title: "Substantial Savings",
        description: "Discounts on tests, health packages, pharmacy items, consultations, and more",
      },
      {
        title: "Effortless Service Management",
        description: "Automated confirmations, digital wallet, secured health report storage",
      },
      {
        title: "Discounts on Pharmacy Purchases",
        description: "Up to 18% off on medication and health products on order value over Rs. 500",
      },
      {
        title: "Diagnostic Test Discounts",
        description: "Save up to 60% on diagnostic tests",
      },
      {
        title: "PHC Floater Benefits",
        description: "Extend benefits to family members",
      },
      {
        title: "Save up to 60% on PHC",
        description: "Exclusive discounts for you",
      },
    ];
  
    return (
      <div className="py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          Why Choose CarePass?
        </h1>
  
        <p className="text-lg text-center text-gray-700 mb-12">
          Unlock Extra Savings with Our CarePass Tax Saver
        </p>
  
        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-deepPurple mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">-</span>
                <span>
                  <strong>{feature.title}:</strong> {feature.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="text-center mt-8">
            <p className="text-xl font-semibold text-deepPurple">
                Get Started with CarePass Today!
            </p>
        </div>
      </div>
    );
  };
  
  export const HowItWorksTaxSaver = ({ onBuyNow }) => {
    const steps = [
      "Purchase our Tax Saver Product",
      "Receive ₹5,000 wallet amount for PHC",
      "Avail unlimited teleconsultation",
      "Claim tax benefits under Section 80D",
      "Enjoy discounts on pharmacy purchases and diagnostic tests",
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          How it Works
        </h1>
  
        <div className="space-y-8 max-w-4xl mx-auto">
          <ul className="list-decimal list-inside space-y-4 text-lg text-gray-700">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">-</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="text-center mt-8">
          <button onClick={onBuyNow} className="bg-deepPurple text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  export const AboutUsOurWellnessApp = () => {
    const features = [
      "Personalized Wellness Plans: Get AI-powered customized diet plans and access to expert dieticians for a healthier you.",
      "Seamless Doctor Consultations: Enjoy in-person and online consultations with doctors for convenient healthcare management.",
      "Fitness Made Easy: Access discounted gym memberships to kickstart your fitness journey.",
      "Knowledge at Your Fingertips: Explore our knowledge hubs, webinars, and more to stay updated on the latest health and wellness trends.",
      "Exclusive Discounts: Avail exclusive discounts on pharmacy, diagnostics, and health checks to save on your healthcare expenses.",
      "Digital Health Management: Store and manage your digital health records, track your progress with personalized health assessments, and stay on top of your health with our intuitive trackers.",
    ];
  
    return (
      <div className="py-12 px-6 md:px-12"
      style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FCF9FF 100%)',
        }}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-deepPurple mb-8">
          About Our Wellness App
        </h1>
  
        <div className="space-y-8 max-w-4xl mx-auto">
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">-</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="text-center mt-8">
          <p className="text-lg text-gray-800 font-semibold">
            Healthy. Happy. Covered.
          </p>
        </div>
      </div>
    );
  };

export const Section8 = () => {
    return (
        <div
            className="px-6 py-10 flex items-center justify-center bg-white"
            id="section-8"
        // style={{
        //     background: 'linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)',
        // }}
        >
            <div className="flex flex-col md:flex-row max-w-[1200px] gap-8">
                {/* Text and Button Section */}
                <div className="flex flex-col md:w-1/2 gap-4">
                    <p className="text-deepPurple text-2xl font-light md:text-3xl md:leading-8">
                        Ready to Take Control of Your Health?
                    </p>

                    <p className="text-base md:text-lg leading-7">
                        Don’t settle for less—choose CarePass and experience comprehensive healthcare that covers you and your family in every situation. From preventive care to critical illness coverage, CarePass has it all, ensuring you stay ahead while saving big.
                    </p>

                    <p className="mt-6 text-xl text-deepPurple font-semibold">
                        Take the first step towards smarter health management today!
                    </p>

                    <button
                        className="gap-2 px-3 py-2  w-fit  border border-1 border-deepPurple rounded-3xl  mt-[20px] mx-auto md:m-0 flex items-center">
                        <img src={TopRightSvg} />
                        <p className='text-deepPurple text-sm '>  Explore Our Products Now!</p>
                    </button>


                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://via.placeholder.com/400" // Replace with the image you want
                        alt="Health Management"
                        className="w-full max-w-[300px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export const ProductCards = () => {
    const products = [
      {
        title: "Tax Saver",
        description: [
          "Preventive health check-ups and consultations with ₹5,000 digital wallet.",
          "Unlock benefits worth over ₹17,000+.",
        ],
        link: "/tax-saver",
      },
      {
        title: "Silver Plan",
        description: [
          "Comprehensive primary care services with a ₹10,000 digital wallet for doctor consultations, diagnostics, pharmacy, and more.",
          "Unlock benefits worth over ₹30,000+.",
        ],
        link: "/silver-plan",
      },
      {
        title: "Gold Plan",
        description: [
          "Includes critical illness coverage of ₹2,50,000 and a ₹15,000 digital wallet for preventive health and primary care services.",
          "Unlock benefits worth over ₹2,50,000+.",
        ],
        link: "/gold-plan",
      },
      {
        title: "Platinum Plan",
        description: [
          "The ultimate protection plan with ₹2,50,000 critical illness coverage, ₹15,000 digital wallet, base health coverage, and super top-up coverage of ₹25,00,000.",
          "Unlock benefits worth over ₹28,00,000+.",
        ],
        link: "/super-top-up",
      },
    ];
  
    return (
      <div className="py-12 px-4 md:px-12"
      style={{
        background: '#FCF9FF',
    }}>
        <h1 className="text-3xl font-bold text-center text-deepPurple mb-8">
          Explore Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <h2 className="text-xl font-bold text-deepPurple mb-4">
                {product.title}
              </h2>
              <div className="text-gray-700 space-y-2 mb-6">
                {product.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <a
                href={product.link}
                className="text-deepPurple font-semibold underline hover:text-purple-700 transition"
              >
                Know More
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

export const Section5 = () => {
    return (
        <div
            className="px-6 py-10 flex items-center justify-center"
            style={{
                background: "linear-gradient(180deg, #FCF9FF 0%, #FFFFFF 100%)",
            }}
        >
            <div className="flex flex-col max-w-[1200px] gap-8">
                {/* Header */}
                <div className="text-center">

                    <p className="font-bold text-xl md:text-4xl mx-auto  "> Explore Our Products</p>

                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};
