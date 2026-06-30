# GetProjectProjectsResponseBranchMatcher

## Example Usage

```typescript
import { GetProjectProjectsResponseBranchMatcher } from "@vercel/sdk/models/getprojectlastrollbacktarget.js";

let value: GetProjectProjectsResponseBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                         | [models.GetProjectProjectsResponse200ApplicationJSONResponseBodyTargetsType](../models/getprojectprojectsresponse200applicationjsonresponsebodytargetstype.md) | :heavy_check_mark:                                                                                                                                             | The type of matching to perform                                                                                                                                |
| `pattern`                                                                                                                                                      | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The pattern to match against branch names                                                                                                                      |