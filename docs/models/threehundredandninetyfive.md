# ThreeHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyFive } from "@vercel/sdk/models/usereventpayload385project.js";

let value: ThreeHundredAndNinetyFive = {
  certificateFingerprints: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  connectionId: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `certificateFingerprints` | *string*[]                | :heavy_check_mark:        | N/A                       |
| `connectionId`            | *string*                  | :heavy_check_mark:        | N/A                       |