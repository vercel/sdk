# UpdateEdgeConfigTransfer

Keeps track of the current state of the Global Config while it gets transferred.

## Example Usage

```typescript
import { UpdateEdgeConfigTransfer } from "@vercel/sdk/models/updateedgeconfigop.js";

let value: UpdateEdgeConfigTransfer = {
  doneAt: 8267,
  fromAccountId: "<id>",
  startedAt: 6053.36,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |