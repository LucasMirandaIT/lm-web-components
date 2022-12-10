# lm-login



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type    | Default     |
| -------- | --------- | ----------- | ------- | ----------- |
| `form`   | --        | Props below | `any[]` | `undefined` |


## Events

| Event         | Description | Type                   |
| ------------- | ----------- | ---------------------- |
| `handleLogin` |             | `CustomEvent<unknown>` |


## Dependencies

### Used by

 - [login-container](..)

### Depends on

- [outlined-input](../../outlined-input)
- [password-outlined-input](../../password-outlined-input)
- [lm-button](../../lm-button)

### Graph
```mermaid
graph TD;
  lm-login --> outlined-input
  lm-login --> password-outlined-input
  lm-login --> lm-button
  login-container --> lm-login
  style lm-login fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
