# TwoHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyTwo } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndTwentyTwo = {
  exportId: "<id>",
  from: 4076.34,
  to: 5457.12,
  format: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `exportId`         | *string*           | :heavy_check_mark: | N/A                |
| `from`             | *number*           | :heavy_check_mark: | N/A                |
| `to`               | *number*           | :heavy_check_mark: | N/A                |
| `format`           | *string*           | :heavy_check_mark: | N/A                |