import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import $ from 'jQuery'

import Nav from 'nav/Nav.js'
import CardWrap from 'cardWrap/CardWrap.js'
import Home from 'home/Home.js'

require('../semantic/dist/semantic.css')
require('./common/style/main.css')

let datas = [
	{
		imgSrc: require('images/matthew.png'),
		name: 'Matt',
		meta: 'Friends',
		desc: 'Matthew is an interior designer living',
		joined: 2013,
		likeNum: 75
	},
	{
		imgSrc: require('images/molly.png'),
		name: 'Molly',
		meta: 'Coworker',
		desc: 'Molly is a personal assistant living in Paris.',
		joined: 2013,
		likeNum: 35
	},
	{
		imgSrc: require('images/elyse.png'),
		name: 'Elyse',
		meta: 'Coworker',
		desc: 'Elyse is a copywriter working in New York.',
		// joined: 2014,
		likeNum: 151
	}
]

class App extends Component{

	constructor(props){
		super(props)
		this.state = {
			view: 'home'
		}
		this.changeView = this.changeView.bind(this)
	}

	changeView(view){
		this.setState({
			view
		})
	}

	getChildContext(){
		return {
			et: 'Died',
			ett:'ffff'
		}
	}

	componentDidUpdate(){
		console.log('App 更新好了')
	}

	componentDidMount(){
		console.log('APP 渲染完成')
	}

	render(){

		console.log('app')
		let {view} = this.state

		let {data} = this.props

		let viewComp = null

		switch (view) {

			case 'list':
				viewComp = <CardWrap data={data}/>
				break
			case 'home':
			default:viewComp = <Home/>

		}

		return (
			<div className="ui container">
				<div className="ui dividing"></div>
				<Nav changeView={this.changeView}/>
				{viewComp}
			</div>
		)
	}
}

App.childContextTypes = {
	et: PropTypes.string,
	ett: PropTypes.string
}

ReactDOM.render(
	<App data={datas}/>,
	document.getElementById('root')
)

/*class Toggle extends Component{
	constructor(props){
		super(props)
		this.state = {
			isToggleOn : true
		}
		this.handleClick  = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState(prevState => ({
			isToggleOn : !prevState.isToggleOn
		}))
	}

	render(){
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		)
	}
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root1')
)*/

/*class UserGreeting extends Component {
	render(){
		return(
			<h1>Welcome back!</h1>
		)
	}
}

class GuestGreeting extends Component {
	render(){
		return(
			<h1>Please sign up.</h1>
		)
	}
}

class Greeting extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const isLoggedIn = this.props.isLoggedIn

		if (isLoggedIn) {
		    return <UserGreeting />
		}else{
			return <GuestGreeting />
		}
	}

}


function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
		Login
		</button>
	)
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
		Logout
		</button>
	)
}

class LoginControl extends React.Component {
  	constructor(props) {
	    super(props)
	    this.handleLoginClick = this.handleLoginClick.bind(this)
	    this.handleLogoutClick = this.handleLogoutClick.bind(this)
	    this.state = {isLoggedIn: false}
	}

 	handleLoginClick() {
    	this.setState({isLoggedIn: true})
  	}

  	handleLogoutClick() {
    	this.setState({isLoggedIn: false})
  	}

  render() {
	    const isLoggedIn = this.state.isLoggedIn

	    let button = null

	    if (isLoggedIn) {
	      	button = <LogoutButton onClick={this.handleLogoutClick} />
	    } else {
	      	button = <LoginButton onClick={this.handleLoginClick} />
	    }

	    return (
	      	<div>
	        	<Greeting isLoggedIn={isLoggedIn} />
	        	{button}
	      	</div>
    	)
  	}
}

ReactDOM.render(
  	<LoginControl />,
  	document.getElementById('root1')
)*/

/*class NameForm extends React.Component {
  	constructor(props) {
	    super(props)
	    this.state = {value: ''}

	    this.handleChange = this.handleChange.bind(this)
	    this.handleSubmit = this.handleSubmit.bind(this)
  	}

  	handleChange(event) {
    	this.setState({value: event.target.value.toUpperCase()})
  	}

  	handleSubmit(event) {
	    alert('A name was submitted: ' + this.state.value)
	    event.preventDefault()
  	}

  	render() {
	    return (
	      	<form onSubmit={this.handleSubmit}>
		        <label>
		          	Name:
		          	<input type="text" value={this.state.value} onChange={this.handleChange} />
		        </label>
		        <input type="submit" value="Submit" />
	      	</form>
	    )
  	}
}

ReactDOM.render(
  	<NameForm />,
  	document.getElementById('root1')
)
*/

/*function FancyBorder(props) {
	// props.children返回一个数组，包含两个虚拟Dom对象
	// console.dir(props.children)
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
	)
}

function WelcomeDialog() {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				Welcome
			</h1>
			<p className="Dialog-message">
				Thank you for visiting our spacecraft!
			</p>
		</FancyBorder>
	)
}

ReactDOM.render(
  	<WelcomeDialog />,
  	document.getElementById('root1')
)*/


