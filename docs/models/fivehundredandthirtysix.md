# FiveHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtySix } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtySix = {
  commitSha: "<value>",
  invocationId: "<id>",
  organizationId: "<id>",
  pullRequestNumber: 4658.47,
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