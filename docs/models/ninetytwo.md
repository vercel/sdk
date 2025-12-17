# NinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyTwo } from "@vercel/sdk/models/userevent.js";

let value: NinetyTwo = {
  projectName: "<value>",
  action: "updated",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload92Action](../models/usereventpayload92action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `isEnvVar`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `note`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |