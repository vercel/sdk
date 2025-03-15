# SeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyEight } from "@vercel/sdk/models/userevent.js";

let value: SeventyEight = {
  projectName: "<value>",
  passwordProtection: "all",
  oldPasswordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `projectName`                  | *string*                       | :heavy_check_mark:             | N/A                            |
| `passwordProtection`           | *models.PasswordProtection*    | :heavy_check_mark:             | N/A                            |
| `oldPasswordProtection`        | *models.OldPasswordProtection* | :heavy_check_mark:             | N/A                            |