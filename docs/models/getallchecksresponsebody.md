# GetAllChecksResponseBody

## Example Usage

```typescript
import { GetAllChecksResponseBody } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksResponseBody = {
  checks: [
    {
      createdAt: 3740.14,
      id: "<id>",
      integrationId: "<id>",
      name: "<value>",
      rerequestable: false,
      blocking: true,
      status: "running",
      updatedAt: 7646.44,
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `checks`                               | [models.Checks](../models/checks.md)[] | :heavy_check_mark:                     | N/A                                    |