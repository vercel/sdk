# TwoHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyTwo } from "@vercel/sdk/models/factors1.js";

let value: TwoHundredAndSixtyTwo = {
  justification: "<value>",
  pattern: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `justification`        | *string*               | :heavy_check_mark:     | N/A                    |
| `pattern`              | *string*               | :heavy_check_mark:     | N/A                    |
| `projectId`            | *string*               | :heavy_check_mark:     | N/A                    |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |