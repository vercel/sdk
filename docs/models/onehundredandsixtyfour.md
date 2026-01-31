# OneHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFour } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixtyFour = {
  deletedCount: 4045.47,
  inviteIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `deletedCount`     | *number*           | :heavy_check_mark: | N/A                |
| `inviteIds`        | *string*[]         | :heavy_check_mark: | N/A                |