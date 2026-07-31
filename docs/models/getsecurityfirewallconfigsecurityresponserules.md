# GetSecurityFirewallConfigSecurityResponseRules


## Supported Types

### `models.GetSecurityFirewallConfigRulesSecurity1`

```typescript
const value: models.GetSecurityFirewallConfigRulesSecurity1 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "query",
          op: "ninc",
        },
      ],
    },
  ],
  action: {},
  valid: true,
  validationErrors: null,
};
```

### `models.GetSecurityFirewallConfigRulesSecurity2`

```typescript
const value: models.GetSecurityFirewallConfigRulesSecurity2 = {
  id: "<id>",
  name: "<value>",
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          type: "ja3_digest",
          op: "gt",
        },
      ],
    },
  ],
  action: {},
  valid: false,
  validationErrors: [
    "<value 1>",
  ],
};
```

