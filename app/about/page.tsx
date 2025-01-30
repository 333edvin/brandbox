import { AboutHero } from "@/components/aboutpage/abt-hero";
import { AboutRoutines } from "@/components/aboutpage/abt-routines";
import { AboutShape } from "@/components/aboutpage/abt-shape";
import { MeetTrainer } from "@/components/aboutpage/abt-trainer";
import { AboutTransform } from "@/components/aboutpage/abt-transform";

const page = () =>{
return(
    <div className="mt-20 px-6 md:px-20 space-y-14 md:space-y-32">
        <AboutHero/>
        <MeetTrainer/>
        <AboutShape/>
        <AboutTransform/>
        <AboutRoutines/>
        </div>
)
}

export default page;