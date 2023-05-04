import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-white p-5 container rounded mx-auto mt-5'>
                <h2 className='fw-bold fs-4'> 1. Differences between uncontrolled and controlled components.</h2>
                <p className='fw-semibold mt-3 fs-5'>In the context of building user interfaces in web development, there are two types of components: controlled and uncontrolled.
                    <br />
                    An uncontrolled component is a component that manages its own state internally. When a user interacts with the component, such as by typing into a text input, the component's state is updated without any intervention from the parent component. The parent component has no direct control over the state of the child component.
                    <br />
                    On the other hand, a controlled component is a component that is fully controlled by the parent component. The parent component manages the state of the child component and passes it down as props. When the child component needs to update its state, it sends an event to the parent component, which then updates the child component's state accordingly. This way, the parent component has full control over the child component's state.
                    <br />
                    The main difference between the two types of components is the level of control that the parent component has over the child component's state. Uncontrolled components are easier to set up and require less code, but they can be harder to manage and debug as the application grows in complexity. Controlled components provide more control and consistency, but require more code and can be more complex to set up.</p>
            </div>
            <div className='bg-white p-5 container rounded mx-auto mt-5'>
                <h2 className='fw-bold fs-4'>2. How to validate React props using PropTypes.</h2>
                <ol className='fw-semibold mt-3 fs-5'>
                    <li>Install the prop-types library using npm or yarn.</li>
                    <li>Import the PropTypes module into your component.</li>
                    <li>Add a propTypes object to your component and define the type of each prop using PropTypes.</li>
                    <li>Use the .isRequired method to ensure that the prop is passed to the component and is not undefined.</li>
                    <li>When a prop is passed to the component with an incorrect data type, PropTypes will provide a warning in the browser console.</li>
                </ol>
                <p className='fw-semibold mt-3 fs-5'>
                    By following these steps, you can ensure that your React components receive the correct data types for their props, which can help catch errors early in the development process and improve the overall quality of your code.
                </p>
            </div>
            <div className='bg-white p-5 container rounded mx-auto mt-5'>
                <h2 className='fw-bold fs-4'>3. Difference between nodejs and express js.</h2>
                <ol className='fw-semibold mt-3 fs-5'>
                    <li>Node.js is a runtime environment for executing JavaScript code, while Express.js is a web framework for building server-side applications.</li>
                    <li>Node.js provides a set of built-in libraries for performing various operations, while Express.js provides a set of tools and features for building web applications.</li>
                    <li>Node.js is low-level and provides basic functionality, while Express.js provides a higher-level abstraction for building web applications.</li>
                    <li>Node.js can be used without a web framework, while Express.js is specifically designed for building web applications.</li>
                    <li>Node.js can handle I/O operations efficiently, while Express.js simplifies the process of building RESTful APIs and handling HTTP requests and responses.</li>
                </ol>
                <p className='fw-semibold mt-3 fs-5'>
                    In summary, Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web framework for building server-side applications that can handle HTTP requests and responses. Express.js is built on top of Node.js and provides a higher-level abstraction for building web applications.
                </p>
            </div>
            <div className='bg-white p-5 container rounded mx-auto mt-5'>
                <h2 className='fw-bold fs-4'>4. What is a custom hook, and why will you create a custom hook?</h2>
                <ol className='fw-semibold mt-3 fs-5'>
                    <li>A custom hook is a JavaScript function in React that encapsulates complex logic and provides a reusable interface for managing state and side effects.</li>
                    <li>Custom hooks can be created to abstract complex logic, provide a simple interface for state management, and keep your code organized and maintainable.</li>
                    <li>Custom hooks can be shared across multiple components and even multiple applications.</li>
                    <li>Examples of custom hooks include useFetch for managing data fetching and caching, useLocalStorage for storing and retrieving data in local storage, and useTheme for managing the application's theme.</li>
                </ol>
                <p className='fw-semibold mt-3 fs-5'>
                    In summary, custom hooks are a powerful tool for building reusable and maintainable code in React, and can help you abstract complex logic, provide a simple interface for state management, and keep your code organized and easy to read.
                </p>
            </div>
        </div>
    );
};

export default Blogs;