/*function Contacts (){
	return(
		<h4>123</h4>
	)
}

function Chat (){
	return(
		<h4>456</h4>
	)
}

function SplitPane(props) {
	console.log(props)
  return (
    <div className="SplitPane">
		<div className="SplitPane-left">
			{props.left}
		</div>
		<div className="SplitPane-right">
			{props.right}
		</div>
    </div>
  )
}

function Appp() {
	return (<SplitPane left={ <Contacts /> } right={ <Chat /> } />)
}

ReactDOM.render(
  	<Appp />,
  	document.getElementById('root1')
)*/

/*
function FancyBorder(props) {
	// props.children返回一个数组，包含两个虚拟Dom对象
	// console.dir(props.children)
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
	)
}

function Dialog(props) {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
		</FancyBorder>
	)
}

function WelcomeDialog() {
	return (
	<Dialog
	  	title="Welcome"
	  	message="Thank you for visiting our spacecraft!" />
	)
}

ReactDOM.render(
  	<WelcomeDialog />,
  	document.getElementById('root1')
)
*/

/*function FancyBorder(props) {
	// props.children返回一个数组，包含两个虚拟Dom对象
	// console.dir(props.children)
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
	)
}

function Dialog(props) {
  	return (
    	<FancyBorder color="blue">
	      	<h1 className="Dialog-title">
	        	{props.title}
	      	</h1>
	      	<p className="Dialog-message">
	        	{props.message}
	      	</p>
      		{props.children}
    	</FancyBorder>
  	)
}

class SignUpDialog extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleSignUp = this.handleSignUp.bind(this)
		this.state = {login: ''}
	}

  	render() {
	    return (
	      	<Dialog title="Mars Exploration Program"
	              message="How should we refer to you?">
	        	<input value={this.state.login}
	               onChange={this.handleChange} />
	        	<button onClick={this.handleSignUp}>
	          		Sign Me Up!
	        	</button>
	     	</Dialog>
	    )
  	}

  	handleChange(e) {
    	this.setState({login: e.target.value})
  	}

  	handleSignUp() {
    	alert(`Welcome aboard, ${this.state.login}!`)
  	}
}

ReactDOM.render(
  	<SignUpDialog />,
  	document.getElementById('root1')
)
*/

/*function Repeat(props) {
	let items = []
	for (let i = 0; i < props.numTimes; i++) {
		items.push(props.children(i))
	}
	return <div>{items}</div>
}

function ListOfTenThings() {
	return (
		<Repeat numTimes={10}>
		  {(index) => <div key={index}>This is item {index} in the list</div>}
		</Repeat>
	)
}

ReactDOM.render(
  	<ListOfTenThings />,
  	document.getElementById('root1')
)
*/

/*function BoilingVerdict(props) {

	if (props.celsius >= 100) {
		return <p>水会烧开</p>
	}

	return <p>水不会烧开</p>
}

class Calculator extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {temperature: ''}
	}

	handleChange(e) {
		this.setState({temperature: e.target.value})
	}

	render() {
		const temperature = this.state.temperature

		return (
			<fieldset>
				<legend>输入一个摄氏温度</legend>
				<input value={temperature} onChange={this.handleChange} />
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</fieldset>
		)
	}
}

ReactDOM.render(
  	<Calculator />,
  	document.getElementById('root1')
)*/

/*const scaleNames = {
  	c: 'Celsius',
  	f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
  	return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
  	return celsius * 9 / 5 + 32
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature)

	if (Number.isNaN(input)) {
		return ''
	}
	const output = convert(input)
	const rounded = Math.round(output * 1000) / 1000

	return rounded.toString()
}

function BoilingVerdict(props) {
  	if (props.celsius >= 100) {
    	return <p>The water would boil.</p>
  	}
  	return <p>The water would not boil.</p>
}

class TemperatureInput extends Component{
  	constructor(props) {
    	super(props)
    	this.handleChange = this.handleChange.bind(this)
  	}

	handleChange(e){
		this.props.onTemperatureChange(e.target.value)
	}

	render (){
		const temperature = this.props.temperature
		const scale = this.props.scale

		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input value={temperature} onChange={this.handleChange}/>
			</fieldset>
		)
	}
}

class Calculator extends Component{
	constructor(props){
		super(props)

		this.state = {scale: 'c', temperature: ''}

		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
	}

	handleCelsiusChange(temperature){
		this.setState({scale: 'c', temperature})
	}

	handleFahrenheitChange(temperature){
		this.setState({scale: 'f', temperature})
	}

	render(){
		const scale = this.state.scale
		const temperature = this.state.temperature
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

		return(
			<div>
				<TemperatureInput
					scale='c'
					temperature ={celsius}
					onTemperatureChange = {this.handleCelsiusChange}
				/>
				<TemperatureInput
					scale='f'
					temperature ={fahrenheit}
					onTemperatureChange = {this.handleFahrenheitChange}
				/>
				<BoilingVerdict celsius={parseFloat(celsius)}/>
			</div>
		)
	}
}

ReactDOM.render(
  	<Calculator />,
  	document.getElementById('root1')
)*/


