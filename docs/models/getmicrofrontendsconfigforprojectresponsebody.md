# GetMicrofrontendsConfigForProjectResponseBody

## Example Usage

```typescript
import { GetMicrofrontendsConfigForProjectResponseBody } from "@vercel/sdk/models/getmicrofrontendsconfigforprojectop.js";

let value: GetMicrofrontendsConfigForProjectResponseBody = {
  config: {
    applications: {
      "key": {
        development: {
          fallback: "<value>",
        },
        projectId: "<id>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `config`                                                                                               | [models.GetMicrofrontendsConfigForProjectConfig](../models/getmicrofrontendsconfigforprojectconfig.md) | :heavy_check_mark:                                                                                     | projectIds are added when the config is uploaded to s3 deployment assets.                              |