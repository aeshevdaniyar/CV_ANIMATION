import {useContext} from "react";
import {AnimationScrollContext} from "./AnimationScrollContext.tsx";

export const useScroll = () => {
    return useContext(AnimationScrollContext)
}