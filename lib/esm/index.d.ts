import * as React from "react";
interface DoneTypingInputProperties extends React.InputHTMLAttributes<HTMLInputElement> {
    doneTypingTimer?: number | 500;
    onDoneTyping: any;
}
declare const DoneTypingInput: React.FC<DoneTypingInputProperties>;
export default DoneTypingInput;
