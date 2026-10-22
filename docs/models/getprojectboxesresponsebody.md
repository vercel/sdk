# GetProjectBoxesResponseBody

The daemons of the project and the pagination details.

## Example Usage

```typescript
import { GetProjectBoxesResponseBody } from "@vercel/sdk/models/getprojectboxesop.js";

let value: GetProjectBoxesResponseBody = {
  daemons: [],
  pagination: {
    count: 7109.75,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `daemons`                                                                  | [models.Daemons](../models/daemons.md)[]                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pagination`                                                               | [models.GetProjectBoxesPagination](../models/getprojectboxespagination.md) | :heavy_check_mark:                                                         | N/A                                                                        |