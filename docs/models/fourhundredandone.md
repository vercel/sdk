# FourHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndOne } from "@vercel/sdk/models/fourhundredandone.js";

let value: FourHundredAndOne = {
  exportId: "<id>",
  format: "<value>",
  from: 8763.22,
  to: 7095.95,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `exportId`         | *string*           | :heavy_check_mark: | N/A                |
| `format`           | *string*           | :heavy_check_mark: | N/A                |
| `from`             | *number*           | :heavy_check_mark: | N/A                |
| `to`               | *number*           | :heavy_check_mark: | N/A                |