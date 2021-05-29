import React from 'react';
import ToDo from './components/todo/todo.js';
import NavBar from './components/todo/navbar.js';
import PaginationProvider from './components/context/pagination';
function App() {
  return (
  	<>
		<NavBar />
		<PaginationProvider>
			<ToDo />
		</PaginationProvider>
	</>
  );
}

export default App;



               