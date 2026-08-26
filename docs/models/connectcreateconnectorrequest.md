# ConnectCreateConnectorRequest

Create a connector with full provider configuration or with a known service connection method.


## Supported Types

### `models.FullConfiguration`

```typescript
const value: models.FullConfiguration = {
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  type: "<value>",
};
```

### `models.PresetConfiguration`

```typescript
const value: models.PresetConfiguration = {
  data: {},
  service: "<value>",
  connectionMethod: "<value>",
};
```

