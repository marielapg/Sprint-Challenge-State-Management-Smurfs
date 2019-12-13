1. What problem does the context API help solve?
provides a way to pass data through the component tree without having to pass props down manually thru every level of tree.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions: helps the app to change the state and needs to sends data to the store
reducers: data to the state for actions
store: where the globally loaded the state 
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state allows all components to the state and component state is local it passes thru the props to the children
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
thunk is a middleware that allows to correct actions that returns functions. It allows us to dispatch if certain conditions are met
1. What is your favorite state management system you've learned and this sprint? Please explain why!
redux is easier to use and can pass state where its needed and very power tool to use.