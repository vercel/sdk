# FourHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThree } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: FourHundredAndThree = {
  deletedCount: 1988.51,
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