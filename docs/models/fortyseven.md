# FortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySeven } from "@vercel/sdk/models/userevent.js";

let value: FortySeven = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "competent-lady.info",
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