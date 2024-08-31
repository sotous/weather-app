import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <Image src={"/assets/img/thermometer.svg"} width={15} height={15} alt="Thermometer"/>
                <div>10</div>
                <div>/</div>
                <div>23</div>
                <div>/</div>
                <div>25</div>
            </div>
            <div>
                <p>4 mph, SE direction</p>
            </div>
        </div>
    );
}
export default Footer;