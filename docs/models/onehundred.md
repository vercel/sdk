# OneHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundred } from "@vercel/sdk/models/jobprovider.js";

let value: OneHundred = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "sneaky-privilege.net",
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `value`            | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |
| `mxPriority`       | *number*           | :heavy_minus_sign: | N/A                |