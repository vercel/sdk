# ListProjectChecksResponseBody

## Example Usage

```typescript
import { ListProjectChecksResponseBody } from "@vercel/sdk/models/listprojectchecksop.js";

let value: ListProjectChecksResponseBody = {
  checks: [
    {
      id: "<id>",
      name: "<value>",
      ownerId: "<id>",
      projectId: "<id>",
      isRerequestable: true,
      requires: "deployment-url",
      source: {
        kind: "integration",
        integrationId: "<id>",
        integrationConfigurationId: "<id>",
      },
      blocks: "deployment-promotion",
      targets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      sourceKind: "integration",
      timeout: 7230.69,
      createdAt: 4176.53,
      updatedAt: 4138.18,
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `checks`                               | [models.Checks](../models/checks.md)[] | :heavy_check_mark:                     | N/A                                    |