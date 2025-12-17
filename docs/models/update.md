# Update

Update an existing bypass

## Example Usage

```typescript
import { Update } from "@vercel/sdk/models/updateprojectprotectionbypassop.js";

let value: Update = {
  secret: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `secret`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Automation bypass to updated                                                                                 |
| `isEnvVar`                                                                                                   | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Whether or not this bypass is set as the VERCEL_AUTOMATION_BYPASS_SECRET environment variable on deployments |
| `note`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Note to be displayed in the UI for this bypass                                                               |