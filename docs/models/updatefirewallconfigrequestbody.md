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
    conditionGroup: [],
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
    conditionGroup: [],
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
  value: 5203.13,
};
```

### `models.UpdateFirewallConfigRequestBody6`

```typescript
const value: models.UpdateFirewallConfigRequestBody6 = {
  action: "crs.update",
  id: "sd",
  value: {
    active: true,
    action: "deny",
  },
};
```

### `models.UpdateFirewallConfigRequestBody7`

```typescript
const value: models.UpdateFirewallConfigRequestBody7 = {
  action: "crs.disable",
};
```

### `models.UpdateFirewallConfigRequestBody8`

```typescript
const value: models.UpdateFirewallConfigRequestBody8 = {
  action: "ip.insert",
  value: {
    hostname: "pink-plugin.net",
    ip: "187.206.27.119",
    action: "bypass",
  },
};
```

### `models.UpdateFirewallConfigRequestBody9`

```typescript
const value: models.UpdateFirewallConfigRequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "rectangular-chainstay.com",
    ip: "a8d7:3bba:f2cf:e55e:efad:639f:e2f6:5aab",
    action: "challenge",
  },
};
```

### `models.UpdateFirewallConfigRequestBody10`

```typescript
const value: models.UpdateFirewallConfigRequestBody10 = {
  action: "ip.remove",
  id: "<id>",
};
```

### `models.RequestBody11`

```typescript
const value: models.RequestBody11 = {
  action: "managedRules.update",
  id: "owasp",
  value: {
    active: true,
  },
};
```

### `models.RequestBody12`

```typescript
const value: models.RequestBody12 = {
  action: "<value>",
  id: "vercel_ruleset",
  value: {},
};
```

### `models.RequestBody13`

```typescript
const value: models.RequestBody13 = {
  action: "<value>",
  value: false,
};
```

