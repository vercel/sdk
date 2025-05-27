# ListAliasesMicrofrontends

The microfrontends for the alias including the routing configuration

## Example Usage

```typescript
import { ListAliasesMicrofrontends } from "@vercel/sdk/models/listaliasesop.js";

let value: ListAliasesMicrofrontends = {
  defaultApp: {
    projectId: "<id>",
  },
  applications: {
    "key": {
      fallbackHost: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `defaultApp`                                                                                                    | [models.ListAliasesDefaultApp](../models/listaliasesdefaultapp.md)                                              | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `applications`                                                                                                  | Record<string, [models.ListAliasesApplications](../models/listaliasesapplications.md)>                          | :heavy_check_mark:                                                                                              | A mapping from `projectId` to information that should be used if the path is routed to that particular project. |