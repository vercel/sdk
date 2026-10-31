# UpdateConditionalBypassConditions


## Supported Types

### `models.UpdateConditionalBypassConditions1`

```typescript
const value: models.UpdateConditionalBypassConditions1 = {
  type: "user_agent",
  op: "pre",
  value: "<value>",
};
```

### `models.UpdateConditionalBypassConditions2`

```typescript
const value: models.UpdateConditionalBypassConditions2 = {
  type: "path",
  op: "sub",
  value: "<value>",
};
```

### `models.UpdateConditionalBypassConditions3`

```typescript
const value: models.UpdateConditionalBypassConditions3 = {
  type: "header",
  op: "suf",
  key: "<key>",
  value: "<value>",
};
```

### `models.UpdateConditionalBypassConditions4`

```typescript
const value: models.UpdateConditionalBypassConditions4 = {
  type: "header",
  op: "ex",
  key: "<key>",
};
```

