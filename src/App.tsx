import { VotingForm } from "@screens/VotingForm/VotingForm"
import { TableResults } from "@screens/TableResults/TableResults"
import './App.css'

function App() {

  return (
    <div style={{display: "flex", gap: "20px"}}>
      <VotingForm />
      <TableResults />
    </div>
  )
}

export default App