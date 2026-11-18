# FiveHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyOne } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundredAndTwentyOne = {
  commitSha: "<value>",
  invocationId: "<id>",
  organizationId: "<id>",
  pullRequestNumber: 3367.52,
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