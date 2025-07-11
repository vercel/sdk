# SeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyEight } from "@vercel/sdk/models/userevent.js";

let value: SeventyEight = {
  projectId: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectName`          | *string*               | :heavy_minus_sign:     | N/A                    |
| `projectId`            | *string*               | :heavy_check_mark:     | N/A                    |
| `projectAnalytics`     | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `prevProjectAnalytics` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |