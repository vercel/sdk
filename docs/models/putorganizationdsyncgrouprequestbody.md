# PutOrganizationDsyncGroupRequestBody

## Example Usage

```typescript
import { PutOrganizationDsyncGroupRequestBody } from "@vercel/sdk/models/putorganizationdsyncgroupop.js";

let value: PutOrganizationDsyncGroupRequestBody = {
  assignments: {},
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `assignments`                                                                                                        | [models.PutOrganizationDsyncGroupAssignments](../models/putorganizationdsyncgroupassignments.md)                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `overrideLockout`                                                                                                    | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Save even if the change would leave the root team without an owner or the acting admin without the Owner role on it. |