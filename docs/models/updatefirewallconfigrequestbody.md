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
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [],
  },
};
```

### `models.UpdateFirewallConfigRequestBody5`

```typescript
const value: models.UpdateFirewallConfigRequestBody5 = {
  action: "rules.priority",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [],
  },
};
```

### `models.UpdateFirewallConfigRequestBody6`

```typescript
const value: models.UpdateFirewallConfigRequestBody6 = {
  action: "crs.update",
  id: "<id>",
};
```

### `models.UpdateFirewallConfigRequestBody7`

```typescript
const value: models.UpdateFirewallConfigRequestBody7 = {
  action: "crs.disable",
  id: null,
  value: {
    action: "deny",
  },
};
```

### `models.UpdateFirewallConfigRequestBody8`

```typescript
const value: models.UpdateFirewallConfigRequestBody8 = {
  action: "ip.insert",
  id: "<id>",
};
```

### `models.UpdateFirewallConfigRequestBody9`

```typescript
const value: models.UpdateFirewallConfigRequestBody9 = {
  action: "ip.update",
  value: false,
};
```

### `models.UpdateFirewallConfigRequestBody10`

```typescript
const value: models.UpdateFirewallConfigRequestBody10 = {
  action: "ip.remove",
  value: {
    name: "<value>",
    active: true,
    conditionGroup: [],
    action: {},
  },
};
```

### `models.RequestBody11`

```typescript
const value: models.RequestBody11 = {
  action: "managedRules.update",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [],
    action: {},
  },
};
```

### `models.RequestBody12`

```typescript
const value: models.RequestBody12 = {
  action: "<value>",
  id: "<id>",
};
```

### `models.RequestBody13`

```typescript
const value: models.RequestBody13 = {
  action: "<value>",
  id: "<id>",
  value: 5596.65,
};
```

### `models.RequestBody14`

```typescript
const value: models.RequestBody14 = {
  action: "<value>",
  id: "rce",
  value: {
    active: false,
    action: "log",
  },
};
```

### `models.RequestBody15`

```typescript
const value: models.RequestBody15 = {
  action: "<value>",
};
```

### `models.RequestBody16`

```typescript
const value: models.RequestBody16 = {
  action: "<value>",
  value: {
    hostname: "wrong-switchboard.name",
    ip: "172.225.205.145",
    action: "bypass",
  },
};
```

### `models.RequestBody17`

```typescript
const value: models.RequestBody17 = {
  action: "<value>",
  id: "<id>",
  value: {
    hostname: "wavy-bob.org",
    ip: "b1f6:cbcb:1f8a:c3d0:9461:4e6f:e6dd:d8e4",
    action: "bypass",
  },
};
```

### `models.RequestBody18`

```typescript
const value: models.RequestBody18 = {
  action: "<value>",
  id: "<id>",
};
```

### `models.RequestBody19`

```typescript
const value: models.RequestBody19 = {
  action: "<value>",
  id: "owasp",
  value: {
    active: true,
  },
};
```

### `models.RequestBody20`

```typescript
const value: models.RequestBody20 = {
  action: "<value>",
  id: "ai_bots",
  value: {},
};
```

### `models.RequestBody21`

```typescript
const value: models.RequestBody21 = {
  action: "<value>",
  value: true,
};
```

### `models.RequestBody22`

```typescript
const value: models.RequestBody22 = {
  action: "<value>",
  value: "<value>",
};
```

