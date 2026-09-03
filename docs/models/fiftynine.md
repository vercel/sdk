# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/ceilingmode.js";

let value: FiftyNine = {
  projectName: "<value>",
  autoExposeSystemEnvs: false,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectId`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |
| `autoExposeSystemEnvs` | *boolean*              | :heavy_check_mark:     | N/A                    |