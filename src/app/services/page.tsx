import LatestPostsComponent from "@/components/Posts/LatestPostsComponent";
import BannerComponent from "@/components/Services/BannerComponent";
import TabsComponent from "@/components/Services/TabsComponent";
import TestimonialsComponent from "@/components/Testimonials/TestimonialsComponent";

const Services = () => {
    return (
        <main className="flex  flex-col items-center justify-between p-12 px-4 md:px-24">
            <BannerComponent />
            <TabsComponent />
            <LatestPostsComponent />
            <TestimonialsComponent />
        </main>
    );
};

export default Services;
