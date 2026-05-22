# EightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySeven } from "@vercel/sdk/models/usereventpayload80deployment.js";

let value: EightySeven = {
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `oldTeam`                                                                  | [models.UserEventPayload87OldTeam](../models/usereventpayload87oldteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `newTeam`                                                                  | [models.UserEventPayload87NewTeam](../models/usereventpayload87newteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |