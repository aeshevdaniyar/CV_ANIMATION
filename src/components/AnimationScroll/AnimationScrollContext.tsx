import {createContext, MutableRefObject, ReactNode, useMemo, useRef, useState} from "react";
import { useScroll} from "@react-spring/web";
import {SpringConfig} from "@react-spring/core";

interface AnimationScrollContextProps {
    scrollValue?: number,
    setScrollValue?: (value: number) => void
}

interface AnimationScrollProvider {
    children?: ReactNode,
    globalScrollConfig?:SpringConfig
}

export const AnimationScrollContext = createContext<AnimationScrollContextProps>({})

export const AnimationScrollProvider = (props: AnimationScrollProvider) => {
    const {children,globalScrollConfig} = props
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>

    const [scrollValue, setScrollValue] = useState<number>(0)

    useScroll({
        onChange: ({value: {scrollYProgress}}) => {
            setScrollValue(scrollYProgress*containerRef.current.clientHeight)
        },
        config:globalScrollConfig
    })

    const value = useMemo(() => ({
        scrollValue,
        setScrollValue
    }), [scrollValue])

    return (
        <AnimationScrollContext.Provider value={value}>
            <div ref={containerRef}>
                {children}
            </div>
        </AnimationScrollContext.Provider>
    )
}