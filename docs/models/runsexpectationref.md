# RunsExpectationRef

## Example Usage

```typescript
import { RunsExpectationRef } from "@vercel/sdk/models/listcheckrunsop.js";

let value: RunsExpectationRef = {
  invocationAttempt: 5355.2,
  invocationId: "<id>",
  jobDefinitionId: "<id>",
  jobRunAttempt: 250.52,
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `invocationAttempt` | *number*            | :heavy_check_mark:  | N/A                 |
| `invocationId`      | *string*            | :heavy_check_mark:  | N/A                 |
| `jobDefinitionId`   | *string*            | :heavy_check_mark:  | N/A                 |
| `jobRunAttempt`     | *number*            | :heavy_check_mark:  | N/A                 |