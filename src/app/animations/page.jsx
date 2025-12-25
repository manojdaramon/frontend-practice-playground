import Animation from "../components/animations";
import DraggableCard from "../components/draggable-card";
import FeaturesList from "../components/features-list";
import AnimatePresence from "../components/animate-presence";
import LayoutAnimation from "../components/layout-animation";
import LiveBadge from "../components/live-badge";

const Page = () => {
    return (
        <div>
            <Animation />
            <FeaturesList />
            <DraggableCard />
            <AnimatePresence />
            <LayoutAnimation />
            <LiveBadge />
        </div>
    );
};

export default Page;