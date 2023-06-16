import CalcForm from "@/components/CalcForm";

export default function Home() {

  function handleSubmit() {
    let operate = document.getElementById("operation");
    if (operate == "add")
      alert("set up function add")
    else if (operate == "sub")
      alert("set up function subtract")
    else if (operate == "mult")
      alert("set up function multiply")
  }

  return (
    <>
      <h1> Simple Integer Calculator </h1>
      <h3> By: Matteo Grutta, John De Appolonia, Oleksandra Luchakova</h3>
      <p> sample text </p>
      <CalcForm></CalcForm>
    </>
  )
}
