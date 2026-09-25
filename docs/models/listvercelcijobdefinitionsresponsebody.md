# ListVercelCiJobDefinitionsResponseBody

Successfully listed job definitions.

## Example Usage

```typescript
import { ListVercelCiJobDefinitionsResponseBody } from "@vercel/sdk/models/listvercelcijobdefinitionsop.js";

let value: ListVercelCiJobDefinitionsResponseBody = {
  jobDefinitions: [
    {
      invocationId: "<id>",
      invocationAttempt: 3515.47,
      jobDefinitionId: "<id>",
      kind: "turbo",
      name: "<value>",
      command: "<value>",
      createdAt: 2562.28,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `jobDefinitions`                                       | [models.JobDefinitions](../models/jobdefinitions.md)[] | :heavy_check_mark:                                     | N/A                                                    |