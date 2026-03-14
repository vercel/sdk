# NetworkTransfer

The quantity of data transfered to and from the sandbox, in bytes. This value is only available once the sandbox is stopped, and only if it stopped successfully.

## Example Usage

```typescript
import { NetworkTransfer } from "@vercel/sdk/models/sandbox.js";

let value: NetworkTransfer = {
  ingress: 5357.53,
  egress: 4718.5,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ingress`          | *number*           | :heavy_check_mark: | N/A                |
| `egress`           | *number*           | :heavy_check_mark: | N/A                |