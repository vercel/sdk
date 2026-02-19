# GetAllChecksResponseBody

## Example Usage

```typescript
import { GetAllChecksResponseBody } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksResponseBody = {
  checks: [
    {
      createdAt: 7107.03,
      id: "<id>",
      integrationId: "<id>",
      name: "<value>",
      rerequestable: true,
      blocking: true,
      status: "running",
      updatedAt: 2249.21,
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `checks`                                                       | [models.GetAllChecksChecks](../models/getallcheckschecks.md)[] | :heavy_check_mark:                                             | N/A                                                            |