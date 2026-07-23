# Certs

## Example Usage

```typescript
import { Certs } from "@vercel/sdk/models/getcertsop.js";

let value: Certs = {
  id: "<id>",
  createdAt: 7567.26,
  expiresAt: 6914.11,
  autoRenew: true,
  cns: [
    "<value 1>",
    "<value 2>",
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