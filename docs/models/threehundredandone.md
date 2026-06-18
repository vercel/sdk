# ThreeHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndOne } from "@vercel/sdk/models/threehundredandone.js";

let value: ThreeHundredAndOne = {
  deletedCount: 5681.15,
  inviteIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `deletedCount`     | *number*           | :heavy_check_mark: | N/A                |
| `inviteIds`        | *string*[]         | :heavy_check_mark: | N/A                |