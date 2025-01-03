# GetRecordsResponseBody

Successful response retrieving a list of paginated DNS records.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `models.GetRecordsResponseBody2`

```typescript
const value: models.GetRecordsResponseBody2 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "CNAME",
      value: "<value>",
      creator: "<value>",
      created: 1274.99,
      updated: 8406.41,
      createdAt: 597.58,
      updatedAt: 3502.71,
    },
  ],
};
```

### `models.ResponseBody3`

```typescript
const value: models.ResponseBody3 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "NS",
      value: "<value>",
      creator: "<value>",
      created: 9607.66,
      updated: 6405.65,
      createdAt: 6886.48,
      updatedAt: 424.54,
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

