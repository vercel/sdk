# OneHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyTwo } from "@vercel/sdk/models/fluidduration.js";

let value: OneHundredAndFortyTwo = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ownerId`          | *string*           | :heavy_check_mark: | N/A                |
| `source`           | *string*           | :heavy_check_mark: | N/A                |
| `cause`            | *string*           | :heavy_check_mark: | N/A                |
| `blockReason`      | *string*           | :heavy_minus_sign: | N/A                |