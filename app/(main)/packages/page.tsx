import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const PackagesPage = () => {
  return (
    <div className="px-3 pb-10">
      <h1 className="lg:text-5xl md:text-2xl text-xl text-center text-green-500 font-bold uppercase px-10 mt-20">
        Packages
      </h1>

      <div className="mt-10">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-10 mt-5 px-5">
          <div>
            <Image
              src="/Gallery3.jpg"
              alt="Gallery3"
              width={500}
              height={500}
              priority
              className="w-full h-full rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 items-center text-lg text-center font-bold">
            <h1 className="text-2xl">
              Daytour <span className="text-green-500">Weekdays</span>
            </h1>
            <p className="text-green-500">9:00 AM - 5:00 PM</p>
            <p>
              <span className="text-green-500">ENTRANCE FEE</span> : 150PHP PER
              HEAD (MINIMUM OF 15PAX)
            </p>
            <p>
              <span className="text-green-500">ADD-ONS</span> : AIR-CONDITIONED
              ROOM - 1500PHP PER ROOM
            </p>
            <p>200PHP - ONE TIME FEE FOR BRINGING-IN LIQUOR</p>
            <p>200PHP -ONE TIME FEE FOR LPG CONSUMPTION</p>
            <p className="text-green-500">RENTAL FEE : 3500PHP</p>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 md:rid-cols-2 grid-cols-1 gap-12 bg-green-500 mt-10 rounded-md py-6 md:px-12 px-6 mx-4">
          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              20% discount for PWD and Senior Citizens only
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Children below 3 feet of height - Free of Charge
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Swimming Pool(Adult,Kiddie,Jacuzzi)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Pavillion Hall(With Cushioned Sofas)
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Pool Deck Area(with Loungers)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Gazebo(with cushioned sofas)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Sports Facilities ( Basketball , Billiard , Badminton , Volleyball
              , Dart , Chess , and Air Hockey)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Multi-purpose Area(with Cignal TV)
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Garden Area(with concrete tables and benches)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Cooking and Grilling Area
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Videoke / Netflix / Sound System
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Farm Walking/Roaming Area
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Secured Parking Area
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Children&apos;s Playground
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Free WI-FI
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Free Unlimited Drinking Water
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-10 mt-5 px-5">
          <div>
            <Image
              src="/Gallery4.jpg"
              alt="Gallery4"
              width={500}
              height={500}
              priority
              className="w-full h-full rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 items-center text-lg text-center font-bold">
            <h1 className="text-2xl">
              Daytour Weekends &{" "}
              <span className="text-green-500">Holidays</span>
            </h1>
            <p className="text-green-500">9:00 AM - 5:00 PM</p>
            <p>
              <span className="text-green-500">ENTRANCE FEE</span> : 150PHP PER
              HEAD (MINIMUM OF 15PAX)
            </p>
            <p>
              <span className="text-green-500">ADD-ONS</span> : AIR-CONDITIONED
              ROOM - 1500PHP PER ROOM
            </p>
            <p>200PHP - ONE TIME FEE FOR BRINGING-IN LIQUOR</p>
            <p>200PHP -ONE TIME FEE FOR LPG CONSUMPTION</p>
            <p className="text-green-500">RENTAL FEE : 4000PHP</p>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 md:rid-cols-2 grid-cols-1 gap-12 bg-green-500 mt-10 rounded-md py-6 md:px-12 px-6 mx-4">
          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              20% discount for PWD and Senior Citizens only
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Children below 3 feet of height - Free of Charge
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Swimming Pool(Adult,Kiddie,Jacuzzi)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Pavillion Hall(With Cushioned Sofas)
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Pool Deck Area(with Loungers)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Gazebo(with cushioned sofas)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Sports Facilities ( Basketball , Billiard , Badminton , Volleyball
              , Dart , Chess , and Air Hockey)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Multi-purpose Area(with Cignal TV)
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Garden Area(with concrete tables and benches)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Cooking and Grilling Area
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Videoke / Netflix / Sound System
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Farm Walking/Roaming Area
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Secured Parking Area
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Children&apos;s Playground
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Free WI-FI
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Free Unlimited Drinking Water
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-10 mt-5 px-5">
          <div>
            <Image
              src="/Gallery5.jpg"
              alt="Gallery5"
              width={500}
              height={500}
              priority
              className="w-full h-full rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 items-center text-lg text-center font-bold">
            <h1 className="text-2xl">
              Day & Night Tour & <span className="text-green-500">(22hrs)</span>
            </h1>
            <p className="text-green-500">9:00 AM - 7:30 AM</p>
            <p>GOOD FOR 25 PAX OR LESS</p>
            <p>200PHP - PER HEAD IN EXCESS OF 25 PAX</p>
            <p>200PHP - ONE TIME FEE FOR BRINGING-IN LIQUOR</p>
            <p>200PHP -ONE TIME FEE FOR LPG CONSUMPTION</p>
            <p className="text-green-500">
              RENTAL FEE : SUNDAY - THURSDAY (16,900PHP)
            </p>
            <p className="text-green-500">FRI - SAT & HOLIDAYS (18,400PHP)</p>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 md:rid-cols-2 grid-cols-1 gap-12 bg-green-500 mt-10 rounded-md py-6 md:px-12 px-6 mx-4">
          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              20% discount for PWD and Senior Citizens only
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Children below 3 feet of height - Free of Charge
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Swimming Pool(Adult,Kiddie,Jacuzzi)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Pavillion Hall(With Cushioned Sofas)
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Pool Deck Area(with Loungers)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Gazebo(with cushioned sofas)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Sports Facilities ( Basketball , Billiard , Badminton , Volleyball
              , Dart , Chess , and Air Hockey)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Multi-purpose Area(with Cignal TV)
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Garden Area(with concrete tables and benches)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Cooking and Grilling Area
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Videoke / Netflix / Sound System
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Farm Walking/Roaming Area
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Secured Parking Area
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Children&apos;s Playground
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Free WI-FI
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Free Unlimited Drinking Water
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-10 mt-5 px-5">
          <div>
            <Image
              src="/Gallery15.jpg"
              alt="Gallery15"
              width={500}
              height={500}
              priority
              className="w-full h-full rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 items-center text-lg text-center font-bold">
            <h1 className="text-2xl">
              Night & Day Tour <span className="text-green-500">(22hrs)</span>
            </h1>
            <p className="text-green-500">6:30P PM - 5:00 PM</p>
            <p>GOOD FOR 25 PAX OR LESS</p>
            <p>200PHP - PER HEAD IN EXCESS OF 25 PAX</p>
            <p>200PHP - ONE TIME FEE FOR BRINGING-IN LIQUOR</p>
            <p>200PHP -ONE TIME FEE FOR LPG CONSUMPTION</p>
            <p className="text-green-500">
              RENTAL FEE : SUNDAY - THURSDAY (16,900PHP)
            </p>
            <p className="text-green-500">FRI - SAT & HOLIDAYS (18,400PHP)</p>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 md:rid-cols-2 grid-cols-1 gap-12 bg-green-500 mt-10 rounded-md py-6 md:px-12 px-6 mx-4">
          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              20% discount for PWD and Senior Citizens only
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Children below 3 feet of height - Free of Charge
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Swimming Pool(Adult,Kiddie,Jacuzzi)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Pavillion Hall(With Cushioned Sofas)
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Pool Deck Area(with Loungers)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Gazebo(with cushioned sofas)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Sports Facilities ( Basketball , Billiard , Badminton , Volleyball
              , Dart , Chess , and Air Hockey)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Multi-purpose Area(with Cignal TV)
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Garden Area(with concrete tables and benches)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Cooking and Grilling Area
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Videoke / Netflix / Sound System
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Farm Walking/Roaming Area
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Secured Parking Area
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Children&apos;s Playground
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Free WI-FI
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Free Unlimited Drinking Water
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-10 mt-5 px-5">
          <div>
            <Image
              src="/Gallery16.jpg"
              alt="Gallery16"
              width={500}
              height={500}
              priority
              className="w-full h-full rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 items-center text-lg text-center font-bold">
            <h1 className="text-2xl text-green-500">Overnight</h1>
            <p className="text-green-500">6:30 PM - 7:30 AM</p>
            <p>GOOD FOR 25 PAX OR LESS</p>
            <p>180PHP - PER HEAD IN EXCESS OF 25 PAX</p>
            <p>200PHP - ONE TIME FEE FOR BRINGING-IN LIQUOR</p>
            <p>200PHP -ONE TIME FEE FOR LPG CONSUMPTION</p>
            <p className="text-green-500">
              RENTAL FEE : SUNDAY - THURSDAY (11,900PHP)
            </p>
            <p className="text-green-500">FRI - SAT & HOLIDAYS (12,900PHP)</p>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 md:rid-cols-2 grid-cols-1 gap-12 bg-green-500 mt-10 rounded-md py-6 md:px-12 px-6 mx-4">
          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              20% discount for PWD and Senior Citizens only
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Children below 3 feet of height - Free of Charge
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Swimming Pool(Adult,Kiddie,Jacuzzi)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Pavillion Hall(With Cushioned Sofas)
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Pool Deck Area(with Loungers)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Gazebo(with cushioned sofas)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Sports Facilities ( Basketball , Billiard , Badminton , Volleyball
              , Dart , Chess , and Air Hockey)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Multi-purpose Area(with Cignal TV)
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Garden Area(with concrete tables and benches)
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Cooking and Grilling Area
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Videoke / Netflix / Sound System
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Farm Walking/Roaming Area
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Secured Parking Area
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Children&apos;s Playground
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Free WI-FI
            </p>
            <p className="flex gap-2 text-sm">
              <FaCircleCheck className="text-xl shrink-0" />
              Free Unlimited Drinking Water
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
