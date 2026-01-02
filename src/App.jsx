import './App.css'
import Card from './components/card'
import Body from './components/body'

function App() {
  return (
    <Card className="flex h-screen">
      <div className="w-full">
        <h1 className="text-center">Fabula Ultima Quick Reference</h1>
      </div>
      <Body />
    </Card>
  )
}

export default App