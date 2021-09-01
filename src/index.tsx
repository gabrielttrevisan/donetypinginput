import * as React from "react";

interface DoneTypingInputProperties
    extends React.InputHTMLAttributes<HTMLInputElement> {
    doneTypingTimer: number | 500;
    onDoneTyping: any;
}

const DoneTypingInput: React.FC<DoneTypingInputProperties> = ({
    onDoneTyping,
    doneTypingTimer = 500,
    ...properties
}) => {
    const [typingTimer, setTypingTimer] = React.useState<number>();

    const keyUpHandler = () => {
        clearTimeout(typingTimer);
        setTypingTimer(setTimeout(onDoneTyping, doneTypingTimer));
    };

    const keyDownHandler = () => {
        clearTimeout(typingTimer);
    };

    return (
        <input
            onKeyUp={keyUpHandler}
            onKeyDown={keyDownHandler}
            {...properties}
        />
    );
};

export default DoneTypingInput;
