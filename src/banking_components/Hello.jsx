import hello from "./hello.module.css";  //how to import a module css

const Hello = () => {
  return (
    <div>
        <h1 className={hello.heda}>Greetings from mars</h1>
    </div>
  )
}

export default Hello