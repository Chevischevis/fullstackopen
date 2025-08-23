import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>
const StatisticLine = ({ text, value }) => (
  <p>{text} {value}</p>
)
const Statistics  = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0) {
    return <p>No feedback given</p>
  }
  return (
    <>
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>       
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(good - bad) / all}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{good / all * 100} %</td>
        </tr>
      </tbody>
    </table>
      {/* <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />      
      <StatisticLine text="average" value={(good - bad) / all} />
      <StatisticLine text="positive" value={good / all * 100 + ' %'} /> */}
    </>
  )
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  
  return (
    <>
    <Header text="give feedback" />
    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>
    <Header text="statistics" />
    <Statistics  good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App