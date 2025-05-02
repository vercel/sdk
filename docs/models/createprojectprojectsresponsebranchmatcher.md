# CreateProjectProjectsResponseBranchMatcher

## Example Usage

```typescript
import { CreateProjectProjectsResponseBranchMatcher } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectProjectsResponseBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                               | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyTargetsType](../models/createprojectprojectsresponse200applicationjsonresponsebodytargetstype.md) | :heavy_check_mark:                                                                                                                                                   | The type of matching to perform                                                                                                                                      |
| `pattern`                                                                                                                                                            | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The pattern to match against branch names                                                                                                                            |