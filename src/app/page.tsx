import Image from "next/image";
import DealIcon from "./components/icons/DealIcon";
import SmartphoneIcon from "./components/icons/SmartphoneIcon";
import WirelessIcon from "./components/icons/WirelessIcon";
import PhonePlansIcon from "./components/icons/PhonePlansIcon";
import InternetIcon from "./components/icons/InternetIcon";
import PrepaidIcon from "./components/icons/PrepaidIcon";
import BundleIcon from "./components/icons/BundleIcon";
import LabeledIcon from "./components/LabeledIcon";

function Slider() {
  return (
    <div className="grid grid-cols-3 align-middle bg-gradient-to-r from-sky-600 to-sky-500 gap-4">
      <div className="col-span-3 text-center text-6xl pt-6 p-4 text-white">
        Let's get you connected
      </div>
      <div className="flex flex-col gap-3 p-4  rounded-md bg-white mx-8">
        <p className="text-xl">All in one</p>
        <p className="text-3xl font-bold">Save $20/mo. on AT&T Fiber&reg;</p>
        <p className="text-2xl">
          When you have both superfast fiber internet and an AT&T Wireless plan.
        </p>
        <p className="text-xs text-slate-500">
          $20/mo. savings with eligible AT&T wireless plan. Discount starts
          within two bills. Limited availability/areas. See offer details
        </p>
        <button className="bg-[#0057b8] w-fit px-8 py-3 rounded-2xl text-white my-4">
          Shop AT&T Fiber
        </button>
      </div>

      <div className="flex flex-col gap-3 p-4  rounded-md bg-white mx-8">
        <p className="text-xl">All in one</p>
        <p className="text-3xl font-bold">Save $20/mo. on AT&T Fiber&reg;</p>
        <p className="text-2xl">
          When you have both superfast fiber internet and an AT&T Wireless plan.
        </p>
        <p className="text-xs text-slate-500">
          $20/mo. savings with eligible AT&T wireless plan. Discount starts
          within two bills. Limited availability/areas. See offer details
        </p>
        <button className="bg-[#0057b8] w-fit px-8 py-3 rounded-2xl text-white my-4">
          Shop AT&T Fiber
        </button>
      </div>

      <div className="flex flex-col gap-3 p-4 rounded-md  bg-white mx-8">
        <p className="text-xl">All in one</p>
        <p className="text-3xl font-bold">Save $20/mo. on AT&T Fiber&reg;</p>
        <p className="text-2xl">
          When you have both superfast fiber internet and an AT&T Wireless plan.
        </p>
        <p className="text-xs text-slate-500">
          $20/mo. savings with eligible AT&T wireless plan. Discount starts
          within two bills. Limited availability/areas. See offer details
        </p>
        <button className="bg-[#0057b8] w-fit px-8 py-3 rounded-2xl text-white my-4">
          Shop AT&T Fiber
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col lg:mx-40">
      <div className="flex gap-20 text-neutral-600 my-12 m-auto w-fit">
        <LabeledIcon icon={<DealIcon />} label="Deals" />
        <LabeledIcon icon={<SmartphoneIcon />} label="Phones & devices" />
        <LabeledIcon icon={<WirelessIcon />} label="Wireless" />
        <LabeledIcon icon={<PhonePlansIcon />} label="Phone plans" />
        <LabeledIcon icon={<InternetIcon />} label="Internet" />
        <LabeledIcon icon={<PrepaidIcon />} label="Prepaid" />
        <LabeledIcon icon={<BundleIcon />} label="Bundles" />
      </div>
      <div className="flex bg-[#0057b8] text-white justify-center text-xl p-4 rounded-xl mb-16">
        <p>
          Have a new Iphone 15? Update to iOS 17.0.2 before transferring content
          from your old device. <span className="underline">Learn more</span>
        </p>
      </div>
      <Slider />
    </main>
  );
}
