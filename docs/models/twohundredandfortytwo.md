# TwoHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyTwo } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  addedProjects: [],
  removedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  addedProviders: [
    "<value 1>",
  ],
  removedProviders: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `projectName`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `addedProjects`                                          | [models.AddedProjects](../models/addedprojects.md)[]     | :heavy_check_mark:                                       | N/A                                                      |
| `removedProjects`                                        | [models.RemovedProjects](../models/removedprojects.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `addedProviders`                                         | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `removedProviders`                                       | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |