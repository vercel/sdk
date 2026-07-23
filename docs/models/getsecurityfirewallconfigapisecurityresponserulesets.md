# GetSecurityFirewallConfigApiSecurityResponseRulesets


## Supported Types

### `models.GetSecurityFirewallConfigRulesetsApiSecurity1[]`

```typescript
const value: models.GetSecurityFirewallConfigRulesetsApiSecurity1[] = [
  {
    id: "<id>",
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "header",
            op: "lt",
          },
        ],
      },
    ],
  },
];
```

### `{ [k: string]: models.GetSecurityFirewallConfigRulesetsApiSecurity2 }`

```typescript
const value: {
  [k: string]: models.GetSecurityFirewallConfigRulesetsApiSecurity2;
} = {};
```

