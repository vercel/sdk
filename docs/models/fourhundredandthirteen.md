# FourHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirteen } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: FourHundredAndThirteen = {
  expiresAt: "1765341935760",
  maxUses: 3762.08,
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