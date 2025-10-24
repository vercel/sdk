# UpdateSharedEnvVariableRequestBody

## Example Usage

```typescript
import { UpdateSharedEnvVariableRequestBody } from "@vercel/sdk/models/updatesharedenvvariableop.js";

let value: UpdateSharedEnvVariableRequestBody = {
  updates: {
    "key": {
      key: "API_URL",
      value: "https://api.vercel.com",
      target: [
        "production",
        "preview",
      ],
      projectId: [
        "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
        "prj_2WjyKQmM8ZnGcJsPWMrHRCRV",
      ],
      projectIdUpdates: {
        link: [
          "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
        ],
        unlink: [
          "prj_2WjyKQmM8ZnGcJsPWMrHRCRV",
        ],
      },
      type: "encrypted",
      comment: "database connection string for production",
    },
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `updates`                                              | Record<string, [models.Updates](../models/updates.md)> | :heavy_check_mark:                                     | N/A                                                    |