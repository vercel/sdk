# Five

The payload of the event, if requested.

## Example Usage

```typescript
import { Five } from "@vercel/sdk/models/userevent.js";

let value: Five = {
  action: "read",
  environment: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `action`                                                               | [models.UserEventPayload5Action](../models/usereventpayload5action.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `environment`                                                          | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |