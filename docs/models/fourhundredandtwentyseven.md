# FourHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentySeven } from "@vercel/sdk/models/fourhundredandtwentytwo.js";

let value: FourHundredAndTwentySeven = {
  organizationId: "<id>",
  teamIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `teamIds`          | *string*[]         | :heavy_check_mark: | N/A                |