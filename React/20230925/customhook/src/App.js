import SomethingComponent from "./components/SomethingComponen";
import InputComponent from "./components/InputComponent";
import useMouseLocation from "./Hooks/useMouseLocation";
import useScroll from "./Hooks/useScroll";
function App() {
  // const mouseLocation = useMouseLocation();
  useScroll();
  return (
    <div style={{ height: 3000 }}>
      {/* <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: mouseLocation.x > 100 ? "royalblue" : "hotpink",
        }}
      ></div> */}
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;
