import HelloLicat from "./components/HelloLicat";
// const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App4 = () => {
  return <HelloLicat />;
};

// const HelloLicat = () => {
//   return (
//     <UserInfo.Consumer>
//       {(value) => (
//         <div>
//           <input type="text" />
//           <h2>{value.name}</h2>
//           <strong>{`@ ${value.id}`}</strong>
//         </div>
//       )}
//     </UserInfo.Consumer>
//   );
// };

export default App4;
