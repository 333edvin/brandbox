import { GalleryHero } from "@/components/gallerypage/gall-hero";
import { GalleryImages } from "@/components/gallerypage/gall-imgs";

const page = () =>{
return(
    <div className="w-full mt-28 space-y-14 md:space-y-32">
    <GalleryHero/>
    <GalleryImages/>
    </div>
)
}
export default page;