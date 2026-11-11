# ConnectionTesting

Whether both dedicated connection test sources are provisioned and ready. Feature flag access and management permission are checked on submission.

## Example Usage

```typescript
import { ConnectionTesting } from "@vercel/sdk/models/network.js";

let value: ConnectionTesting = {
  available: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `available`        | *boolean*          | :heavy_check_mark: | N/A                |