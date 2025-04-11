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
      created: 6222.54,
      updated: 4377.9,
      createdAt: 6803.31,
      updatedAt: 2125.86,
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
      created: 5737.31,
      updated: 1243.92,
      createdAt: 1311.69,
      updatedAt: 3964.11,
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

