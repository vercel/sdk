# UpdateMicrofrontendsProjectsResponse200BranchMatcher

## Example Usage

```typescript
import { UpdateMicrofrontendsProjectsResponse200BranchMatcher } from "@vercel/sdk/models/updatemicrofrontendspermissions.js";

let value: UpdateMicrofrontendsProjectsResponse200BranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                             | [models.UpdateMicrofrontendsProjectsResponse200ApplicationJSONResponseBodyAliasDeploymentType](../models/updatemicrofrontendsprojectsresponse200applicationjsonresponsebodyaliasdeploymenttype.md) | :heavy_check_mark:                                                                                                                                                                                 | The type of matching to perform                                                                                                                                                                    |
| `pattern`                                                                                                                                                                                          | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The pattern to match against branch names                                                                                                                                                          |