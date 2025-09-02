import { useState } from "react"
import "./App.css"

export default function App() {
  const [pdf, setPdf] = useState(0)

  function handleChange(): void {
    const files = (document.getElementById("myFile") as HTMLInputElement).files;
    if (files != null && files.length > 0) {
      setPdf(files[0].name);
    }
  };

  return (
    <section id="viewerPdf">
      <input type="file" id="myFile" name="filename" accept=".pdf" onChange={handleChange} />
      <button disabled={pdf == ""} id="myPdf" value="Examiner le PDF" />
    </section>
  )
}
