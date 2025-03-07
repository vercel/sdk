# UploadCertResponseBody

## Example Usage

```typescript
import { UploadCertResponseBody } from "@vercel/sdk/models/uploadcertop.js";

let value: UploadCertResponseBody = {
  id: "<id>",
  createdAt: 8241.05,
  expiresAt: 1777.16,
  autoRenew: false,
  cns: [
    "<value>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `createdAt`        | *number*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *number*           | :heavy_check_mark: | N/A                |
| `autoRenew`        | *boolean*          | :heavy_check_mark: | N/A                |
| `cns`              | *string*[]         | :heavy_check_mark: | N/A                |