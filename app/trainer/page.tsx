
import { TrainHero } from '@/components/trainerpage/train-hero';
import { TrainTrainer } from '@/components/trainerpage/train-trainer';
import { StartTraining } from '@/components/trainerpage/start-train';
import { CallToAction } from '@/components/CTA';
const page = () =>{
    return(
        <div className="mt-28 px-6 md:px-20 space-y-20 md:space-y-32">
            <TrainHero/>
            <TrainTrainer/>
            <StartTraining/>
        </div>
    )
    }
    
    export default page;