# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/userevent.js";

let value: EightyOne = {
  projectName: "<value>",
  passwordProtection: "preview",
  oldPasswordProtection: {
    deploymentType: "preview",
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `projectName`                  | *string*                       | :heavy_check_mark:             | N/A                            |
| `passwordProtection`           | *models.PasswordProtection*    | :heavy_check_mark:             | N/A                            |
| `oldPasswordProtection`        | *models.OldPasswordProtection* | :heavy_check_mark:             | N/A                            |