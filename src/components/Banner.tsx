import img from "../assets/tiguan.png";
import img1 from "../assets/polofront.jpg";
import img2 from "../assets/toyoya.jpg";
import img3 from "../assets/Bus.jpg";
import img4 from "../assets/Passat_1.png";
import img5 from "../assets/teramont.png";
const Banner = () => {
  return (
    <div className="gap-10 flex flex-wrap sm:flex sm:flex-row mx-4 my-4">
      <img src={img} alt="image" className="w-44 " />
      <img src={img1} alt="image" className="w-44" />
      <img src={img2} alt="image" className="w-44" />
      <img src={img3} alt="image" className="w-44" />
      <img src={img4} alt="image" className="w-44 object-contain" />
      <img src={img5} alt="image" className="w-44 object-contain" />
    </div>
  );
}

export default Banner