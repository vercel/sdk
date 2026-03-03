# TwoHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortySeven } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndFortySeven = {
  exportId: "<id>",
  from: 2826.75,
  to: 4157.49,
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