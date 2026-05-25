# ThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyNine } from "@vercel/sdk/models/resources.js";

let value: ThirtyNine = {
  projectName: "<value>",
  autoExposeSystemEnvs: true,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |
| `autoExposeSystemEnvs` | *boolean*              | :heavy_check_mark:     | N/A                    |