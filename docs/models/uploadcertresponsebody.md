# UploadCertResponseBody

## Example Usage

```typescript
import { UploadCertResponseBody } from "@vercel/sdk/models/uploadcertop.js";

let value: UploadCertResponseBody = {
  autoRenew: false,
  cns: [
    "<value 1>",
  ],
  createdAt: 8931.53,
  expiresAt: 9964.38,
  id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `autoRenew`        | *boolean*          | :heavy_check_mark: | N/A                |
| `cns`              | *string*[]         | :heavy_check_mark: | N/A                |
| `createdAt`        | *number*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *number*           | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |