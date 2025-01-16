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
            op: "gt",
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
            type: "query",
            op: "sub",
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
  value: 8513.24,
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
    hostname: "pricey-valuable.biz",
    ip: "79.66.193.187",
    action: "log",
  },
};
```

### `models.RequestBody9`

```typescript
const value: models.RequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "edible-straw.org",
    ip: "eb66:64dc:a8e4:c14d:ecdf:aac2:fb3f:7ddb",
    action: "deny",
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

