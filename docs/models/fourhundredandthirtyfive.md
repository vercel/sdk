# FourHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyFive } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FourHundredAndThirtyFive = {
  eventId: "<id>",
  occurredAt: 1907.99,
  projectId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `eventId`          | *string*           | :heavy_check_mark: | N/A                |
| `occurredAt`       | *number*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_minus_sign: | N/A                |