# GetSecurityFirewallConfigRules


## Supported Types

### `models.GetSecurityFirewallConfigRulesApiSecurityResponse1`

```typescript
const value: models.GetSecurityFirewallConfigRulesApiSecurityResponse1 = {
  id: "<id>",
  name: "<value>",
  active: true,
  conditionGroup: [],
  action: {},
  valid: true,
  validationErrors: "<value>",
};
```

### `models.GetSecurityFirewallConfigRulesApiSecurityResponse2`

```typescript
const value: models.GetSecurityFirewallConfigRulesApiSecurityResponse2 = {
  id: "<id>",
  name: "<value>",
  active: false,
  conditionGroup: [
    {
      conditions: [
        {
          type: "ja4_digest",
          op: "pre",
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

