# GetVercelCiJobRunResponseBody

Successfully fetched the job run.

## Example Usage

```typescript
import { GetVercelCiJobRunResponseBody } from "@vercel/sdk/models/getvercelcijobrunop.js";

let value: GetVercelCiJobRunResponseBody = {
  jobRun: {
    invocationId: "<id>",
    invocationAttempt: 8369.75,
    jobDefinitionId: "<id>",
    attempt: 1981.95,
    createdAt: 3654.62,
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `jobRun`                             | [models.JobRun](../models/jobrun.md) | :heavy_check_mark:                   | N/A                                  |