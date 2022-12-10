# lm-button



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `color`  | `color`   |             | `string` | `'primary'` |
| `type`   | `type`    |             | `string` | `''`        |


## Events

| Event         | Description | Type                   |
| ------------- | ----------- | ---------------------- |
| `handleClick` |             | `CustomEvent<unknown>` |


## Dependencies

### Used by

 - [lm-dialog](../lm-dialog)
 - [lm-login](../auth-container/login)
 - [lm-register](../auth-container/register)

### Graph
```mermaid
graph TD;
  lm-dialog --> lm-button
  lm-login --> lm-button
  lm-register --> lm-button
  style lm-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
