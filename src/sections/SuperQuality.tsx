import { Button } from '../components';
import shoe8 from '../assets/images/shoe8.svg';

const SuperQuality = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod
          ex infinita societate generis humani, quam conciliavit ipsa natura,
          ita contracta res est et adducta in angustum ut omnis caritas aut
          inter duos aut inter paucos iungeretur.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SuperQuality;
