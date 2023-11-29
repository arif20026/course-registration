# React + Vite

# 3 features of this project:

- You can select a course by clicking "Select" button
- You can add courses up to total 20 credit
- You can add a course only once

# How I managed the state in my assignment

In React, state management refers to the process of managing the state (data) of a React application in a way that makes it easy to handle and update.  Two of them is discussed below:



- Local Component State:
React components can have local state managed using the useState hook. This is suitable for managing state that is local to a specific component and doesn't need to be shared with other components.

I used useState hook to for managing submit button and cart section.



- Props:


I used card,handleAddToCart,handleAddCredit etc PropTypes to pass data from parent component to a child component.






This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


