# CreateEdgeConfigTransfer

Keeps track of the current state of the Global Config while it gets transferred.

## Example Usage

```typescript
import { CreateEdgeConfigTransfer } from "@vercel/sdk/models/createedgeconfigop.js";

let value: CreateEdgeConfigTransfer = {
  doneAt: 2301.06,
  fromAccountId: "<id>",
  startedAt: 9570.05,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |