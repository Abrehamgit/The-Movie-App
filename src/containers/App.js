import React from 'react'
import { MyProvider } from '../context/MyProvider'
import AppRouter from '../Routers/AppRouter'

const App = () => {
	return(
		<MyProvider>
			<AppRouter />
		</MyProvider>
	)
}

export default App