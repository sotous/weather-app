import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col pt-10 text-gray-400 text-[10px]">
            <div className="flex justify-between items-center gap-x-2">
                <Image src={"/assets/img/thermometer.svg"} width={12} height={12} alt="Thermometer"/>
                <div>10°</div>
                <div>/</div>
                <div className="text-black text-base font-semibold">23°</div>
                <div>/</div>
                <div>25°</div>
            </div>
            <div className="flex flex-row items-center">
                <Image src={"/assets/img/wind.svg"} width={20} height={20} alt="Wind"/>
                <p className="text-center">4 mph, SE direction</p>
            </div>
        </div>
    );
}
export default Footer;