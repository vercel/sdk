# FortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFive } from "@vercel/sdk/models/userevent.js";

let value: FortyFive = {
  name: "<value>",
  userId: "<id>",
  teamId: "<id>",
  ownerName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `userId`           | *string*           | :heavy_check_mark: | N/A                |
| `teamId`           | *string*           | :heavy_check_mark: | N/A                |
| `ownerName`        | *string*           | :heavy_check_mark: | N/A                |