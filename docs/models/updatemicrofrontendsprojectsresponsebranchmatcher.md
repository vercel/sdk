# UpdateMicrofrontendsProjectsResponseBranchMatcher

## Example Usage

```typescript
import { UpdateMicrofrontendsProjectsResponseBranchMatcher } from "@vercel/sdk/models/updatemicrofrontendsfrompreset.js";

let value: UpdateMicrofrontendsProjectsResponseBranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                          | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | The pattern to match against branch names                                                                                                                                          |
| `type`                                                                                                                                                                             | [models.UpdateMicrofrontendsProjectsResponse200ApplicationJSONResponseBodyTargetsType](../models/updatemicrofrontendsprojectsresponse200applicationjsonresponsebodytargetstype.md) | :heavy_check_mark:                                                                                                                                                                 | The type of matching to perform                                                                                                                                                    |