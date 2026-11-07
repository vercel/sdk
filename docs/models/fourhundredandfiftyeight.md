# FourHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyEight } from "@vercel/sdk/models/usereventpayload403type.js";

let value: FourHundredAndFiftyEight = {
  exportId: "<id>",
  format: "<value>",
  from: 1480.08,
  to: 7340.56,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `exportId`         | *string*           | :heavy_check_mark: | N/A                |
| `format`           | *string*           | :heavy_check_mark: | N/A                |
| `from`             | *number*           | :heavy_check_mark: | N/A                |
| `to`               | *number*           | :heavy_check_mark: | N/A                |