# EightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyEight } from "@vercel/sdk/models/usereventpayload80deployment.js";

let value: EightyEight = {
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