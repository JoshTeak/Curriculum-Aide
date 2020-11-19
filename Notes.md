~Conditional logic~
Lecture 12:



~Redux Notes~
Lecture 84:
Props is a way to pass information from a parent to a child.
We want to avoid passing props down a long chain of compoenents which is where redux comes in.
Redux allows each component in the application to access/change data on the redux store.

Lecture 86:
Actions are how we change the redux store.
Actions are objects that get sent to the store.
'dispatch' allows us to send off an action object. You can access action variables using action.variableName.
createStore gets called at the start and each time a dispatch is called. This means the reducers are updated?
The reducers should never change the state.
The state is the current array of that variable?

Expensify application:
AddExpensePage calls dispatch(startAddExpense(expense)) // this updates the action object to what is returned from startAddExpense which passes on the expense.
expensesReducer then returns the state and the alteration performed by action.
The store then updates its variables to the values returned from he reducers.
props is passed from a parent component to a child component and is read only.

Lecture 87: 
store.subscribe() can be used to see when changes to the store occur.

Lecture 88:
Destructuring is an ES6 function.
Object and array destructuring are possible and should be considered when using information from an array or object.

Lecture 90:
Action genderators are functions that return action objects
Good example of destructuring with default values at 9:19

Lecture 91: Reducers
Actions describe the fact that something happened, but don't specify how the application's state changes in response. This is the job of the reducers.
Reducers are pure functions (output depends completely on the input).
Never change state or action.

Lecture 92: 
createStore calls the reducers

Lecture 93: 
dispatch action is dispatched to all reducers
ES6 Spread operator [...array] // The spread operator doesnt change the original array (great to use in reducers)
const variable = store.dispatch // store.dispatch does return action object from the call to dispatch
state.filter is a function that takes a function. If the function returns true the item will be kept in the array. If false it will be removed and the resulting array- -will be returned. state.filter does not alter state.

Lecture 94:
ES6 Spread operator can be used for objects aswell. Requires dependency "babel-plugin-transform-object-rest-spread"
state.map((eachArrayValue) => {return eachArrayValue after edit}) // state.map alters the state array and creates a value called eachArrayValue for each value in the- -array
10:38 shows how to use the spread operator to replace altered values within the object.

Lecture 96:
Filtering redux data (Selectors)		
Working with timestamps at 5:52
Using the includes() function and demonstrating a non-case sensitive search at 15.10

Lecture 97
sort example // compare function at 0:48									

Lecture 100:
Higher Order Component (HOC) - A component that renders another component 
Example at 8:11

Lecture 101:
import { Provider } from 'react-redux'; // provides the store to all components within the provider section.
import { connect } from 'react-redux'; // connect()() the first argument takes in a function which returns an object (the object consists of key value pairs). The- -stores state gets passed into the object as the functions first argument. What the function returns will now be props in the second argument of connect.
mapStateToProps it is a function that maps the stores state to components props.

Lecture 102:
Uses selectors at 7:51 					

Lecture 103:
Creating a list filters file 	
interacting with a text input to filter list		

Lecture 104:
Dropdown picking 			TODO revisit

Lecture 105:
Regular experessions 16:00

Lecture 106: 
Setting up a date picker

Lecture 108:
Using link 2:17
Array find method 5:02

Lecture 109:
Dev Tools 					TODO revisit

Lecture 110:
Filtering by Date




Lecture 136:
heroku login and create example at 3:24






~Database~
Lecture 143:
database.ref().set({anObject})
database.red('keyName').set(keyValue)
more examples at 9:23

Lecture 144:
Promises

Lecture 145:
.set returns a promise
example of this at 9:20
use .then and .catch when writing to firebase

Lecture 146:
Removing data from firebase
example at 1:30

Lecture 147:
Using update example at 0:55
update a key to null when you want to delete it.
updating an object individual key example at 5:27

Lecture 148:
Fetching data from Firebase
.once at 1:45
in the .then call you have access to snapshot. snapshot allows access to the data
snapshot.val() will return the whole database
.on example at 5:06. .on subscribes to changes of that data
.off() unsubscribes from all subscriptions
to unsubscribe from one subscription 12:30

Lecture 149:
prefered structure of the database
using .push to add to the database

Lecture 150:
using .forEach example at 3:10
using .key  
child_removed example at 8:55	// runs everytime a child is removed
child_added example at 12:30

Lecture 152:
using Thunk 6:20
startAddExpense
asynchronous actions

Lecture 153:
testing actions          //TODO revisit

Lecture 154:
testing actions          //TODO revisit

Lecture 155:
this is about setting up the test database

Lecture 156:
set up environment variables on env
Heroku config example at 1:00