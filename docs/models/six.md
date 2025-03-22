# Six

The payload of the event, if requested.

## Example Usage

```typescript
import { Six } from "@vercel/sdk/models/userevent.js";

let value: Six = {
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
| `accessGroup`                                                                    | [models.UserEventPayload6AccessGroup](../models/usereventpayload6accessgroup.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `project`                                                                        | [models.Project](../models/project.md)                                           | :heavy_check_mark:                                                               | N/A                                                                              |
| `nextRole`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `previousRole`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |