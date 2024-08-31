import Image from "next/image";

const WeatherIllustration = () => {
    return (
        <div>
           <Image src={"/assets/img/rain.svg"} width={175} height={175} alt="Weather Condition"/>
        </div>
    );
}
export default WeatherIllustration;