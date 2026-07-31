# GetSecurityFirewallConfigRules


## Supported Types

### `models.GetSecurityFirewallConfigRulesSecurityResponse1`

```typescript
const value: models.GetSecurityFirewallConfigRulesSecurityResponse1 = {
  id: "<id>",
  name: "<value>",
  active: true,
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

### `models.GetSecurityFirewallConfigRulesSecurityResponse2`

```typescript
const value: models.GetSecurityFirewallConfigRulesSecurityResponse2 = {
  id: "<id>",
  name: "<value>",
  active: true,
  conditionGroup: [
    {
      conditions: [
        {
          type: "ruleset",
          op: "nex",
        },
      ],
    },
  ],
  action: {},
  valid: false,
  validationErrors: [],
};
```

