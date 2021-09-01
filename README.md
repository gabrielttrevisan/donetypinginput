# What is this?

It's a React component that fires an event when the user is done typing.

# Installation

`npm i donetypinginput --save`

Then:

```
import DoneTypingInput from "donetypinginput";

export const MyInput = (props) => {
    return(
        <DoneTypingInput doneTypingTimer={600} onDoneTyping={props.onDoneTyping} {...props} />
    );
};
```

# Options

The component has two properties:

* *doneTypingTimer* - _number in ms_ (Defaults to 500ms)
* *onDoneTyping* - _the event handler_