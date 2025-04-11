# GetAllChecksResponseBody

## Example Usage

```typescript
import { GetAllChecksResponseBody } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksResponseBody = {
  checks: [
    {
      createdAt: 6926.62,
      id: "<id>",
      integrationId: "<id>",
      name: "<value>",
      rerequestable: false,
      status: "completed",
      updatedAt: 2255.64,
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `checks`                               | [models.Checks](../models/checks.md)[] | :heavy_check_mark:                     | N/A                                    |