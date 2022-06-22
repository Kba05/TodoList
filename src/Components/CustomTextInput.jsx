import React from "react";

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        text:""
      }
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      this.textInput.current.focus();
    }
  
    render() {
      return (
        <div>
          <input type="text" ref={this.textInput} />
          <input type="button" value="Фокус на текстовом поле" onClick={this.focusTextInput} />
        </div>
      );
    }
}
export default CustomTextInput