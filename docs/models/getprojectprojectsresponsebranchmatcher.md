# GetProjectProjectsResponseBranchMatcher

## Example Usage

```typescript
import { GetProjectProjectsResponseBranchMatcher } from "@vercel/sdk/models/getprojectto1.js";

let value: GetProjectProjectsResponseBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                      | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The pattern to match against branch names                                                                                                                      |
| `type`                                                                                                                                                         | [models.GetProjectProjectsResponse200ApplicationJSONResponseBodyTargetsType](../models/getprojectprojectsresponse200applicationjsonresponsebodytargetstype.md) | :heavy_check_mark:                                                                                                                                             | The type of matching to perform                                                                                                                                |