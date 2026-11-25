# OneHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNineteen } from "@vercel/sdk/models/usereventpayload82resourcestype.js";

let value: OneHundredAndNineteen = {
  configuration: {
    id: "<id>",
  },
  newName: "<value>",
  team: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `configuration`                                                                          | [models.UserEventPayload119Configuration](../models/usereventpayload119configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `newName`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload119Team](../models/usereventpayload119team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |