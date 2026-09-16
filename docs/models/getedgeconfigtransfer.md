# GetEdgeConfigTransfer

Keeps track of the current state of the Global Config while it gets transferred.

## Example Usage

```typescript
import { GetEdgeConfigTransfer } from "@vercel/sdk/models/getedgeconfigop.js";

let value: GetEdgeConfigTransfer = {
  doneAt: null,
  fromAccountId: "<id>",
  startedAt: 5822.65,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |