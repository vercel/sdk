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
            type: "scheme",
            op: "gte",
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
            type: "path",
            op: "inc",
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
  value: 2569.75,
};
```

### `models.RequestBody6`

```typescript
const value: models.RequestBody6 = {
  action: "crs.update",
  id: "lfi",
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
    hostname: "posh-hunger.com",
    ip: "f40b:eec6:7da2:562a:ee10:67bf:8ffa:d17e",
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
    hostname: "tense-possession.info",
    ip: "bfb2:b8f6:57cd:36c9:9cea:fbb6:ecd1:eb07",
    action: "log",
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
  id: "<id>",
  value: {
    active: false,
  },
};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {
  action: "<value>",
  id: "<id>",
  value: {
    "key": {
      active: false,
    },
  },
};
```

