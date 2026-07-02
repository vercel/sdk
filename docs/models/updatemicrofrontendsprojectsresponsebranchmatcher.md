# UpdateMicrofrontendsProjectsResponseBranchMatcher

## Example Usage

```typescript
import { UpdateMicrofrontendsProjectsResponseBranchMatcher } from "@vercel/sdk/models/updatemicrofrontendspermissions.js";

let value: UpdateMicrofrontendsProjectsResponseBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [models.UpdateMicrofrontendsProjectsResponse200ApplicationJSONResponseBodyTargetsType](../models/updatemicrofrontendsprojectsresponse200applicationjsonresponsebodytargetstype.md) | :heavy_check_mark:                                                                                                                                                                 | The type of matching to perform                                                                                                                                                    |
| `pattern`                                                                                                                                                                          | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | The pattern to match against branch names                                                                                                                                          |