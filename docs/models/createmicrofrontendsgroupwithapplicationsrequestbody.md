# CreateMicrofrontendsGroupWithApplicationsRequestBody

## Example Usage

```typescript
import { CreateMicrofrontendsGroupWithApplicationsRequestBody } from "@vercel/sdk/models/createmicrofrontendsgroupwithapplicationsop.js";

let value: CreateMicrofrontendsGroupWithApplicationsRequestBody = {
  groupName: "MFE Group 1",
  defaultApp: {
    projectId: "<id>",
  },
  otherApplications: [
    {
      projectId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `groupName`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | The name of the microfrontends group that will be used to identify the group    | MFE Group 1                                                                     |
| `defaultApp`                                                                    | [models.DefaultApp](../models/defaultapp.md)                                    | :heavy_check_mark:                                                              | The default app for the new microfrontend group                                 |                                                                                 |
| `otherApplications`                                                             | [models.OtherApplications](../models/otherapplications.md)[]                    | :heavy_check_mark:                                                              | The list of other applications that will be used in the new microfrontend group |                                                                                 |