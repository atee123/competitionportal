// import React, { Component } from 'react'
// const BasicBooleanState = () => {
//   const [isToggled, setIsToggled] = React.useState(false);
//   const toggle = React.useCallback(() => setIsToggled(!isToggled));

//   const [randomNumber, setRandomNumber] = React.useState(Math.random());
//   const generateRandomNumber = React.useCallback(
//     () => setRandomNumber(Math.random()),
//     [],
//   );

//   return (
//     <div>
//       <div>
//         Current random number is <b>{randomNumber}</b>
//         <button style={{ marginLeft: '10px' }} onClick={generateRandomNumber}>
//           regenerate
//         </button>
//       </div>
//       <div>
//         Boolean is set to <b>{String(isToggled)}</b>.
//       </div>
//       <RendersCounter onClick={toggle} />
//     </div>
//   );
// }