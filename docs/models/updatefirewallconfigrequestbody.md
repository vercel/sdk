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
            type: "cookie",
            op: "lte",
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
            type: "scheme",
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
  value: 9901.25,
};
```

### `models.UpdateFirewallConfigRequestBody6`

```typescript
const value: models.UpdateFirewallConfigRequestBody6 = {
  action: "crs.update",
  id: "sf",
  value: {
    active: false,
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
    hostname: "questionable-marimba.info",
    ip: "1d0e:0eee:d411:839c:0fff:4cf6:dcb3:fa5a",
    action: "deny",
  },
};
```

### `models.UpdateFirewallConfigRequestBody9`

```typescript
const value: models.UpdateFirewallConfigRequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "idolized-tuxedo.name",
    ip: "6c8e:bfeb:b75e:a5e0:5596:e99e:fee8:b71f",
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
  id: "<id>",
  value: {
    active: false,
  },
};
```

### `models.RequestBody12`

```typescript
const value: models.RequestBody12 = {
  action: "<value>",
  id: "<id>",
  value: {
    "key": {
      active: false,
    },
  },
};
```

