## Questain : 
### What is JSX, and why is it used?
- ***JSX*** (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like structures directly within your JavaScript code. It is not HTML
--- 
### What is the difference between State and Props?
**State** is a built-in object that stores data about the component's current situation. It is mutable and managed within the component.
- **Props** (short for properties) are read-only inputs passed from parent to child components. They allow data to flow down the component tree and help make components reusable.

--- 
### What is the useState hook, and how does it work?
The `useState` hook is a React function that lets you add state to functional components. It returns an array with two elements:
1. The current state value.
2. A function to update that state.

Example:
```jsx
const [count, setCount] = useState(0);
```

--- 
### How can you share state between components in React?
Sharing state between components in React can be done in several ways:

- **Lifting State Up**: Move the shared state to the nearest common ancestor and pass it down via props.
- **React Context API**: Create a context to provide and consume state across multiple components without prop drilling.
- **Custom Hooks**: Encapsulate shared logic in reusable hooks that can be used across components.
- **State Management Libraries**: Use tools like Redux, MobX, Zustand, or Recoil for global state management in larger applications.

---

### How is event handling done in React?
Event handling in React is done using camelCase syntax and passing functions as event handlers:

- React uses **synthetic events**, which wrap native browser events for cross-browser compatibility.
- Event handlers are passed as props like `onClick`, `onChange`, `onSubmit`, etc.

Example:
```jsx
function handleClick() {
  alert('Button clicked!');
}

return <button onClick={handleClick}>Click Me</button>;
```
--- 



private git link : 
     https://github.com/Sihambintahabib-ux/assairment-7.git 
<br>
private live link : 
<br>
ph-git link : https://github.com/programming-hero-web-course-4/b12a7-customer-support-zone-Sihambintahabib-ux.git
<br>
surge live link : https://sihambintahabib-assairment7.surge.sh/
<br>

CODE : 
```
ph-git link : https://github.com/programming-hero-web-course-4/b12a7-customer-support-zone-Sihambintahabib-ux.git

surge live link : https://sihambintahabib-assairment7.surge.sh/

[
Code for counting ass7 on 50 marks:AsS7&Marks_50*12/10D
]

```



<!-- app> ordercontainer > ordercard cookingitems readyitems , handlecooking  remaining

app > cardcustomerticket + card   issue issueresolve handleissueresolve remaining -->