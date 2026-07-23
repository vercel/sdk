# OneHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyNine } from "@vercel/sdk/models/preventautoblocking.js";

let value: OneHundredAndEightyNine = {
  projectId: "<id>",
  type: "script",
  resourceUrl: "https://kosher-deer.info/",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | [models.UserEventPayloadType](../models/usereventpayloadtype.md) | :heavy_check_mark:                                               | N/A                                                              |
| `resourceUrl`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |