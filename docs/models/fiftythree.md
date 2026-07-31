# FiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyThree } from "@vercel/sdk/models/usereventpayload41action.js";

let value: FiftyThree = {
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