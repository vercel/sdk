# CreateProjectInternalRoutes2

## Example Usage

```typescript
import { CreateProjectInternalRoutes2 } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectInternalRoutes2 = {
  has: [],
  mitigate: {
    action: "block_legal_cwc",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `has`                                                                | *models.InternalRoutesHas*[]                                         | :heavy_check_mark:                                                   | N/A                                                                  |
| `mitigate`                                                           | [models.InternalRoutesMitigate](../models/internalroutesmitigate.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `src`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |