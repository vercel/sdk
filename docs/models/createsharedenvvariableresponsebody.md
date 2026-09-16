# CreateSharedEnvVariableResponseBody

## Example Usage

```typescript
import { CreateSharedEnvVariableResponseBody } from "@vercel/sdk/models/createsharedenvvariableop.js";

let value: CreateSharedEnvVariableResponseBody = {
  created: [
    {
      created: new Date("2021-02-10T13:11:49.180Z"),
      createdAt: 1609492210000,
      createdBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
      deletedAt: 1609492210000,
      deletedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
      id: "env_XCG7t7AIHuO2SBA8667zNUiM",
      key: "my-api-key",
      ownerId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
      projectId: [
        "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
        "prj_2WjyKQmM8ZnGcJsPWMrasEFg",
      ],
      target: [
        "production",
      ],
      type: "encrypted",
      updatedAt: 1609492210000,
      updatedBy: "2qDDuGFTWXBLDNnqZfWPDp1A",
    },
  ],
  failed: [],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `created`                                | [models.Created](../models/created.md)[] | :heavy_check_mark:                       | N/A                                      |
| `failed`                                 | [models.Failed](../models/failed.md)[]   | :heavy_check_mark:                       | N/A                                      |