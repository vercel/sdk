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
      type: "SRV",
      value: "<value>",
      creator: "<value>",
      created: 2814.54,
      updated: 3772.69,
      createdAt: 9260.27,
      updatedAt: 8180.78,
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
      type: "MX",
      value: "<value>",
      creator: "<value>",
      created: 2214.9,
      updated: 442.52,
      createdAt: 4312.58,
      updatedAt: 6726.27,
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

