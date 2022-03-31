import { useState } from "react";

export default useForceUpdate = () => {
    const [state, setState] = useState(0)
    return () => setState(state + 1)
}