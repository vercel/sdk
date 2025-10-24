# CreateProjectEnvResponseBody

The environment variable was created successfully

## Example Usage

```typescript
import { CreateProjectEnvResponseBody } from "@vercel/sdk/models/createprojectenvop.js";

let value: CreateProjectEnvResponseBody = {
  created: {
    type: "sensitive",
    value: "<value>",
    key: "<key>",
  },
  failed: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `created`                                                              | *models.CreateProjectEnvCreated*                                       | :heavy_check_mark:                                                     | N/A                                                                    |
| `failed`                                                               | [models.CreateProjectEnvFailed](../models/createprojectenvfailed.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |