# TwoHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNine } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndNine = {
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
| `reason`           | *string*           | :heavy_minus_sign: | N/A                |