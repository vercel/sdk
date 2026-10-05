# ExpectationRef

## Example Usage

```typescript
import { ExpectationRef } from "@vercel/sdk/models/createdeploymentcheckrunop.js";

let value: ExpectationRef = {
  invocationAttempt: 7136.23,
  invocationId: "<id>",
  jobDefinitionId: "<id>",
  jobRunAttempt: 2476.14,
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `invocationAttempt` | *number*            | :heavy_check_mark:  | N/A                 |
| `invocationId`      | *string*            | :heavy_check_mark:  | N/A                 |
| `jobDefinitionId`   | *string*            | :heavy_check_mark:  | N/A                 |
| `jobRunAttempt`     | *number*            | :heavy_check_mark:  | N/A                 |