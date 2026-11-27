# FourHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyFive } from "@vercel/sdk/models/fourhundredandfortyfive.js";

let value: FourHundredAndNinetyFive = {
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