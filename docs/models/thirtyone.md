# ThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyOne } from "@vercel/sdk/models/userevent.js";

let value: ThirtyOne = {
  projectName: "<value>",
  autoExposeSystemEnvs: true,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |
| `autoExposeSystemEnvs` | *boolean*              | :heavy_check_mark:     | N/A                    |