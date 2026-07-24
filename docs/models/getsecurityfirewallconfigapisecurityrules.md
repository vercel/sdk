# GetSecurityFirewallConfigApiSecurityRules


## Supported Types

### `models.GetSecurityFirewallConfigRules1`

```typescript
const value: models.GetSecurityFirewallConfigRules1 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  action: {},
  valid: true,
  validationErrors: "<value>",
};
```

### `models.GetSecurityFirewallConfigRules2`

```typescript
const value: models.GetSecurityFirewallConfigRules2 = {
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

