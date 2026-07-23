# ThreeHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndForty } from "@vercel/sdk/models/threehundredandthirtyseven.js";

let value: ThreeHundredAndForty = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 4639.91,
  expiresAt: "1762953304664",
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