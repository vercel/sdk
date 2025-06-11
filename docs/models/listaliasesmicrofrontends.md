# ListAliasesMicrofrontends

The microfrontends for the alias including the routing configuration

## Example Usage

```typescript
import { ListAliasesMicrofrontends } from "@vercel/sdk/models/listaliasesop.js";

let value: ListAliasesMicrofrontends = {
  defaultApp: {
    projectId: "<id>",
  },
  applications: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `defaultApp`                                                             | [models.ListAliasesDefaultApp](../models/listaliasesdefaultapp.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `applications`                                                           | [models.ListAliasesApplications](../models/listaliasesapplications.md)[] | :heavy_check_mark:                                                       | A list of the deployment routing information for each project.           |