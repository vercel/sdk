# GetVercelCiJobDefinitionResponseBody

Successfully fetched the job definition.

## Example Usage

```typescript
import { GetVercelCiJobDefinitionResponseBody } from "@vercel/sdk/models/getvercelcijobdefinitionop.js";

let value: GetVercelCiJobDefinitionResponseBody = {
  jobDefinition: {
    invocationId: "<id>",
    invocationAttempt: 7455.4,
    jobDefinitionId: "<id>",
    kind: "command",
    name: "<value>",
    command: "<value>",
    createdAt: 3282.2,
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `jobDefinition`                                    | [models.JobDefinition](../models/jobdefinition.md) | :heavy_check_mark:                                 | N/A                                                |