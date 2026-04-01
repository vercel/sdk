# GetMicrofrontendsConfigConfig

projectIds are added when the config is uploaded to s3 deployment assets.

## Example Usage

```typescript
import { GetMicrofrontendsConfigConfig } from "@vercel/sdk/models/getmicrofrontendsconfigop.js";

let value: GetMicrofrontendsConfigConfig = {
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | See https://openapi.vercel.sh/microfrontends.json.                                   |
| `version`                                                                            | [models.GetMicrofrontendsConfigVersion](../models/getmicrofrontendsconfigversion.md) | :heavy_minus_sign:                                                                   | The version of the microfrontends config schema.                                     |
| `applications`                                                                       | Record<string, *models.Applications*>                                                | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `options`                                                                            | [models.Options](../models/options.md)                                               | :heavy_minus_sign:                                                                   | Optional configuration options for the microfrontend.                                |