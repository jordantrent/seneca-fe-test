import './App.css'
import Question from "./components/Question.tsx";

function App() {
  return (
    <>
        <Question
            title="An animal cell contains:"
            optionsPerSlider={[
                ['Cell wall', 'Ribosomes'],
                ['Cytoplasm', 'Chloroplast'],
                ['Partially permeable membrane', 'Impermeable membrane'],
                ['Cellulose', 'Mitochondria'],
            ]}
            // Answers must be input in the same order as the options above!
            correctAnswers={['Ribosomes', 'Cytoplasm', 'Partially permeable membrane', 'Mitochondria']}
        />
    </>
  )
}

export default App
