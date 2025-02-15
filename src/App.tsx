import './App.css'
import Question from "./components/Question.tsx";

function App() {
  return (
    <>
        <Question
            title="Choose the correct answers"
            optionsPerSlider={[
                ['Low', 'Medium', 'High'],
                ['Rarely', 'Manchester', 'Often'],
                ['Yes', 'No']
            ]}
            correctAnswers={['High', 'Often', 'Yes']}
        />
    </>
  )
}

export default App
