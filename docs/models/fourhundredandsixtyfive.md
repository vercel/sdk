# FourHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyFive } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FourHundredAndSixtyFive = {
  expiresAt: "1737220661930",
  maxUses: 2531.33,
  publicId: "<id>",
  role: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `expiresAt`        | *string*           | :heavy_check_mark: | N/A                |
| `maxUses`          | *number*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `publicId`         | *string*           | :heavy_check_mark: | N/A                |
| `role`             | *string*           | :heavy_check_mark: | N/A                |