# GetSecurityFirewallConfigRules


## Supported Types

### `models.GetSecurityFirewallConfigRulesSecurityResponse1`

```typescript
const value: models.GetSecurityFirewallConfigRulesSecurityResponse1 = {
  action: {},
  active: true,
  conditionGroup: [
    {
      conditions: [],
    },
  ],
  id: "<id>",
  name: "<value>",
  valid: true,
  validationErrors: "<value>",
};
```

### `models.GetSecurityFirewallConfigRulesSecurityResponse2`

```typescript
const value: models.GetSecurityFirewallConfigRulesSecurityResponse2 = {
  action: {},
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          op: "re",
          type: "query",
        },
      ],
    },
  ],
  id: "<id>",
  name: "<value>",
  valid: false,
  validationErrors: [],
};
```

