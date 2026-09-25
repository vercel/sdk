# RetryVercelCiInvocationResponseBody

Successfully scheduled the invocation retry.

## Example Usage

```typescript
import { RetryVercelCiInvocationResponseBody } from "@vercel/sdk/models/retryvercelciinvocationop.js";

let value: RetryVercelCiInvocationResponseBody = {
  invocationId: "<id>",
  attempt: 4296.67,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invocationId`     | *string*           | :heavy_check_mark: | N/A                |
| `attempt`          | *number*           | :heavy_check_mark: | N/A                |