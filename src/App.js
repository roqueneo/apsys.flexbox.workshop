import './App.css'

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<h1>Learning Flexbox</h1>
			</header>
			<body className='body'>
				<div className='container'>
					<div className='home'>Home</div>
					<div className='search'>Search</div>
					<div className='logout'>Logout</div>
				</div>
				<div className='container'>
					<div class='item first-face'>
						<span class='pip'></span>
					</div>
					<div class='item second-face'>
						<span class='pip'></span>
						<span class='pip'></span>
					</div>
					<div class='item third-face'>
						<span class='pip'></span>
						<span class='pip'></span>
						<span class='pip'></span>
					</div>
					<div class='item fourth-face'>
						<div class='column'>
							<span class='pip'></span>
							<span class='pip'></span>
						</div>
						<div class='column'>
							<span class='pip'></span>
							<span class='pip'></span>
						</div>
					</div>
					<div class='item fifth-face'>
						<div class='column'>
							<span class='pip'></span>
							<span class='pip'></span>
						</div>
						<div class='column'>
							<span class='pip'></span>
						</div>
						<div class='column'>
							<span class='pip'></span>
							<span class='pip'></span>
						</div>
					</div>
					<div class='item sixth-face'>
						<div class='column'>
							<span class='pip'></span>
							<span class='pip'></span>
							<span class='pip'></span>
						</div>
						<div class='column'>
							<span class='pip'></span>
							<span class='pip'></span>
							<span class='pip'></span>
						</div>
					</div>
				</div>
			</body>
		</div>
	)
}

export default App
