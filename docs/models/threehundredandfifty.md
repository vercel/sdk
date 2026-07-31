# ThreeHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFifty } from "@vercel/sdk/models/ssoprotectiondeploymenttype.js";

let value: ThreeHundredAndFifty = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 4293.35,
  expiresAt: "1744021700984",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `publicId`         | *string*           | :heavy_check_mark: | N/A                |
| `role`             | *string*           | :heavy_check_mark: | N/A                |
| `maxUses`          | *number*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |