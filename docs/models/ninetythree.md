# NinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyThree } from "@vercel/sdk/models/rule.js";

let value: NinetyThree = {
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
| `project`                                                                  | [models.UserEventPayload93Project](../models/usereventpayload93project.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `versionId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |