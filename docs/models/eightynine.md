# EightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyNine } from "@vercel/sdk/models/eightythree.js";

let value: EightyNine = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `project`                                                                  | [models.UserEventPayload89Project](../models/usereventpayload89project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `versionId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |