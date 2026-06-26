# ThreeHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEleven } from "@vercel/sdk/models/rollbackdescription.js";

let value: ThreeHundredAndEleven = {
  deletedCount: 9238.09,
  inviteIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `deletedCount`     | *number*           | :heavy_check_mark: | N/A                |
| `inviteIds`        | *string*[]         | :heavy_check_mark: | N/A                |