# CreateFlagsProjectConnectionRequestBody

## Example Usage

```typescript
import { CreateFlagsProjectConnectionRequestBody } from "@vercel/sdk/models/createflagsprojectconnectionop.js";

let value: CreateFlagsProjectConnectionRequestBody = {
  consumerProjectId: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `consumerProjectId`                                                  | *string*                                                             | :heavy_check_mark:                                                   | The project in the same team that may read the flags of this project |