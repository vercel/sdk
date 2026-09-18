# OneHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyOne } from "@vercel/sdk/models/deployhook.js";

let value: OneHundredAndTwentyOne = {
  name: "<value>",
  ownerName: "<value>",
  teamId: "<id>",
  userId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `ownerName`        | *string*           | :heavy_check_mark: | N/A                |
| `teamId`           | *string*           | :heavy_check_mark: | N/A                |
| `userId`           | *string*           | :heavy_check_mark: | N/A                |