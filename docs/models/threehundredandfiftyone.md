# ThreeHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyOne } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndFiftyOne = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 3379.77,
  expiresAt: "1758025649293",
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