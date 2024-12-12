import Control from "../modules/formula-library/control/Control"
import FileForm from "../modules/latex-extract/file-form/FileForm"

function App() {
  return (
    <main className="h-full">
      <div className="h-full flex flex-col gap-6 justify-center items-center">
        <Control />
        <FileForm />
      </div>
    </main>
  )
}

export default App
