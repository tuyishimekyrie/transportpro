import Header from "../components/Header";
import Footer from "../components/Footer";
import air1 from "../assets/rwandair.jpg";
import air2 from '../assets/rwandair1.jpg'
import air3 from "../assets/rwandair2.jpg";

const Airplanes = () => {
    const transportData = [
      {
        img: air1,
        text1:
          "The moment you set eyes on Polo, you’ll see that every inch has been carefully considered to bring you a vehicle with charisma at every curve. From front to back, Polo features a masculine arrow-shaped tornado line. This structures the car’s side profile, forming a strong shoulder section that gives Polo a bolder presence than before. The chrome trim and dark red tail lights in the bumper underline its sporty and elegant appearance, accentuating Polo’s key characteristics. Polo will inspire you to go from the dull, grey office rug to Hollywood’s red carpet.",
        text2:
          "Would you prefer just to see the speed and mileage display when you’re driving? Or maybe you’d like other journey-related data? Or the map of your route? Or the title of the track you’re listening to right now? Or even lots of these options at the same time? The decision is up to you: with the multi-function steering wheel, you can configure the high-resolution display yourself. So that it’s exactly the way you want it. ",
      },
      {
        img: air2,
        text1:
          "hink big and go big with the Volkswagen Teramont. Pack in the fun with loads of room for passengers, cargo, or both. And plug into serious digital connectivity, entertainment, and more. The Teramont. Seats 7. Thrills everyone.",
        text2:
          "Discover how this Volkswagen can drive you beyond your comfort zone without ever compromising on elegance.",
      },
      {
        img: air3,
        text1:
          "The Amarok transforms expectations of what a bakkie should be. In addition to the countless benchmark features, you've come to expect from the Amarok, its 3.0 litre V6 TDI engine delivers a brutish 165kW and 550Nm of torque. The Amarok V6 has exactly what it takes to get the job done, and then some...",
        text2:
          "Safety on almost any terrain: the Amarok is the only pickup in its class to come with an Automatic Post-Collision Braking System, 17-inch disc brakes at the front and 16-inch disc brakes at the rear as standard. What’s more, the trailer stabilisation system provides the best possible protection against snaking trailers.",
      }
    ];
  return (
    <div>
      <Header />
      <div>
        <h1 className="font-bold text-center py-4 text-2xl  ">Services</h1>
        <div className="flex flex-col my-6 mx-2">
          {transportData.map((data, index) => (
            <div
              key={index}
              className="py-14 flex-col sm:flex sm:flex-row sm:justify-between sm:items-center"
            >
              <div className="flex-[33%]">{data.text1}</div>
              <img
                src={data.img}
                alt="car"
                className="flex-[33%] w-60 sm:w-46 object-contain px-2 rounded-sm"
              />
              <div className="flex-[33%]">{data.text2}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Airplanes;
