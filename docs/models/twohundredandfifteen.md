# TwoHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifteen } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndFifteen = {
  cause: "<value>",
  ownerId: "<id>",
  source: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cause`            | *string*           | :heavy_check_mark: | N/A                |
| `ownerId`          | *string*           | :heavy_check_mark: | N/A                |
| `reason`           | *string*           | :heavy_minus_sign: | N/A                |
| `source`           | *string*           | :heavy_check_mark: | N/A                |