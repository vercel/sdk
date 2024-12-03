# Transfer

Keeps track of the current state of the Edge Config while it gets transferred.

## Example Usage

```typescript
import { Transfer } from "@vercel/sdk/models/operations/getedgeconfigs.js";

let value: Transfer = {
  fromAccountId: "<id>",
  startedAt: 7486.06,
  doneAt: 4526.54,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |