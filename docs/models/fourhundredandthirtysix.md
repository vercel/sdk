# FourHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtySix } from "@vercel/sdk/models/store.js";

let value: FourHundredAndThirtySix = {
  expiresAt: "1747159674440",
  maxUses: 7354,
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