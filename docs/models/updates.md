# Updates

## Example Usage

```typescript
import { Updates } from "@vercel/sdk/models/updatesharedenvvariableop.js";

let value: Updates = {
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `key`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | The name of the Shared Environment Variable                                          | API_URL                                                                              |
| `value`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | The value of the Shared Environment Variable                                         | https://api.vercel.com                                                               |
| `target`                                                                             | [models.UpdateSharedEnvVariableTarget](../models/updatesharedenvvariabletarget.md)[] | :heavy_minus_sign:                                                                   | The target environment of the Shared Environment Variable                            | [<br/>"production",<br/>"preview"<br/>]                                              |
| `projectId`                                                                          | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Associate a Shared Environment Variable to projects.                                 | [<br/>"prj_2WjyKQmM8ZnGcJsPWMrHRHrE",<br/>"prj_2WjyKQmM8ZnGcJsPWMrHRCRV"<br/>]       |
| `projectIdUpdates`                                                                   | [models.ProjectIdUpdates](../models/projectidupdates.md)                             | :heavy_minus_sign:                                                                   | Incrementally update project associations without specifying the full list           |                                                                                      |
| `type`                                                                               | [models.UpdateSharedEnvVariableType](../models/updatesharedenvvariabletype.md)       | :heavy_minus_sign:                                                                   | The new type of the Shared Environment Variable                                      | encrypted                                                                            |
| `comment`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | A comment to add context on what this Shared Environment Variable is for             | database connection string for production                                            |