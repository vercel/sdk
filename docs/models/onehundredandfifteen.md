# OneHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifteen } from "@vercel/sdk/models/payloadresources.js";

let value: OneHundredAndFifteen = {
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
| `configuration`                                                                          | [models.UserEventPayload115Configuration](../models/usereventpayload115configuration.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `newName`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [models.UserEventPayload115Team](../models/usereventpayload115team.md)                   | :heavy_check_mark:                                                                       | N/A                                                                                      |