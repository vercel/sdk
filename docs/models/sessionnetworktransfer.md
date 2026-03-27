# SessionNetworkTransfer

The quantity of data transfered to and from the sandbox, in bytes. This value is only available once the sandbox is stopped, and only if it stopped successfully.

## Example Usage

```typescript
import { SessionNetworkTransfer } from "@vercel/sdk/models/session.js";

let value: SessionNetworkTransfer = {
  ingress: 2785.84,
  egress: 6037.34,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ingress`          | *number*           | :heavy_check_mark: | N/A                |
| `egress`           | *number*           | :heavy_check_mark: | N/A                |