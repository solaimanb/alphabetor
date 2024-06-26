import Image from "next/image";

import Ad from "@/public/app-ad.png";
import Apple from "@/public/apple-store-badge-en.svg";
import Google from "@/public/google-play-badge-en.webp";

const AppFeaturedAd = () => {
  return (
    <div className="container bg-brandDark my-20 px-10 py-5 md:px-20 rounded-lg text-white flex flex-col md:flex-row items-center justify-between gap-y-20 md:gap-y-0">
      <div className="h-full flex flex-col justify-between gap-y-10">
        <div>
          <h2 className="text-center md:text-start text-3xl xl:text-4xl font-bold w-60 xl:w-80">
            Download Alphabetor Mobile App &{" "}
            <span className="">Make Learning</span> Ease
          </h2>
        </div>

        <div className="flex gap-x-2 mt-auto">
          <Image
            src={Apple}
            alt="apple-store-badge"
            className="w-[120px] h-10"
            width={500}
            height={500}
          />

          <Image
            src={Google}
            alt="google-play-badge"
            className="w-[120px] h-10"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="scale-110 md:scale-125">
        <Image
          src={Ad}
          alt=""
          width={600}
          height={600}
          className="scale-110 md:scale-150"
        />
      </div>
    </div>
  );
};

export default AppFeaturedAd;
