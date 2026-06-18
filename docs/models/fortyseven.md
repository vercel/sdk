# FortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySeven } from "@vercel/sdk/models/userevent.js";

let value: FortySeven = {
  projectName: "<value>",
  autoExposeSystemEnvs: true,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectId`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |
| `autoExposeSystemEnvs` | *boolean*              | :heavy_check_mark:     | N/A                    |