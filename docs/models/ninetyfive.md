# NinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFive } from "@vercel/sdk/models/deployment.js";

let value: NinetyFive = {
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
| `project`                                                                  | [models.UserEventPayload95Project](../models/usereventpayload95project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `versionId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |