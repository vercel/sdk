# NetworkTransfer

The quantity of data transfered to and from the sandbox, in bytes. This value is only available once the sandbox is stopped, and only if it stopped successfully.

## Example Usage

```typescript
import { NetworkTransfer } from "@vercel/sdk/models/session.js";

let value: NetworkTransfer = {
  egress: 5357.53,
  ingress: 4718.5,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `egress`           | *number*           | :heavy_check_mark: | N/A                |
| `ingress`          | *number*           | :heavy_check_mark: | N/A                |