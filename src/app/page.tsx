import Link from "next/link"
import Heading from "./components/Heading";
import WeatherIllustration from "./components/WeatherIllustration";
import Footer from "./components/Footer";
import Finder from "./components/Finder";

const Page = () => {
    return (
       <div className="flex flex-col justify-center items-center p-[3rem]">
        <Finder/>
        <hr></hr>
        <Heading/>
        <WeatherIllustration/>
        <Footer/>
       </div>
    );
};

export default Page;