/*class ProductCategoryRow extends React.Component {
  	render() {
    	return <tr><th colSpan="2">{this.props.category}</th></tr>
  	}
}

class ProductRow extends React.Component {
	render() {
		let name = this.props.product.stocked ?
		this.props.product.name :
		<span style={{color: 'red'}}>
			{this.props.product.name}
		</span>

		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		)
	}
}

class ProductTable extends React.Component {
	render() {
		let rows = []
		let lastCategory = null

		console.log(this.props.inStockOnly)
		this.props.products.forEach(product => {
		  	if (product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 || !product.stocked && this.props.inStockOnly) {
		    	return
		  	}
		  	if (product.category !== lastCategory) {
		    	rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
		  	}
		  	rows.push(<ProductRow product={product} key={product.name} />)
		  	lastCategory = product.category
		})
		return (
			<table>
				<thead>
				  	<tr>
				    	<th>Name</th>
				    	<th>Price</th>
				  	</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

class SearchBar extends React.Component {
  	constructor(props) {
    	super(props)
    	this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this)
    	this.handleInStockInputChange = this.handleInStockInputChange.bind(this)
  	}

  	handleFilterTextInputChange(e) {
    	this.props.onFilterTextInput(e.target.value)
  	}

  	handleInStockInputChange(e) {
    	this.props.onInStockInput(e.target.checked)
  	}

  	render() {
    	return (
      		<form>
		        <input
		          	type="text"
		          	placeholder="Search..."
		          	value={this.props.filterText}
		          	onChange={this.handleFilterTextInputChange}
		        />
		        <p>
		          	<input
		            	type="checkbox"
		            	checked={this.props.inStockOnly}
		            	onChange={this.handleInStockInputChange}
		          	/>
		          	{' '}
		          	Only show products in stock
		        </p>
      		</form>
    	)
  	}
}

class FilterableProductTable extends React.Component {
	constructor(props) {
	super(props)
	this.state = {
		filterText: '',
		inStockOnly: false
	}

		this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
		this.handleInStockInput = this.handleInStockInput.bind(this)
	}

	handleFilterTextInput(filterText) {
		this.setState({
		  	filterText: filterText
		})
	}

	handleInStockInput(inStockOnly) {
		this.setState({
		  	inStockOnly: inStockOnly
		})
	}

  render() {
	    return (
			<div>
				<SearchBar
				  	filterText={this.state.filterText}
				  	inStockOnly={this.state.inStockOnly}
				  	onFilterTextInput={this.handleFilterTextInput}
				  	onInStockInput={this.handleInStockInput}
				/>
				<ProductTable
				  	products={this.props.products}
				  	filterText={this.state.filterText}
				  	inStockOnly={this.state.inStockOnly}
				/>
			</div>
	    )
  	}
}


let PRODUCTS = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]


ReactDOM.render(
	<FilterableProductTable products={PRODUCTS} />,
	document.getElementById('root1')
)*/

/*class CustomTextInput extends Component{
	constructor(props) {
	  	super(props)
	  	this.focus = this.focus.bind(this)
	}

	focus(){
		console.log(this)
		this.textInput.focus()
	}

	render(){
		return(
			<div>
			  	<input
			    	type="text"
			    	ref = {(input) => {this.textInput = input}}
			    />
			  	<input
			    	type="button"
			    	value="Focus the text input"
			    	onClick={this.focus}
			  	/>
			</div>
		)
	}

}

ReactDOM.render(
	<CustomTextInput/>,
	document.getElementById('root1')
)
*/

/*class Search extends Component{

	constructor(props){
		super(props)
		this.seachTo = this.seachTo.bind(this)
	}

	seachTo(e){
		let textInput = this.refs.textInput
		console.log(textInput.value)
	}

	render(){

		let searchtop = {
			__html: '<span style="color:red;font-size:20px;">高级搜索</span>'
		}

		return(
			<div>
				<input
			    	type="text"
			    	ref = "textInput"
			    />
				<span onClick = {this.seachTo} data-abc="bbb">搜索</span>
				<span dangerouslySetInnerHTML={searchtop}></span>
			</div>
		)
	}
} 

ReactDOM.render(
	<Search/>,
	document.getElementById('root1')
)*/

/*class Inputs extends Component{
	constructor(props){
		super(props)
		this.state = {
			texts : 2
		}
		this.handlechange = this.handlechange.bind(this)
	}

	handlechange(e){
		this.setState({
			texts : e.target.value
		})
	}

	render(){
		let tools = []

		for( let i = 0; i < 11; i++ ){
			tools.push(<div key={i}> <input type="text" value={this.state.texts} onChange={this.handlechange}/></div>)
		}

		return (<div>{tools}</div>) 
	}
}

ReactDOM.render(
	<Inputs/>,
	document.getElementById('root1')
)
*/



if(module.hot){
	module.hot.accept()
}

