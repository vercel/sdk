# GetFirewallConfigRules


## Supported Types

### `models.Rules1`

```typescript
const value: models.Rules1 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [],
  action: {},
  valid: true,
  validationErrors: "<value>",
};
```

### `models.Rules2`

```typescript
const value: models.Rules2 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  action: {},
  valid: false,
  validationErrors: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

