# FiveHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyTwo } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyTwo = {
  commitSha: "<value>",
  invocationId: "<id>",
  organizationId: "<id>",
  pullRequestNumber: 9596.59,
  repository: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `commitSha`         | *string*            | :heavy_check_mark:  | N/A                 |
| `invocationId`      | *string*            | :heavy_check_mark:  | N/A                 |
| `organizationId`    | *string*            | :heavy_check_mark:  | N/A                 |
| `pullRequestNumber` | *number*            | :heavy_check_mark:  | N/A                 |
| `repository`        | *string*            | :heavy_check_mark:  | N/A                 |