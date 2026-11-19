# Seven

The payload of the event, if requested.

## Example Usage

```typescript
import { Seven } from "@vercel/sdk/models/userevent.js";

let value: Seven = {
  action: "read",
  environment: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `action`                                                               | [models.UserEventPayload7Action](../models/usereventpayload7action.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `environment`                                                          | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `projectName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |