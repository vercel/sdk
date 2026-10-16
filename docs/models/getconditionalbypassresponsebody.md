# GetConditionalBypassResponseBody


## Supported Types

### `models.GetConditionalBypassResponseBody1`

```typescript
const value: models.GetConditionalBypassResponseBody1 = {
  result: [],
};
```

### `models.GetConditionalBypassResponseBody2`

```typescript
const value: models.GetConditionalBypassResponseBody2 = {
  pagination: {
    next: "<value>",
  },
  result: [
    {
      conditionGroup: [
        {
          conditions: [
            {
              op: "lt",
              type: "region",
            },
          ],
        },
      ],
      domain: "weekly-middle.net",
    },
  ],
};
```

