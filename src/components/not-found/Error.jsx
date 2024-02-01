import Image from 'next/image';
import image1 from '../../public/submarine.png';
import Button from '../../components/Button';

const Error = () => {
  return (
    <div className="w-[60%]">
      <div className="flex flex-row items-center justify-between absolute left-[7%] right-[7%] top-[25%]">
        <div className="flex flex-col items-start w-[45%]">
          <p className="text-[50px] font-sans font-semibold mb-[3%]">
            404 ERROR
          </p>
          <p className=" text-l mb-[2%]">PAGE NOT FOUND</p>
          <p className="font-sans mb-[5%]">
            Looks like our submarine took a dive into the deep end of the ocean
            and got lost! We&apos;re sending our tech-savvy Robosub to rescue
            it. In the meantime, feel free to click around and explore the
            surface web. Sorry for the splash of inconvenience!
          </p>
          <Button link="." text="BACK TO HOME" />
        </div>
        <div className="object-contain w-[50%]">
          <Image src={image1} alt="Submarine graphic" />
        </div>
      </div>
    </div>
  );
};

export default Error;
