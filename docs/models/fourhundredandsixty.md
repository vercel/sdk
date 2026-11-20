# FourHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixty } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FourHundredAndSixty = {
  expiresAt: "1755593942532",
  maxUses: 3116.25,
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