import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import ThankYou from './routes/ThankYou'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#02060f] text-slate-100">
      <Routes>
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/:section?" element={<Home />} />
      </Routes>
    </div>
  )
}
