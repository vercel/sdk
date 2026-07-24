# UpdateFirewallConfigRequestBody


## Supported Types

### `models.UpdateFirewallConfigRequestBody1`

```typescript
const value: models.UpdateFirewallConfigRequestBody1 = {
  action: "firewallEnabled",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [],
  },
};
```

### `models.UpdateFirewallConfigRequestBody2`

```typescript
const value: models.UpdateFirewallConfigRequestBody2 = {
  action: "rules.insert",
  id: "<id>",
  value: {
    name: "<value>",
    active: true,
    conditionGroup: [],
  },
};
```

### `models.UpdateFirewallConfigRequestBody3`

```typescript
const value: models.UpdateFirewallConfigRequestBody3 = {
  action: "rules.update",
  id: "<id>",
};
```

### `models.UpdateFirewallConfigRequestBody4`

```typescript
const value: models.UpdateFirewallConfigRequestBody4 = {
  action: "rules.remove",
  id: "<id>",
  value: {
    action: "log",
  },
};
```

### `models.UpdateFirewallConfigRequestBody5`

```typescript
const value: models.UpdateFirewallConfigRequestBody5 = {
  action: "rules.priority",
  id: "<id>",
};
```

### `models.UpdateFirewallConfigRequestBody6`

```typescript
const value: models.UpdateFirewallConfigRequestBody6 = {
  action: "crs.update",
  value: true,
};
```

### `models.UpdateFirewallConfigRequestBody7`

```typescript
const value: models.UpdateFirewallConfigRequestBody7 = {
  action: "crs.disable",
  value: null,
};
```

### `models.UpdateFirewallConfigRequestBody8`

```typescript
const value: models.UpdateFirewallConfigRequestBody8 = {
  action: "ip.insert",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [],
      },
    ],
    action: {},
  },
};
```

### `models.UpdateFirewallConfigRequestBody9`

```typescript
const value: models.UpdateFirewallConfigRequestBody9 = {
  action: "ip.update",
  id: "<id>",
};
```

### `models.UpdateFirewallConfigRequestBody10`

```typescript
const value: models.UpdateFirewallConfigRequestBody10 = {
  action: "ip.remove",
  id: "<id>",
  value: "<value>",
};
```

### `models.RequestBody11`

```typescript
const value: models.RequestBody11 = {
  action: "managedRules.update",
  id: "sf",
  value: {
    active: true,
    action: "deny",
  },
};
```

### `models.RequestBody12`

```typescript
const value: models.RequestBody12 = {
  action: "<value>",
};
```

### `models.RequestBody13`

```typescript
const value: models.RequestBody13 = {
  action: "<value>",
  value: {
    hostname: "noted-obligation.org",
    ip: "cbea:c3b9:7d99:1ef2:9455:961e:ecaf:bfdc",
    action: "bypass",
  },
};
```

### `models.RequestBody14`

```typescript
const value: models.RequestBody14 = {
  action: "<value>",
  id: "<id>",
  value: {
    hostname: "hospitable-scorpion.net",
    ip: "7ff6:9f2f:212d:87ac:4edf:dd9a:ed78:89df",
    action: "log",
  },
};
```

### `models.RequestBody15`

```typescript
const value: models.RequestBody15 = {
  action: "<value>",
  id: "<id>",
};
```

### `models.RequestBody16`

```typescript
const value: models.RequestBody16 = {
  action: "<value>",
  id: "owasp",
  value: {
    active: false,
  },
};
```

### `models.RequestBody17`

```typescript
const value: models.RequestBody17 = {
  action: "<value>",
  id: "owasp",
  value: {},
};
```

### `models.RequestBody18`

```typescript
const value: models.RequestBody18 = {
  action: "<value>",
  value: true,
};
```

### `models.RequestBody19`

```typescript
const value: models.RequestBody19 = {
  action: "<value>",
  value: "<value>",
};
```

