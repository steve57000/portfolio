import React from "react"
import {useInitial} from "../utils/hooks/useInitial"

const ComponentPreviews = React.lazy(() => import("./previews"))

export {
    ComponentPreviews,
    useInitial
}