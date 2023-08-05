# Challenge 4: Performance Optimization

Instructions: 

Optimize the performance of an existing React app that renders a large list of data. The app currently renders a list of items using the `map` function, and the list can become quite long. Use React's built-in mechanisms (e.g., `React.memo`, `useMemo`, `useCallback`, etc.) to reduce unnecessary re-renders and improve overall app performance. 

 

Specifications: 

- Use React's `React.memo` to memoize functional components and avoid re-renders when the component's props have not changed. 

- Use React's `useMemo` to memoize expensive calculations or computations that are not dependent on changing props. 

- Use React's `useCallback` to memoize event handler functions to prevent unnecessary re-creations of those functions on each render. 

- Verify the performance improvement using browser developer tools or other profiling tools. 


## Result


I optimized my app using `memo` and `useCallback` to reduce unnecesarry re-renders of other components when updating products.
I haven't used the `useMemo` as my app doesn't have repetitive task or computition inside component.

[Link to the app repo](https://github.com/lioncio1229/product-manager-frontend)


Here's the example optimization when clicking the edit menu of the dashboard.

### Before

![Alt text](./Screenshot%202023-08-05%20205536.png)


### After

![Alt text](./Screenshot%202023-08-05%20205529.png)



You can checkout my commit [here](https://github.com/lioncio1229/product-manager-frontend/commit/3d51b95f79ea716adf5a9bc9e91eec54ae77b6a2)
