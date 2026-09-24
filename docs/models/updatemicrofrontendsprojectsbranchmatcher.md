# UpdateMicrofrontendsProjectsBranchMatcher

## Example Usage

```typescript
import { UpdateMicrofrontendsProjectsBranchMatcher } from "@vercel/sdk/models/updatemicrofrontendsto.js";

let value: UpdateMicrofrontendsProjectsBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pattern`                                                                                                                                                                                              | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The pattern to match against branch names                                                                                                                                                              |
| `type`                                                                                                                                                                                                 | [models.UpdateMicrofrontendsProjectsResponse200ApplicationJSONResponseBodyLatestDeploymentsType](../models/updatemicrofrontendsprojectsresponse200applicationjsonresponsebodylatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                                     | The type of matching to perform                                                                                                                                                                        |