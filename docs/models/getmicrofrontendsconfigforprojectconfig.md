# GetMicrofrontendsConfigForProjectConfig

projectIds are added when the config is uploaded to s3 deployment assets.

## Example Usage

```typescript
import { GetMicrofrontendsConfigForProjectConfig } from "@vercel/sdk/models/getmicrofrontendsconfigforprojectop.js";

let value: GetMicrofrontendsConfigForProjectConfig = {
  applications: {
    "key": {
      development: {
        fallback: "<value>",
      },
      projectId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | See https://openapi.vercel.sh/microfrontends.json.                                                       |
| `version`                                                                                                | [models.GetMicrofrontendsConfigForProjectVersion](../models/getmicrofrontendsconfigforprojectversion.md) | :heavy_minus_sign:                                                                                       | The version of the microfrontends config schema.                                                         |
| `applications`                                                                                           | Record<string, *models.GetMicrofrontendsConfigForProjectApplications*>                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `options`                                                                                                | [models.GetMicrofrontendsConfigForProjectOptions](../models/getmicrofrontendsconfigforprojectoptions.md) | :heavy_minus_sign:                                                                                       | Optional configuration options for the microfrontend.                                                    |