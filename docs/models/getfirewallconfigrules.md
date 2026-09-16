# GetFirewallConfigRules


## Supported Types

### `models.Rules1`

```typescript
const value: models.Rules1 = {
  action: {},
  active: false,
  conditionGroup: [],
  id: "<id>",
  name: "<value>",
  valid: true,
  validationErrors: "<value>",
};
```

### `models.Rules2`

```typescript
const value: models.Rules2 = {
  action: {},
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  id: "<id>",
  name: "<value>",
  valid: false,
  validationErrors: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

