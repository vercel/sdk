# EightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFive } from "@vercel/sdk/models/usereventpayload72action.js";

let value: EightyFive = {
  autoExposeSystemEnvs: false,
  projectName: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `autoExposeSystemEnvs` | *boolean*              | :heavy_check_mark:     | N/A                    |
| `projectId`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |