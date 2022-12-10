# my-component



<!-- Auto Generated Below -->


## Events

| Event         | Description | Type                   |
| ------------- | ----------- | ---------------------- |
| `handleLogin` | Props below | `CustomEvent<unknown>` |


## Dependencies

### Depends on

- [lm-tabs](../lm-tabs)
- [lm-login](login)
- [lm-register](register)

### Graph
```mermaid
graph TD;
  login-container --> lm-tabs
  login-container --> lm-login
  login-container --> lm-register
  lm-login --> outlined-input
  lm-login --> password-outlined-input
  lm-login --> lm-button
  lm-register --> outlined-input
  lm-register --> password-outlined-input
  lm-register --> lm-button
  style login-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
