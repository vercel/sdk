# Thirty

The payload of the event, if requested.

## Example Usage

```typescript
import { Thirty } from "@vercel/sdk/models/userevent.js";

let value: Thirty = {
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accessGroup`                                                                  | [models.UserEventPayloadAccessGroup](../models/usereventpayloadaccessgroup.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `project`                                                                      | [models.Project](../models/project.md)                                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextRole`                                                                     | [models.NextRole](../models/nextrole.md)                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previousRole`                                                                 | [models.PreviousRole](../models/previousrole.md)                               | :heavy_minus_sign:                                                             | N/A                                                                            |