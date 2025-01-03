# UpdateFirewallConfigRequestBody


## Supported Types

### `models.UpdateFirewallConfigRequestBody1`

```typescript
const value: models.UpdateFirewallConfigRequestBody1 = {
  action: "firewallEnabled",
  value: false,
};
```

### `models.UpdateFirewallConfigRequestBody2`

```typescript
const value: models.UpdateFirewallConfigRequestBody2 = {
  action: "rules.insert",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "geo_country",
            op: "neq",
          },
        ],
      },
    ],
    action: {},
  },
};
```

### `models.UpdateFirewallConfigRequestBody3`

```typescript
const value: models.UpdateFirewallConfigRequestBody3 = {
  action: "rules.update",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "geo_continent",
            op: "gte",
          },
        ],
      },
    ],
    action: {},
  },
};
```

### `models.UpdateFirewallConfigRequestBody4`

```typescript
const value: models.UpdateFirewallConfigRequestBody4 = {
  action: "rules.remove",
  id: "<id>",
};
```

### `models.UpdateFirewallConfigRequestBody5`

```typescript
const value: models.UpdateFirewallConfigRequestBody5 = {
  action: "rules.priority",
  id: "<id>",
  value: 2355.67,
};
```

### `models.RequestBody6`

```typescript
const value: models.RequestBody6 = {
  action: "crs.update",
  id: "sqli",
  value: {
    active: false,
    action: "log",
  },
};
```

### `models.RequestBody7`

```typescript
const value: models.RequestBody7 = {
  action: "crs.disable",
};
```

### `models.RequestBody8`

```typescript
const value: models.RequestBody8 = {
  action: "ip.insert",
  value: {
    hostname: "well-off-distinction.com",
    ip: "66.193.187.171",
    action: "deny",
  },
};
```

### `models.RequestBody9`

```typescript
const value: models.RequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "total-vanadyl.name",
    ip: "b666:4dca:8e4c:14de:cdfa:ac2f:b3f7:ddb2",
    action: "bypass",
  },
};
```

### `models.RequestBody10`

```typescript
const value: models.RequestBody10 = {
  action: "ip.remove",
  id: "<id>",
};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {
  action: "managedRules.update",
  id: "owasp",
  value: {
    active: false,
  },
};
```

