import { useState } from "react";
import "./style.css"
function StateDemo() {
    let [isLearningReact, setIsLearningReact] = useState(false);
    function handleClick() {
        setIsLearningReact(prevState => !prevState)
    }
    return (
        <div>
            <h1>Do you want to learn React?</h1>
            <button onClick={handleClick}>
                {
                    isLearningReact ? "Yes" : "No"
                }
            </button>
        </div>
    )
}
export default StateDemo;