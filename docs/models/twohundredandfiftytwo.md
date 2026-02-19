# TwoHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyTwo } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndFiftyTwo = {
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