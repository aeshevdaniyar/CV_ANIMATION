import {MutableRefObject} from "react";
import {AnimationRange, ScrollRange} from "./types.ts";
import {computeAnimationValue} from "./utils.ts";
import {useScroll} from "./useScroll.ts";

interface UseAnimationValueProps {
    elementRef: MutableRefObject<HTMLElement>,
    scrollRange: ScrollRange,
    animationRange: AnimationRange,

}

export const useAnimationValue = (props: UseAnimationValueProps) => {
    const {
        scrollRange,
        animationRange,
        elementRef
    } = props
    const {scrollValue} = useScroll()

    if (elementRef.current) {
        const targetOffset = elementRef.current.offsetTop
        const targetHeight = elementRef.current.clientHeight

        const minTargetScroll = 0
        const maxTargetScroll = 100

        const scrollRatio = ((scrollValue || 0 - targetOffset) / targetHeight) * 100

        const targetPercent = Math.min(maxTargetScroll, Math.max(minTargetScroll, scrollRatio))
        return computeAnimationValue(targetPercent, scrollRange, animationRange)
    }

    return animationRange[0]
}