# ThreeHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndOne } from "@vercel/sdk/models/payloadenvironment.js";

let value: ThreeHundredAndOne = {
  exportId: "<id>",
  from: 5681.15,
  to: 5179.77,
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