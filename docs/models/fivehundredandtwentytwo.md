# FiveHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyTwo } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTwentyTwo = {
  alertType: "<value>",
  groupId: "<id>",
  projectId: "<id>",
  alertId: "<id>",
  startedAt: 8906.19,
  title: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `alertType`        | *string*           | :heavy_check_mark: | N/A                |
| `groupId`          | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `severity`         | *string*           | :heavy_minus_sign: | N/A                |
| `alertId`          | *string*           | :heavy_check_mark: | N/A                |
| `resolvedAt`       | *number*           | :heavy_minus_sign: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `title`            | *string*           | :heavy_check_mark: | N/A                |