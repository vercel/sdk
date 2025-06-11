# SeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyNine } from "@vercel/sdk/models/userevent.js";

let value: SeventyNine = {
  projectName: "<value>",
  passwordProtection: {
    deploymentType: "all",
  },
  oldPasswordProtection: {
    deploymentType: "all",
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `projectName`                  | *string*                       | :heavy_check_mark:             | N/A                            |
| `passwordProtection`           | *models.PasswordProtection*    | :heavy_check_mark:             | N/A                            |
| `oldPasswordProtection`        | *models.OldPasswordProtection* | :heavy_check_mark:             | N/A                            |