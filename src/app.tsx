import { LocationProvider, Router, Route } from 'preact-iso'
import { Home } from './routes/Home'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path={`${base}/`} component={Home} />
        <Route default component={() => <div>404 Not Found</div>} />
      </Router>
    </LocationProvider>
  )
}
