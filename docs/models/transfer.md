# Transfer

Keeps track of the current state of the Global Config while it gets transferred.

## Example Usage

```typescript
import { Transfer } from "@vercel/sdk/models/getedgeconfigsop.js";

let value: Transfer = {
  doneAt: 581.88,
  fromAccountId: "<id>",
  startedAt: 554.79,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |