import { FaCheck } from "react-icons/fa6";

function SectionTwo() {
  const SpaceData = [
    {
      Title: "Community Desk",
      Price: 30,
      Services: [
        "Shared desk space",
        "6 day/week 8 am- 5 pm",
        "Reliable, fast and secure internet",
        "Printing at subsidised rate",
        "A seat at any of the available desk",
        "Access to closed iRise hub events",
      ],
    },
    {
      Title: "Dedicated Desk",
      Price: 100,
      Services: [
        "Dedicated space",
        "Unlimited working hours",
        "Reliable, fast and secure internet",
        "Access to business services",
        "Access to closed iRise hub events",
        "Secure file & data storage",
      ],
    },
    {
      Title: "Office Space",
      Price: 500,
      Services: [
        "Fully furnished office",
        "Unlimited working hours",
        "Reliable, fast and secure internet",
        "Access to business services",
        "Office branding",
        "Access to use the event space",
        "Access to closed iRise hub events",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {SpaceData.map((data, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center border border-iriseColor rounded-xl bg-white shadow-md shadow-gray-200 hover:shadow-lg transition-shadow"
          >
            {/* Title Banner */}
            <div className="h-[50px] w-3/4 bg-iriseColor absolute -top-[1px] rounded-b-full flex items-center justify-center text-white">
              <h1 className="text-lg md:text-xl font-semibold">{data.Title}</h1>
            </div>

            {/* Price & Services */}
            <div className="px-6 py-16 flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                ${data.Price}
              </h1>
              <p className="text-gray-600 text-lg mt-1">per month</p>

              <ul className="text-gray-800 leading-8 mt-6 text-left">
                {data.Services.map((service, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheck className="text-iriseColor mt-1" /> {service}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="px-6 py-3 bg-iriseColor text-white rounded-lg mt-6 hover:bg-opacity-90 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionTwo;
