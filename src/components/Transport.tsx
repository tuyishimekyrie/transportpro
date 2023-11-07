import polo from "../assets/polofront.jpg";
import tiguan from "../assets/tiguan.png";
import amarok from "../assets/Amarok.png";
import toyota from "../assets/toyoya.jpg";
import bus from "../assets/Bus.jpg";
import taxi from "../assets/taxi.png";
import teramont from "../assets/teramont.png";
import passat from "../assets/Passat_1.png";
// type prop = {
//   img: string;
//   text1: string;
//   text2: string;
// };
const transportData = [
  {
    img: polo,
    text1:
      "The moment you set eyes on Polo, you’ll see that every inch has been carefully considered to bring you a vehicle with charisma at every curve. From front to back, Polo features a masculine arrow-shaped tornado line. This structures the car’s side profile, forming a strong shoulder section that gives Polo a bolder presence than before. The chrome trim and dark red tail lights in the bumper underline its sporty and elegant appearance, accentuating Polo’s key characteristics. Polo will inspire you to go from the dull, grey office rug to Hollywood’s red carpet.",
    text2:
      "Would you prefer just to see the speed and mileage display when you’re driving? Or maybe you’d like other journey-related data? Or the map of your route? Or the title of the track you’re listening to right now? Or even lots of these options at the same time? The decision is up to you: with the multi-function steering wheel, you can configure the high-resolution display yourself. So that it’s exactly the way you want it. ",
  },
  {
    img: tiguan,
    text1:
      "hink big and go big with the Volkswagen Teramont. Pack in the fun with loads of room for passengers, cargo, or both. And plug into serious digital connectivity, entertainment, and more. The Teramont. Seats 7. Thrills everyone.",
    text2:
      "Discover how this Volkswagen can drive you beyond your comfort zone without ever compromising on elegance.",
  },
  {
    img: amarok,
    text1:
      "The Amarok transforms expectations of what a bakkie should be. In addition to the countless benchmark features, you've come to expect from the Amarok, its 3.0 litre V6 TDI engine delivers a brutish 165kW and 550Nm of torque. The Amarok V6 has exactly what it takes to get the job done, and then some...",
    text2:
      "Safety on almost any terrain: the Amarok is the only pickup in its class to come with an Automatic Post-Collision Braking System, 17-inch disc brakes at the front and 16-inch disc brakes at the rear as standard. What’s more, the trailer stabilisation system provides the best possible protection against snaking trailers.",
  },
  {
    img: teramont,
    text1:
      "The Amarok transforms expectations of what a bakkie should be. In addition to the countless benchmark features, you've come to expect from the Amarok, its 3.0 litre V6 TDI engine delivers a brutish 165kW and 550Nm of torque. The Amarok V6 has exactly what it takes to get the job done, and then some...",
    text2:
      "Safety on almost any terrain: the Amarok is the only pickup in its class to come with an Automatic Post-Collision Braking System, 17-inch disc brakes at the front and 16-inch disc brakes at the rear as standard. What’s more, the trailer stabilisation system provides the best possible protection against snaking trailers.",
  },
  {
    img: toyota,
    text1:
      "Toyota transforms expectations of what a bakkie should be. In addition to the countless benchmark features, you've come to expect from the Amarok, its 3.0 litre V6 TDI engine delivers a brutish 165kW and 550Nm of torque. The Amarok V6 has exactly what it takes to get the job done, and then some...",
    text2:
      "Safety on almost any terrain: the Amarok is the only pickup in its class to come with an Automatic Post-Collision Braking System, 17-inch disc brakes at the front and 16-inch disc brakes at the rear as standard. What’s more, the trailer stabilisation system provides the best possible protection against snaking trailers.",
  },
  {
    img: bus,
    text1:
      "Toyota transforms expectations of what a bakkie should be. In addition to the countless benchmark features, you've come to expect from the Amarok, its 3.0 litre V6 TDI engine delivers a brutish 165kW and 550Nm of torque. The Amarok V6 has exactly what it takes to get the job done, and then some...",
    text2:
      "Safety on almost any terrain: the Amarok is the only pickup in its class to come with an Automatic Post-Collision Braking System, 17-inch disc brakes at the front and 16-inch disc brakes at the rear as standard. What’s more, the trailer stabilisation system provides the best possible protection against snaking trailers.",
  },
  {
    img: passat,
    text1:
      "The Amarok transforms expectations of what a bakkie should be. In addition to the countless benchmark features, you've come to expect from the Amarok, its 3.0 litre V6 TDI engine delivers a brutish 165kW and 550Nm of torque. The Amarok V6 has exactly what it takes to get the job done, and then some...",
    text2:
      "Safety on almost any terrain: the Amarok is the only pickup in its class to come with an Automatic Post-Collision Braking System, 17-inch disc brakes at the front and 16-inch disc brakes at the rear as standard. What’s more, the trailer stabilisation system provides the best possible protection against snaking trailers.",
  },
  {
    img: taxi,
    text1:
      "Taxi transforms expectations of what a bakkie should be. In addition to the countless benchmark features, you've come to expect from the Amarok, its 3.0 litre V6 TDI engine delivers a brutish 165kW and 550Nm of torque. The Amarok V6 has exactly what it takes to get the job done, and then some...",
    text2:
      "Safety on almost any terrain: the Amarok is the only pickup in its class to come with an Automatic Post-Collision Braking System, 17-inch disc brakes at the front and 16-inch disc brakes at the rear as standard. What’s more, the trailer stabilisation system provides the best possible protection against snaking trailers.",
  },
];
const Transport = () => {
  return (
    <div>
      <div className="flex flex-col mt-4 mb-6 mx-2">
        {transportData.map((data, index) => (
          <div
            key={index}
            className="py-14 flex-col  sm:flex sm:flex-row sm:justify-between sm:items-center"
          >
            <div className="flex-[33%]">{data.text1}</div>
            <img
              src={data.img}
              alt="car"
              className="flex-[33%] w-60 sm:w-46 object-contain px-2 "
            />
            <div className="flex-[33%]">{data.text2}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transport;
