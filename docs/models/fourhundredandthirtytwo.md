# FourHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyTwo } from "@vercel/sdk/models/usereventpayload391type.js";

let value: FourHundredAndThirtyTwo = {
  expiresAt: "1763764336250",
  maxUses: 5821.66,
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