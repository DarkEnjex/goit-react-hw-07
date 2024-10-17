import ClockLoader from "react-spinners/ClockLoader";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.container}>
      <ClockLoader color="blue" size={50} />
    </div>
  );
};

export default Loader;
