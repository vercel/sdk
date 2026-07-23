# Payload4

The payload of the event, if requested.

## Example Usage

```typescript
import { Payload4 } from "@vercel/sdk/models/userevent.js";

let value: Payload4 = {
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
| `action`                                                               | [models.UserEventPayload4Action](../models/usereventpayload4action.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectName`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `environment`                                                          | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |