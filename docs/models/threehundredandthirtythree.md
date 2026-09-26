# ThreeHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyThree } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: ThreeHundredAndThirtyThree = {
  addedProjects: [],
  addedProviders: [],
  projectId: "<id>",
  projectName: "<value>",
  removedProjects: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  removedProviders: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `addedProjects`                                          | [models.AddedProjects](../models/addedprojects.md)[]     | :heavy_check_mark:                                       | N/A                                                      |
| `addedProviders`                                         | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `enableVercelCiSameRepository`                           | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `projectName`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `removedProjects`                                        | [models.RemovedProjects](../models/removedprojects.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `removedProviders`                                       | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |