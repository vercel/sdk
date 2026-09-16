# Certs

## Example Usage

```typescript
import { Certs } from "@vercel/sdk/models/getcertsop.js";

let value: Certs = {
  autoRenew: false,
  cns: [
    "<value 1>",
    "<value 2>",
  ],
  createdAt: 2165.26,
  expiresAt: 5426.74,
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