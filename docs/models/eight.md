# Eight

The payload of the event, if requested.

## Example Usage

```typescript
import { Eight } from "@vercel/sdk/models/userevent.js";

let value: Eight = {
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
| `action`                                                               | [models.UserEventPayload8Action](../models/usereventpayload8action.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `environment`                                                          | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `projectName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |