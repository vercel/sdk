# SixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyOne } from "@vercel/sdk/models/retention.js";

let value: SixtyOne = {
  autoExposeSystemEnvs: true,
  projectName: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `autoExposeSystemEnvs` | *boolean*              | :heavy_check_mark:     | N/A                    |
| `projectId`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |