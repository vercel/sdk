# ListProjectChecksResponseBody

## Example Usage

```typescript
import { ListProjectChecksResponseBody } from "@vercel/sdk/models/listprojectchecksop.js";

let value: ListProjectChecksResponseBody = {
  availableNativeChecks: [
    "<value 1>",
    "<value 2>",
  ],
  checks: [
    {
      blocks: "deployment-alias",
      createdAt: 6008.17,
      id: "<id>",
      isRerequestable: true,
      name: "<value>",
      ownerId: "<id>",
      projectId: "<id>",
      requires: "deployment-url",
      source: {
        externalCheckName: "<value>",
        kind: "git-provider",
        provider: "github",
      },
      sourceKind: "vercel",
      targets: [
        "<value 1>",
      ],
      timeout: 4138.18,
      updatedAt: 4905.95,
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `availableNativeChecks`                | *string*[]                             | :heavy_check_mark:                     | N/A                                    |
| `checks`                               | [models.Checks](../models/checks.md)[] | :heavy_check_mark:                     | N/A                                    |