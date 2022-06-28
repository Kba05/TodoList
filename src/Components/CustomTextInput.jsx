import React from "react";

// class CustomTextInput extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state={
//         text:""
//       }
//       this.textInput = React.createRef();
//       this.focusTextInput = this.focusTextInput.bind(this);
//     }
  
//     focusTextInput() {
//       this.textInput.current.focus();
//     }
  
//     render() {
//       return (
//         <div>
//           <input type="text" ref={this.textInput} />
//           <input type="button" value="Фокус на текстовом поле" onClick={this.focusTextInput} />
//         </div>
//       );
//     }
// }
// export default CustomTextInput

export default function CustomTextInput() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `Вы нажалиsss ${count} раз`;
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}