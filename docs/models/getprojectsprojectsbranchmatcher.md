# GetProjectsProjectsBranchMatcher

## Example Usage

```typescript
import { GetProjectsProjectsBranchMatcher } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsProjectsBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                               | [models.GetProjectsProjectsResponse200ApplicationJSONResponseBodyProjectsLatestDeploymentsType](../models/getprojectsprojectsresponse200applicationjsonresponsebodyprojectslatestdeploymentstype.md) | :heavy_check_mark:                                                                                                                                                                                   | The type of matching to perform                                                                                                                                                                      |
| `pattern`                                                                                                                                                                                            | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The pattern to match against branch names                                                                                                                                                            |