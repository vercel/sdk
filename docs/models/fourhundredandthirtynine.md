# FourHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyNine } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FourHundredAndThirtyNine = {
  eventId: "<id>",
  occurredAt: 8193.14,
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