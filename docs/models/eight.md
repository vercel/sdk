# Eight

The payload of the event, if requested.

## Example Usage

```typescript
import { Eight } from "@vercel/sdk/models/userevent.js";

let value: Eight = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  project: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accessGroup`                                                                    | [models.UserEventPayload8AccessGroup](../models/usereventpayload8accessgroup.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `project`                                                                        | [models.Project](../models/project.md)                                           | :heavy_check_mark:                                                               | N/A                                                                              |
| `nextRole`                                                                       | [models.NextRole](../models/nextrole.md)                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `previousRole`                                                                   | [models.PreviousRole](../models/previousrole.md)                                 | :heavy_minus_sign:                                                               | N/A                                                                              |