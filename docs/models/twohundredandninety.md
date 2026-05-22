# TwoHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinety } from "@vercel/sdk/models/payloadenvironment.js";

let value: TwoHundredAndNinety = {
  publicId: "<id>",
  role: "<value>",
  maxUses: 2000.02,
  expiresAt: "1743720577142",
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