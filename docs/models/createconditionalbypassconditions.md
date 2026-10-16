# CreateConditionalBypassConditions


## Supported Types

### `models.Conditions1`

```typescript
const value: models.Conditions1 = {
  type: "user_agent",
  op: "eq",
  value: "<value>",
};
```

### `models.Conditions2`

```typescript
const value: models.Conditions2 = {
  type: "path",
  op: "eq",
  value: "<value>",
};
```

### `models.Conditions3`

```typescript
const value: models.Conditions3 = {
  type: "header",
  op: "pre",
  key: "<key>",
  value: "<value>",
};
```

### `models.Conditions4`

```typescript
const value: models.Conditions4 = {
  type: "header",
  op: "ex",
  key: "<key>",
};
```

