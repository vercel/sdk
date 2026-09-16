# GetSecurityFirewallConfigSecurityResponseRules


## Supported Types

### `models.GetSecurityFirewallConfigRulesSecurity1`

```typescript
const value: models.GetSecurityFirewallConfigRulesSecurity1 = {
  action: {},
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          op: "eq",
          type: "ja3_digest",
        },
      ],
    },
  ],
  id: "<id>",
  name: "<value>",
  valid: true,
  validationErrors: "<value>",
};
```

### `models.GetSecurityFirewallConfigRulesSecurity2`

```typescript
const value: models.GetSecurityFirewallConfigRulesSecurity2 = {
  action: {},
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          op: "lte",
          type: "environment",
        },
      ],
    },
  ],
  id: "<id>",
  name: "<value>",
  valid: false,
  validationErrors: [
    "<value 1>",
  ],
};
```

