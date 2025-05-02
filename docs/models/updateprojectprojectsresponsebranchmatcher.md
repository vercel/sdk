# UpdateProjectProjectsResponseBranchMatcher

## Example Usage

```typescript
import { UpdateProjectProjectsResponseBranchMatcher } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectProjectsResponseBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                               | [models.UpdateProjectProjectsResponse200ApplicationJSONResponseBodyTargetsType](../models/updateprojectprojectsresponse200applicationjsonresponsebodytargetstype.md) | :heavy_check_mark:                                                                                                                                                   | The type of matching to perform                                                                                                                                      |
| `pattern`                                                                                                                                                            | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The pattern to match against branch names                                                                                                                            |