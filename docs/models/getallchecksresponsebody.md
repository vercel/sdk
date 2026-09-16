# GetAllChecksResponseBody

## Example Usage

```typescript
import { GetAllChecksResponseBody } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksResponseBody = {
  checks: [
    {
      blocking: false,
      createdAt: 2255.64,
      id: "<id>",
      integrationId: "<id>",
      name: "<value>",
      rerequestable: true,
      status: "completed",
      updatedAt: 2249.21,
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `checks`                                                       | [models.GetAllChecksChecks](../models/getallcheckschecks.md)[] | :heavy_check_mark:                                             | N/A                                                            |