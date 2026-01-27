# OneHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixty } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixty = {
  deletedCount: 8008.02,
  inviteIds: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `deletedCount`     | *number*           | :heavy_check_mark: | N/A                |
| `inviteIds`        | *string*[]         | :heavy_check_mark: | N/A                |