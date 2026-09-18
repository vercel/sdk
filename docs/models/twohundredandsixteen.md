# TwoHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixteen } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndSixteen = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `blockReason`      | *string*           | :heavy_minus_sign: | N/A                |
| `cause`            | *string*           | :heavy_check_mark: | N/A                |
| `ownerId`          | *string*           | :heavy_check_mark: | N/A                |
| `source`           | *string*           | :heavy_check_mark: | N/A                |