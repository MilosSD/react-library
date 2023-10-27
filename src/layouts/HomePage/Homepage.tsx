import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibrarySevices";

export const Homepage = () => {
    return(
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>
    );
}