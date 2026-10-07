# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/sixty.js";

let value: EightyOne = {
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
| `project`                                                                  | [models.UserEventPayload81Project](../models/usereventpayload81project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `versionId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |