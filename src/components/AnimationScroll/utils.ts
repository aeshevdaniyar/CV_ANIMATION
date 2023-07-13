import {AnimationRange, ScrollRange} from "./types.ts";

export function computeAnimationValue(targetScroll:number,scrollRange:ScrollRange,animationRange:AnimationRange ) {
    const scrollRangeStart = scrollRange[0]
    const scrollRangeEnd = scrollRange[1]

    const animationRangeStart = animationRange[0]
    const animationRangeEnd = animationRange[1]

    const ratio = (animationRangeEnd - animationRangeStart)/(scrollRangeEnd - scrollRangeStart)
    const targetScrollProgress = Math.min(scrollRangeEnd, Math.max(targetScroll,scrollRangeStart)) - scrollRangeStart

    return targetScrollProgress * ratio + animationRangeStart
}