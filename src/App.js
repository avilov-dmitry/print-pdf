import {useState} from "react";
import PdfCard from "./PdfCard";
import { Image, Text, View, Page, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Register font styles normally
Font.register({
  family: 'Manrope',
  src: "/Manrope.ttf"
  //     fonts: [
  //     { src: "/Roboto/Roboto-Regular.ttf" },
  // ]
})

Font.register({
  family: 'Roboto',
  src: "/Roboto/Roboto-Regular.ttf"
})

let fontsLoaded = false
let forceUpdate = null

// Force loading and wait for loading to finish
Promise.all([
  Font.load({ fontFamily: 'Manrope' }),
]).then(() => {
  fontsLoaded = true
  if (forceUpdate) forceUpdate()
})

// Helper to trigger an update in a functional component
function useForceUpdate () {
  const [value, setValue] = useState(0)
  return () => setValue(value => value + 1)
}

function App() {
  forceUpdate = useForceUpdate()
  if(!fontsLoaded) return <div></div>

  const cards = {  maxWidth: "1200px", margin: "0 auto", display: "grid", gap: "1rem", padding : '20px', gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"}
  return (
    <div>
      <div style={cards}>
        <PdfCard title="Карточка"/>
      </div>
    </div>
  );
}

export default App;
