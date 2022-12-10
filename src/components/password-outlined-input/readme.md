# outlined-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type     | Default         |
| ------------- | ------------- | ----------- | -------- | --------------- |
| `placeholder` | `placeholder` |             | `string` | `'Placeholder'` |
| `type`        | `type`        |             | `string` | `'password'`    |
| `value`       | `value`       |             | `string` | `''`            |


## Events

| Event         | Description | Type                  |
| ------------- | ----------- | --------------------- |
| `changeInput` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [lm-login](../auth-container/login)
 - [lm-register](../auth-container/register)

### Graph
```mermaid
graph TD;
  lm-login --> password-outlined-input
  lm-register --> password-outlined-input
  style password-outlined-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
